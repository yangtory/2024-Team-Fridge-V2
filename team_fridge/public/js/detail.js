document.addEventListener("DOMContentLoaded", () => {
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
    document.location.href = "/alarm";
  });
});
