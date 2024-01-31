document.addEventListener("DOMContentLoaded", () => {
  const btn_add = document.querySelector("btn.add");
  const food_detail = document.querySelector("div.food");
  btn_add.addEventListener("click", () => {
    document.location.href = "add_food";
  });
  food_detail.addEventListener("click", () => {
    document.location.href = "/fridge/fridge_detail";
  });

  const btn_update = document.querySelector("button.update");
  const btn_delete = document.querySelector("button.delete");
  const btn_list = document.querySelector("button.list");

  btn_update.addEventListener("click", () => {
    document.location.href = "update";
  });
  btn_delete.addEventListener("click", () => {
    if (confirm("음식정보를 삭제할까요?")) {
      document.location.href = "delete";
    }
  });
  btn_list.addEventListener("click", () => {
    document.location.href = "/alarm/fridge_list";
  });
});
