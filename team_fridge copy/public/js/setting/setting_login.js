document.addEventListener("DOMContentLoaded", () => {
  const login_form = document.querySelector("form.login");
  const userid = login_form.querySelector("input.userid");
  const password = login_form.querySelector("input.password");
  const btn_login = login_form.querySelector("button.btn_login");

  btn_login.addEventListener("click", () => {
    if (userid.value === "") {
      alert("아이디를 입력해 주세요.");
      userid.select();
      return false;
    }
    if (password.value === "") {
      alert("비밀번호를 입력해 주세요.");
      password.select();
      return false;
    }
    login_form.submit();
  });
});
