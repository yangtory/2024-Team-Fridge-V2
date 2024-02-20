document.addEventListener("DOMContentLoaded", () => {
  const btn_update = document.querySelector("button.update");
  const btn_delete = document.querySelector("button.delete");
  const btn_list = document.querySelector("button.list");
  const div = document.querySelector("div.divBox");
  btn_update.addEventListener("click", () => {
    const p_seq = div.dataset.food;
    document.location.href = `/fridge/${p_seq}/update`;
  });
  btn_delete.addEventListener("click", () => {
    const p_seq = div.dataset.food;

    if (confirm("음식정보를 삭제할까요?")) {
      document.location.href = `/fridge/${p_seq}/delete`;
    }
  });
  btn_list.addEventListener("click", () => {
    const f_seq = btn_list.dataset.f_seq;
    document.location.href = `/fridge/${f_seq}/fridge_list`;
  });
});
