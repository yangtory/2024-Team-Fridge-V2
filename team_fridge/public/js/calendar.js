document.addEventListener("DOMContentLoaded", () => {
  const days = document.querySelector("div.days");

  days.addEventListener("click", (e) => {
    const target = e.target;

    if (target.innerText) {
      document.location.href = "/calendar/detail";
    }
  });
});
