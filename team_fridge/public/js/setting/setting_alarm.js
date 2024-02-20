document.addEventListener("DOMContentLoaded", async () => {
  const switchInput = document.getElementById("switch1");
  const bellIcon = document.querySelector("i.fa.fa-bell");

  // 로컬 스토리지에서 스위치 상태 가져오기
  const switchState = localStorage.getItem("switchState");

  // setting/count 엔드포인트에서 데이터 가져오기
  const res = await fetch("/setting/count");
  const json = await res.json();

  // 스위치 상태에 따라 초기 색상 설정
  if (switchState === "on") {
    // switchInput.checked = true;
    updateBellIconColor(true);
  } else {
    // switchInput.checked = false;
    updateBellIconColor(false);
  }

  if (switchState === "on") {
    switchInput.checked = true;
    // updateBellIconColor(true);
  } else {
    switchInput.checked = false;
    // updateBellIconColor(false);
  }

  // 스위치 상태 변경 시 이벤트 리스너 추가
  switchInput.addEventListener("change", () => {
    // 스위치 상태를 로컬 스토리지에 저장
    const switchState = switchInput.checked ? "on" : "off";
    localStorage.setItem("switchState", switchState);

    // 벨 아이콘 색상 업데이트
    updateBellIconColor(switchInput.checked);
  });

  // 벨 아이콘 색상 업데이트 함수
  function updateBellIconColor(isSwitchOn) {
    if (isSwitchOn && json.count > 0) {
      bellIcon.style.color = "#cad180";
    } else {
      bellIcon.style.color = isSwitchOn ? "#97b992" : ""; // 스위치가 꺼져 있으면 기본 색상으로 변경
    }
  }
});
