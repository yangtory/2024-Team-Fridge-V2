const join_btn_click_event = async () => {
  const Join_form = document.querySelector("form.join");
  const username = Join_form.querySelector("input.username");
  const userid = Join_form.querySelector("input.userid");
  const password = Join_form.querySelector("input.password");
  const re_password = Join_form.querySelector("input.re_password");

  if (username.value === "") {
    alert("닉네임을 입력해 주세요.");
    username.select();
    return false;
  }
  if (userid.value === "") {
    alert("사용자의 아이디를 입력해 주세요.");
    userid.select();
    return false;
  } else {
    const response = await fetch(`/setting/${userid.value}/check`);
    const json = await response.json();
    if (json.MESSAGE === "FOUND") {
      alert("이미 등록된 사용자 ID 입니다");
      userid.select();
      return false;
    } else {
      alert("사용가능한 사용자 ID 입니다");
      password.select();
    }
  }
  if (password.value === "") {
    alert("비밀번호를 입력해 주세요.");
    password.select();
    return false;
  }
  if (re_password.value === "") {
    alert("비밀번호 확인을 입력해 주세요.");
    re_password.select();
    return false;
  }
  if (password.value !== re_password.value) {
    alert("비밀번호와 비밀번호 확인이 다릅니다.");
    password.select();
    return false;
  }
  Join_form.submit();
};

document.addEventListener("DOMContentLoaded", () => {
  const join_btn = document.querySelector(".btn_login");
  join_btn.addEventListener("click", join_btn_click_event);
});
