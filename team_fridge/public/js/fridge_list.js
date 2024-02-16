document.addEventListener("DOMContentLoaded", () => {
  const btn_add = document.querySelector("button.btn_add");
  const btn_delete = document.querySelector("button.btn_delete");
  const food_table = document.querySelector("div.body");
  const food_box = document.querySelector("div.food_box");

  const url = new URL(document.location.href); //js 의 객첵
  const sort = url.searchParams.get("sort"); //주소창에 sort값이 있으면 가져와
  const order = url.searchParams.get("order");

  const BTN = {
    오름차순: "p_date",
  };
  food_table?.addEventListener("click", (e) => {
    const target = e.target;
    if (target.className === "btn_up") {
      const sortColumn = BTN[text.trim()];
      url.searchParams.set("order", order === "ASC" ? "DESC" : "ASC");
      sort != sortColumn && url.searchParams.set("order", "ASC");
      sortColumn && url.searchParams.set("sort", sortColumn);
      document.location.replace(`/products?${url.searchParams.toString()}`);
    }
  });

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
      // alert(p_num);
      document.location.href = `/fridge/${p_seq}/fridge_detail`;
    }
  });
});
