document.addEventListener("DOMContentLoaded", () => {
  const select_box = document.querySelector("div.select");
  const fresh_btn = document.querySelector("#fresh");
  const cold_btn = document.querySelector("#cold");
  const out_btn = document.querySelector("#out");
  const add_btn = document.querySelector("#f_btn");
  const err_box = document.querySelectorAll("div.err");
  const input_name = document.querySelector("#f_name");
  const input_div = document.querySelector("input.update_div");
  const form = document.querySelector("form.add");

  const F_INDEX = {
    F_DIV: 0,
    F_NAME: 1,
  };

  add_btn?.addEventListener("click", async () => {
    err_box.forEach((item) => (item.innerHTML = ""));
    if (input_div.value === "") {
      err_box[F_INDEX.F_DIV].innerHTML = "* 어떤 냉장고인지 선택해주세요";
      input_div.select();
      return false;
    }
    if (input_name.value === "") {
      err_box[F_INDEX.F_NAME].innerHTML = "* 냉장고 이름은 반드시 입력해주세요";
      input_name.select();
      return false;
    }
    form.submit();
  });

  const changeBack = (e) => {
    const target = e.target;
    if (target.tagName === "LABEL") {
      target.style.backgroundColor = "#ccc";
      if (target !== fresh_btn) fresh_btn.style.backgroundColor = "";
      if (target !== cold_btn) cold_btn.style.backgroundColor = "";
      if (target !== out_btn) out_btn.style.backgroundColor = "";
    }
  };

  fresh_btn.addEventListener("click", changeBack);
  cold_btn.addEventListener("click", changeBack);
  out_btn.addEventListener("click", changeBack);

  select_box?.addEventListener("click", (e) => {
    const target = e.target;
    const select_input = document.querySelector("#selecttem");

    if (target.innerText === "냉장") {
      select_input.value = "냉장고";
    }
    if (target.innerText === "냉동") {
      select_input.value = "냉동고";
    }
    if (target.innerText === "실외") {
      select_input.value = "실외";
    }
  });

  const div = document.querySelector("input.update_div");
  window.addEventListener("load", () => {
    if (div.value === "냉장고") {
      fresh_btn.style.backgroundColor = "#ccc";
    } else if (div.value === "냉동고") {
      cold_btn.style.backgroundColor = "#ccc";
    } else if (div.value === "실외") {
      out_btn.style.backgroundColor = "#ccc";
    }
  });

  const imagePreView = (e) => {
    const img_add = document.querySelector("img.img_add");
    const file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.onload = (e) => {
      const fileURL = e.target.result;
      img_add.src = fileURL;
    };
    fileReader.readAsDataURL(file);
  };

  const input_img = document.querySelector("input.photo");
  const div_img = document.querySelector("div.photo");

  div_img?.addEventListener("click", (e) => {
    const target = e.target;
    if (target.tagName === "IMG" || target.tagName === "DIV") {
      input_img.click();
    }
  });

  input_img?.addEventListener("change", imagePreView);
});
