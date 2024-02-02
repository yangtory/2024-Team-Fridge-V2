document.addEventListener("DOMContentLoaded", () => {
  const btn_box = document.querySelector("div.list.btn");
  const fridge = document.querySelector("div.list.fridge");

  btn_box.addEventListener("click", (e) => {
    const target = e.target;
    if (target.innerText === "냉장고추가") {
      document.location.href = "/fridge/add_fridge";
    }
    if (target.innerText === "냉장고삭제") {
      alert("아직구현못함");
    }
  });
  fridge.addEventListener("click", (e) => {
    const target = e.target;
    if (target.tagName === "DIV") {
      document.location.href = "/fridge/fridge_list";
    }
    if (target.tagName === "LI") {
      const ul = target.closest("UL");
      const f_num = ul.dataset.num;
      // alert(f_num);
      // document.location.replace(`/fridge/${f_num}/fridge_detail`);
    }
  });
});
