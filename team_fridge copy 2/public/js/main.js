document.addEventListener("DOMContentLoaded", async () => {
  const back = document.querySelector("a.back");

  const switchInput = document.getElementById("switch1");
  const bellIcon = document.querySelector("i.fa.fa-bell");
  const switchState = localStorage.getItem("switchState");

  const iolist_count_get = async () => {
    const res = await fetch("setting/count");
    const json = await res.json();
    if (json.count > 0) {
      bellIcon.style.color = "yellow";
    }
  };
  const switch_on = () => {
    localStorage.setItem("switchState", switchState);
    bellIcon.style.color = "yellow";
  };
  switchInput.addEventListener("change", () => {
    switch_on();
    iolist_count_get();
  });
  back.addEventListener("click", () => {
    window.history.back();
  });
});
