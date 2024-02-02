document.addEventListener("DOMContentLoaded", () => {
  const div_tag = document.querySelector("#list");

  div_tag.addEventListener("click", (e) => {
    const target = e.target;
    const p_num = div_tag.dataset.p_num;

    if (target.innerHTML) {
      return (document.location.href = `/fridge/${p_num}/fridge_detail`);
    }
  });
});
