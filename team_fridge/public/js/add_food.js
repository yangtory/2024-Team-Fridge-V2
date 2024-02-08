document.addEventListener("DOMContentLoaded", () => {
  const fresh_btn = document.querySelector("#fresh");
  const cold_btn = document.querySelector("#cold");
  const out_btn = document.querySelector("#out");

  const changeBack = (e) => {
    const target = e.target;
    if (target.tagName === "LABEL") {
      target.style.backgroundColor = "#ccc";
      if (target !== fresh_btn) fresh_btn.style.backgroundColor = "";
      if (target !== cold_btn) cold_btn.style.backgroundColor = "";
      if (target !== out_btn) out_btn.style.backgroundColor = "";
    }
  };

  fresh_btn.addEventListener("click", changeBack);
  cold_btn.addEventListener("click", changeBack);
  out_btn.addEventListener("click", changeBack);
});
