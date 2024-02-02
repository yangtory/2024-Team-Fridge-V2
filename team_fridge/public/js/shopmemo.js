document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form.listInput");
  const btn_submit = document.querySelector("button.addmemo");

  const amountInput = document.querySelector("input.amount");
  amountInput.value = 1;
  const plusButton = document.querySelector("div.plus");
  plusButton.addEventListener("click", function () {
    // 현재 값 가져오기
    let currentValue = parseInt(amountInput.value, 10);
    
    // 값 증가
    currentValue++;
    
    // 변경된 값을 다시 설정
    amountInput.value = currentValue;
  });
  
  const minusButton = document.querySelector("div.minus");
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
  
  
});