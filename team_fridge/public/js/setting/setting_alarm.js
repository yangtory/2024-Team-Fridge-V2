document.addEventListener("DOMContentLoaded", async () => {
  const switchInput = document.getElementById("switch1");

  const bellIcon = document.querySelector("i.fa.fa-bell");

  const iolist_count_get = async () => {
    const res = await fetch("setting/count");
    const json = await res.json();
    const switchState = localStorage.getItem("switchState"); // 스위치 상태 가져오기

    if (switchState === "on") {
      switchInput.checked = true;
      if (json.count > 0) {
        bellIcon.style.color = "#cad180";
      } else {
        bellIcon.style.color = "red";
      }
    } else {
      switchInput.checked = false;
    }

    // 스위치 상태 변경 시 이벤트 리스너 추가
    switchInput.addEventListener("change", () => {
      // 스위치 상태를 로컬 스토리지에 저장
      const switchState = switchInput.checked ? "on" : "off";
      localStorage.setItem("switchState", switchState);

      // 변경된 스위치 상태에 따라 벨 아이콘 색상 변경
      if (switchInput.checked && json.count > 0) {
        bellIcon.style.color = "#cad180";
      } else {
        bellIcon.style.color = switchInput.checked ? "red" : ""; // 스위치가 꺼져 있으면 기본 색상으로 변경
      }
    });
  };

  await iolist_count_get(); // 함수 실행
});
