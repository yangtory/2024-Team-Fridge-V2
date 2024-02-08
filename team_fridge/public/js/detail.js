document.addEventListener("DOMContentLoaded", () => {
  // const btn_update = document.querySelector("button.update");
  // const btn_delete = document.querySelector("button.delete");
  // const btn_list = document.querySelector("button.list");

  // btn_update.addEventListener("click", () => {
  //   document.location.href = "/alarm/update";
  // });
  // btn_delete.addEventListener("click", () => {
  //   if (confirm("음식정보를 삭제할까요?")) {
  //     document.location.href = "delete";
  //   }
  // });
  // btn_list.addEventListener("click", () => {
  //   document.location.href = "/alarm";
  // });

  const btn_box = document.querySelector("div.btnBox");
  btn_box.addEventListener("click", (e) => {
    const button = e.target;
    // console.log(button);
    if (button.tagName === "BUTTON") {
      const className = button.className;
      // console.log(className);
      const par = button.closest("DIV");

      const p_seq = par.dataset.p_seq;
      let url = "/alarm";
      if (className === "update") {
        url += `/${p_seq}/update`;
      } else if (className === "delete") {
        if (!confirm("음식정보를 삭제할까요?")) {
          return false;
        }
        url += `/${p_seq}/delete`;
      }
      document.location.replace(url);
    }
  });
});
