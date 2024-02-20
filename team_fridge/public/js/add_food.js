document.addEventListener("DOMContentLoaded", () => {
  const btn_add = document.querySelector("div.btn");

  const INPUT_INDEX = {
    P_NAME: 0,
    P_DATE: 1,
    P_EXDATE: 2,
    P_QUAN: 3,
  };
  const form = document.querySelector("form.add");

  // const inputs = form.querySelectorAll("input");
  const name = document.querySelector("#pname");
  const date = document.querySelector("#pdate");
  const exdate = document.querySelector("#pexdate");
  const quan = document.querySelector("#pquan");

  const error_divs = document.querySelectorAll("div.input.error");
  btn_add?.addEventListener("click", (e) => {
    const target = e.target;
    error_divs.forEach((item) => (item.innerHTML = ""));

    if (name.value === "") {
      error_divs[INPUT_INDEX.P_NAME].innerHTML = " * 음식이름을 입력해주세요";
      name.select();
      return false;
    }
    if (date.value === "") {
      error_divs[INPUT_INDEX.P_DATE].innerHTML = " * 구매날짜를 입력해주세요";
      date.select();
      return false;
    }
    if (exdate.value === "") {
      error_divs[INPUT_INDEX.P_EXDATE].innerHTML = " * 소비기한을 입력해주세요";
      exdate.select();
      return false;
    }
    if (quan.value === "") {
      error_divs[INPUT_INDEX.P_QUAN].innerHTML = " * 구매수량을 입력해주세요";
      quan.select();
      return false;
    }
    if (target.tagName === "INPUT") {
      const f_seq = btn_add.dataset.p_fseq;
      document.location.href = `/fridge/${f_seq}/fridge_list`;
    }
    form.submit();
  });
});
