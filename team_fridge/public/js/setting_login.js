// 로그인
const login_btn_click_event = async () => {
  const login_form = document.querySelector("form.login");
  const userid = login_form.querySelector("input.userid");
  const password = login_form.querySelector("input.password");

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
};

document.addEventListener("DOMContentLoaded", () => {
  const join_btn = document.querySelector(".btn_login");
  join_btn.addEventListener("click", login_btn_click_event);
  const userid = req.body.userid;
  const password = req.body.password;
  if ((userid = "fridge")) {
    alert("로그인 성공");
  }
});
