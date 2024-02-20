document.addEventListener("DOMContentLoaded", () => {
  const $checkbox = document.querySelector(".button.check");

  const isUserColorTheme = localStorage.getItem("color-theme");
  const isOsColorTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

  const getUserTheme = () => (isUserColorTheme ? isUserColorTheme : isOsColorTheme);

  const setUserTheme = (theme) => {
    localStorage.setItem("color-theme", theme);

    document.documentElement.setAttribute("color-theme", theme);
    if ($checkbox) {
      if (theme === "dark") {
        $checkbox.checked = true;
      } else {
        $checkbox.checked = false;
      }
    }
  };

  window.onload = function () {
    const userTheme = getUserTheme();
    setUserTheme(userTheme);
  };

  $checkbox?.addEventListener("click", (e) => {
    const theme = e.target.checked ? "dark" : "light";
    setUserTheme(theme);
  });
});

window.addEventListener("pageshow", (event) => {
  if (event.persisted || performance.getEntriesByType("navigation")[0].type === "back_forward") {
    location.reload();
  }
});

// document.addEventListener("DOMContentLoaded", () => {
//   const switchInput = document.getElementById("switch1");
//   const bellIcon = document.querySelector("i.fa.fa-bell");

//   // 로컬 스토리지에서 스위치 상태 가져오기
//   const switchState = localStorage.getItem("switchState");

//   // 로컬 스토리지에 저장된 스위치 상태가 있다면 해당 상태로 설정
//   if (switchState === "on") {
//     switchInput.checked = true;
//     // 스위치가 켜져 있고 p_seq가 존재하면 녹색으로 변경
//       bellIcon.style.color = "#cad180";
//   } else {
//     switchInput.checked = false;
//   }

//   // 스위치 상태 변경 시 이벤트 리스너 추가
//   switchInput.addEventListener("change", () => {
//     // 스위치 상태를 로컬 스토리지에 저장
//     if (switchInput.checked) {
//       localStorage.setItem("switchState", "on");
//       // 스위치가 켜져 있고 p_seq가 존재하면 녹색으로 변경
//         bellIcon.style.color = "#cad180";
//     } else {
//       localStorage.setItem("switchState", "off");
//       bellIcon.style.color = ""; // 스위치가 꺼져 있으면 기본 색상으로 변경
//     }
//   });

//   // 제품명이 존재하는지 확인하는 함수
//   function checkIfProductNameExists() {
//     const productInputs = document.querySelectorAll("input[type=hidden]");
//     for (let input of productInputs) {
//       if (input.value) {
//         return true; // 제품명이 하나라도 존재하면 true 반환
//       }
//     }
//     return false; // 제품명이 하나도 존재하지 않으면 false 반환
//   }
// });
