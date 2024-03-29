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
});
