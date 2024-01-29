document.addEventListener("DOMContentLoaded", () => {
  F_INDEX = {
    F_PHOTO: 0,
    F_FRESH: 1,
    F_COLD: 2,
    F_OUT: 3,
    F_NAME: 4,
    F_MEMO: 5,
  };

  const f_photo = document.querySelector("#selectfile");
  const f_fresh = document.querySelector("#fresh");
  const f_cold = document.querySelector("#cold");
  const f_out = document.querySelector("#out");
  const f_name = document.querySelector("#f_name");
  const f_memo = document.querySelector("#f_memo");
  const form = document.querySelector("form.add");
  const f_btn = document.querySelector("#f_btn");
  const error_divs = document.querySelectorAll("div.add.error");
  const select = document.querySelector("div.select");

  select.addEventListener("click", (e) => {
    const target = e.target;
    const value = target.value;
    if (value === "냉장") {
      alert("클릭");
    }
  });

  f_btn.addEventListener("click", () => {
    error_divs.forEach((item) => item.innerHTML);
    if (!f_name.value) {
      error_divs[F_INDEX.F_NAME].innerHTML = "* 냉장고 이름을 입력하세요";
      f_name.select();
      return false;
    }
    form.submit();
  });
});
