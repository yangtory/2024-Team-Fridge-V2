document.addEventListener("DOMContentLoaded", () => {
  const fridge = document.querySelector("div.list.fridge");
  const back = document.querySelector("a.back");
  const newf = document.querySelector("button.add");

  newf.addEventListener("click", () => {
    document.location.href = "/fridge/add_fridge";
    // location.replace("/fridge/add_fridge");
  });
  back.addEventListener("click", () => {
    // document.location.href = "/fridge/shopmemo";
    location.replace("/fridge/shopmemo");
  });

  fridge.addEventListener("click", (e) => {
    const target = e.target;

    const ul = target.closest("UL");
    const f_seq = ul.dataset.num;
    // alert(f_seq);
    if (confirm("이 냉장고에 저장할까요?")) {
      alert("저장되었습니다.");
      location.replace(`/fridge/shopmemo/${f_seq}/save`);
      // location.replace(`/${f_seq}/save`);
    }
  });
});
