document.addEventListener("DOMContentLoaded", () => {
  const div_tag = document.querySelector("div.list");

  div_tag.addEventListener("click", (e) => {
    const target = e.target;

    const click = target.closest("DIV");
    const p_num = click.dataset.p_seq;

    if (p_num) {
      return document.location.replace(`/fridge/${p_num}/fridge_detail`);
    }
  });
});
