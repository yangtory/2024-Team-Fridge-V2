document.addEventListener("DOMContentLoaded", () => {
  const back = document.querySelector("a.back");
  const bellIcon = document.querySelector("i.fa.fa-bell");

  const switchInput = document.getElementById("switch1");
  const switchState = localStorage.getItem("switchState");

  back.addEventListener("click", () => {
    window.history.back();
  });
});
