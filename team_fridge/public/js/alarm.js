document.addEventListener("DOMContentLoaded", () => {
  const btn_tr = document.querySelector("table.foodTable tbody");

  btn_tr.addEventListener("click", (e) => {
    const target = e.target;
    if (target.tagName === "TD") {
      const paTr = target.closest("TR");
      const foodNum = paTr.dataset.p_num;
      console.log(foodNum);
      // document.location.href = "alarm/detail";

      // db 연결할경우 사용할 코드
      document.location.href = `alarm/${foodNum}/detail`;
    }
    console.log(target);
  });
});
