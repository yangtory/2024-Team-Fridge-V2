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
});
