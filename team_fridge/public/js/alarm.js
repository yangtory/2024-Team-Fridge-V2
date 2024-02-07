document.addEventListener("DOMContentLoaded", () => {
  const btn_tr = document.querySelector("table.foodTable tbody");

  btn_tr.addEventListener("click", (e) => {
    const target = e.target;
    if (target.tagName === "TD") {
      const paTr = target.closest("TR");
      const p_seq = paTr.dataset.p_seq;

      // document.location.href = "alarm/detail";

      // db 연결할경우 사용할 코드
      document.location.href = `/alarm/${p_seq}/detail`;
    }
    console.log(target);
  });
});
