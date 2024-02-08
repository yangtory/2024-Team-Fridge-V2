document.addEventListener("DOMContentLoaded", () => {
  const btn_tr = document.querySelector("table.foodTable tbody");
  const date = document.querySelector("td.date");

  const today = new Date();
  let year = today.getFullYear();
  let month = ("0" + (today.getMonth() + 1)).substring(-2);
  let day = ("0" + today.getDate()).substring(-2);
  let dateString = year + "-" + month + "-" + day;
  console.log(dateString < date);
  console.log(date);
  console.log(dateString);
  // btn_tr.addEventListener("click", (e) => {
  //   const target = e.target;
  //   if (target.tagName === "TD") {
  //     const paTr = target.closest("TR");
  //     const p_date = paTr.dataset.p_date;
  //     console.log(p_date);
  //     console.log(dateString > p_date);
  //     if (dateString > p_date) {
  //       btn_tr.style.visibility = "hidden";
  //     }
  //   }
  // });

  // console.log(year);
  // console.log(month);
  // console.log(day);

  btn_tr.addEventListener("click", (e) => {
    const target = e.target;
    if (target.tagName === "TD") {
      const paTr = target.closest("TR");
      const p_seq = paTr.dataset.p_seq;
      console.log(p_seq);
      // const date = target.dataset.p_date;

      // console.log(date);
      // document.location.href = "alarm/detail";

      // db 연결할경우 사용할 코드
      document.location.href = `/alarm/${p_seq}/detail`;
    }
    // console.log(target);
  });
});
