document.addEventListener('DOMContentLoaded', () => {
    const btn_add = document.querySelector('button.btn_add');
    const btn_delete = document.querySelector('button.btn_delete');
    const food_box = document.querySelector('div.food_box');

  btn_add.addEventListener("click", () => {
    const f_seq = btn_add.dataset.food;
    document.location.href = `/fridge/${f_seq}/add_food`;
  });
  btn_delete.addEventListener("click", () => {
    const f_seq = btn_delete.dataset.num;
    if (confirm("냉장고를 정말 삭제할까요?")) {
      document.location.href = `/fridge/${f_seq}/fridge_delete`;
    }
  });
  food_box.addEventListener("click", (e) => {
    const target = e.target;
    if (target.tagName === "LI") {
      const box = target.closest("UL");
      const p_seq = box.dataset.food;
      document.location.href = `/fridge/${p_seq}/fridge_detail`;
    }
  });
});
