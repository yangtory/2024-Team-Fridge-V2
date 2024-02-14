document.addEventListener("DOMContentLoaded", () => {
  const div_tag = document.querySelector("div.list");

  div_tag.addEventListener("click", (e) => {
    const target = e.target;

    const click = target.closest("DIV");
    const p_seq = click.dataset.p_seq;

    if (p_seq) {
      return document.location.replace(`/fridge/${p_seq}/fridge_detail`);
    }
  });
});
