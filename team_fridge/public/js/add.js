document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector("div.btn_box");

  btn.addEventListener("click", (e) => {
    const target = e.target;
    const value = target.value;
    if (value === "장바구니") {
      alert();
    }
  });
});
