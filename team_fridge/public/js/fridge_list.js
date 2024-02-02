document.addEventListener("DOMContentLoaded", () => {
  const btn_add = document.querySelector("btn.add");
  // const food_detail = document.querySelector("div.");

  btn_add.addEventListener("click", () => {
    document.location.href = "/fridge/add_food";
  });
  const food_box = document.querySelector("div.food_box");
  food_box.addEventListener("click", (e) => {
    const target = e.target;
    if (target.tagName === "LI") {
      const div = target.closest("UL");
      const p_num = div.dataset.food;
      // alert(p_num);
      document.location.replace(`/fridge/${p_num}/fridge_detail`);
    }
  });

  // food_detail.addEventListener("click", () => {
  //   document.location.href = "/fridge/fridge_detail";
  // });

  // const btn_update = document.querySelector("button.update");
  // const btn_delete = document.querySelector("button.delete");
  // const btn_list = document.querySelector("button.list");

  // btn_update.addEventListener("click", () => {
  //   document.location.href = "update";
  // });
  // btn_delete.addEventListener("click", () => {
  //   if (confirm("음식정보를 삭제할까요?")) {
  //     document.location.href = "delete";
  //   }
  // });
  // btn_list.addEventListener("click", () => {
  //   document.location.href = "/alarm/fridge_list";
  // });
});
