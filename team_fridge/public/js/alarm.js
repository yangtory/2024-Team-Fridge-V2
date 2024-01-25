document.addEventListener("DOMContentLoaded", () => {
  const btn_tr = document.querySelector("table.foodTable tbody");

  btn_tr.addEventListener("click", (e) => {
    const target = e.target;
    if (target.tagName === "TD") {
      const paTR = target.closest("TR");
    }
    console.log(target);
  });
});
