document.addEventListener("DOMContentLoaded", () => {
  const btn_box = document.querySelector("button.save");
  const fridge = document.querySelector("div.list.fridge");

  btn_box.addEventListener("click", (e) => {
    document.location.href = "/fridge/shopmemo";
  });

  fridge.addEventListener("click", (e) => {
    const target = e.target;

    const ul = target.closest("UL");
    const f_seq = ul.dataset.num;
    alert(f_seq);
    if (confirm("이 냉장고에 저장할까요?")) {
      alert("저장되었습니다.");
      location.replace(`shopmemo/${f_seq}/save`);
    }
  });
});
