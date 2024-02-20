document.addEventListener("DOMContentLoaded", () => {
  const days = document.querySelector("div.days");
  const prev = document.querySelector(".prev");
  const next = document.querySelector(".next");

  const date = new Date();

  const year = document.querySelector("#year");
  const month = document.querySelector("#month");

  // alert(next_date);

  year.innerHTML = date.getFullYear();
  month.innerHTML = date.getMonth() + 1;

  // 일자 부분 div 만들기
  for (let i = 0; i < 6; i++) {
    const dayTag = document.createElement("DIV");
    dayTag.classList.add("day");
    for (let j = 0; j < 7; j++) {
      const divTag = document.createElement("DIV");
      days.appendChild(divTag);
      dayTag.appendChild(divTag);
      days.appendChild(dayTag);
    }
  }

  // 일자 부분에 div value 값넣기
  const last = new Date(year.innerHTML, month.innerHTML, 0);
  const first = new Date(year.innerHTML, month.innerHTML - 1, 1);
  const get_first = first.getDay();
  const get_last = last.getDate();
  let index = 1;
  for (let i = get_first; i < get_first + get_last; i++) {
    const target = document.querySelectorAll(".day div");
    target[i].innerHTML = index++;
  }

  // 달력 이전버튼 누를때 이벤트
  prev?.addEventListener("click", async () => {
    --month.innerHTML;
    //이전으로 넘겼을때 마지막 날짜
    const last_date = new Date(year.innerHTML, month.innerHTML, 0);
    const first_date = new Date(year.innerHTML, month.innerHTML - 1, 1);
    // 이전으로 넘겼을때 첫번째 날짜
    // 이전달의 마지막 요일
    const get_fist = first_date.getDay();
    // 이전달의 첫 요일
    const get_last = last_date.getDate();
    // div 만들기

    const html = document.querySelectorAll(".day div");
    // alert(get_lastweek);
    // day 안에 있는 div 텍스트 지우기
    for (let i = 0; i < html.length; i++) {
      html[i].innerHTML = "";
      html[i].classList.remove("product");
    }
    let index = 1;

    for (let i = get_fist; i < get_fist + get_last; i++) {
      html[i].innerHTML = index++;
    }

    if (month.innerHTML === "0") {
      month.innerHTML = 12;
      year.innerHTML--;
    }
    const year_text = String(year.innerHTML);
    let month_text = String(month.innerHTML);

    const res = await fetch(`/calendar/get`);
    const json = await res.json();
    const ex = new Array();
    // console.log(json);
    if (json.length !== 0) {
      for (let i = 0; i < json.length; i++) {
        ex.push(json[i].p_date);
      }
    }
    const day_all = document.querySelectorAll("div.day div");

    for (let i = 0; i < ex.length; i++) {
      if (month_text.length === 1) {
        month_text = "0" + month_text;
      }

      for (let j = 0; j < day_all.length; j++) {
        if (day_all[j].innerHTML.length === 1) {
          day_all[j].innerHTML = "0" + day_all[j].innerHTML;
        }
        if (`${year_text}-${month_text}-${day_all[j].innerHTML}` === ex[i]) {
          day_all[j].classList.add("product");
        }
      }
    }
  });
  // 달력 다음버튼 누를때 이벤트
  next?.addEventListener("click", async () => {
    ++month.innerHTML;
    const html = document.querySelectorAll(".day div");
    const next_date = new Date(year.innerHTML, month.innerHTML - 1, 1);
    const last_date = new Date(year.innerHTML, month.innerHTML, 0);
    const get_firstweek = next_date.getDay();
    const get_lastweek = last_date.getDate();

    for (let i = 0; i < html.length; i++) {
      html[i].innerHTML = "";
      html[i].classList.remove("product");
    }
    let index = 1;

    for (let i = get_firstweek; i < get_firstweek + get_lastweek; i++) {
      html[i].innerHTML = index++;
    }
    // alert(next_date);
    if (month.innerHTML === "13") {
      month.innerHTML = 1;
      year.innerHTML++;
    }
    const year_text = String(year.innerHTML);
    let month_text = String(month.innerHTML);

    const res = await fetch(`/calendar/get`);
    const json = await res.json();
    const ex = new Array();
    // console.log(json);
    if (json.length !== 0) {
      for (let i = 0; i < json.length; i++) {
        ex.push(json[i].p_date);
      }
    }
    // console.log(ex);
    const day_all = document.querySelectorAll("div.day div");

    for (let i = 0; i < ex.length; i++) {
      if (month_text.length === 1) {
        month_text = "0" + month_text;
      }

      for (let j = 0; j < day_all.length; j++) {
        if (day_all[j].innerHTML.length === 1) {
          day_all[j].innerHTML = "0" + day_all[j].innerHTML;
        }
        if (`${year_text}-${month_text}-${day_all[j].innerHTML}` === ex[i]) {
          day_all[j].classList.add("product");
        }
      }
    }
  });

  // day 부분을 눌렀을때 디테일 화면으로 전환
  days?.addEventListener("click", async (e) => {
    const target = e.target;

    let url = `/calendar/${[
      year.innerHTML + "-" + month.innerHTML + "-" + target.innerHTML,
    ]}/detail`;

    if (
      `${[month.innerHTML.length]}` === "2" &&
      `${[target.innerHTML.length]}` === "1"
    ) {
      url = `/calendar/${[
        year.innerHTML + "-" + month.innerHTML + "-0" + target.innerHTML,
      ]}/detail`;
    } else if (
      `${[month.innerHTML.length]}` === "1" &&
      `${[target.innerHTML.length]}` === "1"
    ) {
      url = `/calendar/${[
        year.innerHTML + "-0" + month.innerHTML + "-0" + target.innerHTML,
      ]}/detail`;
    } else if (
      `${[month.innerHTML.length]}` === "1" &&
      `${[target.innerHTML.length]}` === "2"
    ) {
      url = `/calendar/${[
        year.innerHTML + "-0" + month.innerHTML + "-" + target.innerHTML,
      ]}/detail`;
    }

    if (target.innerText) {
      //  document.location.href = `/calendar/${[year.innerHTML + "-" + month.innerHTML + "-" + target.innerHTML]}/detail`;
      document.location.href = url;
    }
  });
});

// 냉장고에 그날 산음식들 표시하기
document?.addEventListener("DOMContentLoaded", async () => {
  const year_text = String(year.innerHTML);
  let month_text = String(month.innerHTML);

  const res = await fetch(`/calendar/get`);
  const json = await res.json();
  const ex = new Array();
  // console.log(json);
  if (json.length !== 0) {
    for (let i = 0; i < json.length; i++) {
      ex.push(json[i].p_date);
    }
  }
  // console.log(ex);
  const day_all = document.querySelectorAll("div.day div");

  for (let i = 0; i < ex.length; i++) {
    if (month_text.length === 1) {
      month_text = "0" + month_text;
    }

    for (let j = 0; j < day_all.length; j++) {
      if (day_all[j].innerHTML.length === 1) {
        day_all[j].innerHTML = "0" + day_all[j].innerHTML;
      }
      if (`${year_text}-${month_text}-${day_all[j].innerHTML}` === ex[i]) {
        day_all[j].classList.add("product");
      }
    }
  }
});
