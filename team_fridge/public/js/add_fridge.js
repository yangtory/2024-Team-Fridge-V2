document.addEventListener("DOMContentLoaded", () => {
  // const btn_add = document.querySelector("btn.add");
  // const food_detail = document.querySelector("div.food");
  // btn_add.addEventListener("click", () => {
  //   document.location.href = "add_food";
  // });
  // food_detail.addEventListener("click", () => {
  //   document.location.href = "fridge_detail";
  // });

  //   const btn_update = document.querySelector("button.update");
  //   const btn_delete = document.querySelector("button.delete");
  //   const btn_list = document.querySelector("button.list");

  //   btn_update.addEventListener("click", () => {
  //     document.location.href = "update";
  //   });
  //   btn_delete.addEventListener("click", () => {
  //     if (confirm("음식정보를 삭제할까요?")) {
  //       document.location.href = "delete";
  //     }
  //   });
  //   btn_list.addEventListener("click", () => {
  //     document.location.href = "/alarm/fridge_list";
  //   });
  F_INDEX = {
    F_PHOTO: 0,
    F_FRESH: 1,
    F_COLD: 2,
    F_OUT: 3,
    F_NAME: 4,
    F_MEMO: 5,
  };

  const f_photo = document.querySelector("#selectfile");
  const f_name = document.querySelector("#f_name");
  const f_memo = document.querySelector("#f_memo");
  const form = document.querySelector("form.add");
  const f_btn = document.querySelector("#f_btn");
  const error_divs = document.querySelectorAll("div.add.error");
  const select_box = document.querySelector("div.select");

  select_box.addEventListener("click", (e) => {
    const target = e.target.innerText;
    const select_input = document.querySelector("#selecttem");
    if (target === "냉장") {
      select_input.value = "fresh";
    }
    if (target === "냉동") {
      select_input.value = "cold";
    }
    if (target === "실외") {
      select_input.value = "out";
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
