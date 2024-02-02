document.addEventListener("DOMContentLoaded", () => {
  F_INDEX = {
    F_PHOTO: 0,
    F_DIV: 1,
    F_NAME: 2,
    F_MEMO: 3,
  };

  const f_name = document.querySelector("#f_name");
  const f_memo = document.querySelector("#f_memo");
  const form = document.querySelector("form.add");
  const f_btn = document.querySelector("#f_btn");
  const error_divs = document.querySelectorAll("div.add.error");
  const select_box = document.querySelector("div.select");
  const fresh_btn = document.querySelector("#fresh");
  const cold_btn = document.querySelector("#cold");
  const out_btn = document.querySelector("#out");

  const changeBack = (e) => {
    const target = e.target;
    if (target.tagName === "LABEL") {
      target.style.backgroundColor = "#ccc";
      if (target !== fresh_btn) fresh_btn.style.backgroundColor = "";
      if (target !== cold_btn) cold_btn.style.backgroundColor = "";
      if (target !== out_btn) out_btn.style.backgroundColor = "";
    }
  };

  fresh_btn.addEventListener("click", changeBack);
  cold_btn.addEventListener("click", changeBack);
  out_btn.addEventListener("click", changeBack);

  select_box.addEventListener("click", (e) => {
    const target = e.target;
    const select_input = document.querySelector("#selecttem");

    if (target.innerText === "냉장") {
      select_input.value = "냉장고";
    }
    if (target.innerText === "냉동") {
      select_input.value = "냉동고";
    }
    if (target.innerText === "실외") {
      select_input.value = "실외";
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
