document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector("div.btn_box");

  btn.addEventListener("click", (e) => {
    const target = e.target;
    if (target.innerHTML === "BUTTON") {
      alert(target.innerHTML);
    }
  });
});
