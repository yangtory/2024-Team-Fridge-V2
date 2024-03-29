document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form.listInput");
  const btn_submit = document.querySelector("button.addmemo");
  const amountInput = document.querySelector("input.amount");
  const plusButton = document.querySelector("div.plus");
  const minusButton = document.querySelector("div.minus");
  const back = document.querySelector("a.back");

  back.addEventListener("click", () => {
    location.replace("/");
  });

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
    let currentValue = parseInt(amountInput.value, 10);

    currentValue--;
    if (currentValue < 1) {
      // alert("해당 값보다 더 적어질 수 없습니다");
      return false;
    }
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

  //저장
  const btn_save = document.querySelector("button.save");
  btn_save?.addEventListener("click", () => {
    const checkedlist = document.querySelectorAll("table.cartlist tr.check");
    const checkedCount = checkedlist.length;
    if (checkedCount === 0) {
      alert("현재 체크된 항목이 없습니다. 저장할 항목을 체크해주세요");
      return false;
    }

    location.replace("shopmemo/save");
  });

  //===============
  const table = document.querySelector("table.cartlist");
  table.addEventListener("click", (e) => {
    const target = e.target;
    const paTR = target.closest("TR");
    const tds = paTR.querySelectorAll("TD");
    const s_seq = tds[1].innerText;
    if (target.className === "delete") {
      if (tds[7].innerText == 1) {
        alert("체크표시된 목록은 삭제할 수 없습니다. \n 저장을 누르면 자동으로 목록에서 사라집니다.");
        return false;
      }
      if (confirm("정말 이 메모를 삭제할까요?")) {
        location.replace(`shopmemo/${s_seq}/delete`);
      }
    } else {
      return false;
    }
  });
  table.addEventListener("click", (e) => {
    const target = e.target;
    if (target.className === "buy") {
      const paTR = target.closest("TR");
      const tds = paTR.querySelectorAll("TD");
      // <td> 요소들 중 s_seq, s_name, s_quan 정보를 추출합니다.
      const s_seq = tds[1].innerText;
      const s_ox = tds[7].innerText;
      // 추출한 정보를 사용하여 새로운 URL을 생성하고 페이지를 이동합니다.
      location.replace(`shopmemo/${s_seq}/${s_ox}/add`);
    }
    if (target.className === "s_name") {
      const paTR = target.closest("TR");
      const tds = paTR.querySelectorAll("TD");
      const s_seq = tds[1].innerText;
      const s_ox = tds[7].innerText;
      location.replace(`shopmemo/${s_seq}/${s_ox}/add`);
    }
  });
});
