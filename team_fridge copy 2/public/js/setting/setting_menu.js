document.addEventListener("DOMContentLoaded", () => {
  const set_menu = document.querySelector("div.main");
  set_menu.addEventListener("click", (e) => {
    const target = e.target;
    const tagName = target.tagName;
    if (tagName === "LI") {
      const menu_text = target.textContent;
      if (menu_text === "로그인") {
        document.location.href = "/setting/login";
      } else if (menu_text === "로그아웃") {
        document.location.href = "/setting/logout";
      }
    }

    if (tagName === "BUTTON") {
      const menu_text = target.textContent;
      if (menu_text === "로그인") {
      } else if (menu_text === "회원가입") {
        document.location.href = "/setting/join";
      }
    }
  });
  // const set_alam = document.querySelector("label.switch_label");
  // var alam = "on";

  // set_alam.addEventListener("click", (e) => {
  //   if (alam === "on") {
  //     alert("알람 on");
  //     alam = "off";
  //   } else if (alam === "off") {
  //     alert("알람 off");
  //   }
  // });
});
