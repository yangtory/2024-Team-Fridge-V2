document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form.listInput");
  const btn_submit = document.querySelector("button.addmemo");
  const amountInput = document.querySelector("input.amount");
  const plusButton = document.querySelector("div.plus");
  const minusButton = document.querySelector("div.minus");

  amountInput.value = 1;
  plusButton.addEventListener("click", function () {
    // 현재 값 가져오기
    let currentValue = parseInt(amountInput.value, 10);

    // 값 증가
    currentValue++;

    // 변경된 값을 다시 설정
    amountInput.value = currentValue;
  });

  minusButton.addEventListener("click", function () {
    // 현재 값 가져오기
    let currentValue = parseInt(amountInput.value, 10);

    // 값 증가
    currentValue--;

    if (currentValue < 1) {
      // alert("해당 값보다 더 적어질 수 없습니다");
      return false;
    }
    // 변경된 값을 다시 설정
    amountInput.value = currentValue;
  });

  btn_submit?.addEventListener("click", () => {
    const tname = document.querySelector("input.name");
    const tquan = document.querySelector("input.amount");
    if (!tname.value) {
      alert("살 것을 입력해주세요");
      tname.select();
      return false;
    }
    if (!tquan.value) {
      alert("수량을 입력해주세요");
      tquan.select();
      return false;
    }

    // }); //end addBtnclick
    // return res.json(result);
    form.submit();
  });

  const btn_deleteAll = document.querySelector("button.delete");
  btn_deleteAll?.addEventListener("click", () => {
    if (confirm("정말 모든 메모를 삭제할까요?")) {
      location.replace("shopmemo/deleteAll");
    } else {
      return false;
    }
  });
  //===============

  //요밑은 저장기능 넣을거.
  //===============

  const btn_save = document.querySelector("button.save");
  btn_save?.addEventListener("click", () => {
    alert("아직 구현 준비중... ");

    alert("냉장고에 저장되었습니다.");
    //어떤 냉장고에 저장해야하는지에 대한 선택지도 뜨게 해야하나..?

    location.replace("shopmemo/save");
  });

  //===============
  const table = document.querySelector("table.cartlist");
  // const td_delete = document.querySelector("td.delete");
  table.addEventListener("click", (e) => {
    const target = e.target;
    if (target.className === "delete") {
      if (confirm("정말 이 메모를 삭제할까요?")) {
        const paTR = target.closest("TR");
        const tds = paTR.querySelectorAll("TD");
        const s_seq = tds[1].innerText;
        location.replace(`shopmemo/${s_seq}/delete`);
      }
    } else {
      return false;
    }
  });
  // const td_add = document.querySelector("td.buy");
  table.addEventListener("click", (e) => {
    const target = e.target;
    if (target.className === "buy") {
      const paTR = target.closest("TR");
      const tds = paTR.querySelectorAll("TD");
      // <td> 요소들 중 s_seq, s_name, s_quan 정보를 추출합니다.
      const s_seq = tds[1].innerText;
      const s_ox = tds[7].innerText;
      // alert(s_ox);
      // 추출한 정보를 사용하여 새로운 URL을 생성하고 페이지를 이동합니다.
      location.replace(`shopmemo/${s_seq}/${s_ox}/add`);
    }
  });
});
