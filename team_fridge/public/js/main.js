document.addEventListener("DOMContentLoaded", () => {
  const back = document.querySelector("a.back");

  back.addEventListener("click", () => {
    window.history.back();
  });
});
