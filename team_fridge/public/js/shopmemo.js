document.addEventListener("DOMContentLoaded", () => {
  const ulContent = document.querySelector("section.list ul");
  const todoinput = document.querySelector("section.input input.name");
  const todoinput2 = document.querySelector("section.input input.amount");

  const todoList = [];
  const createLiTag = (todoContent) => {
    const spanComplete = document.createElement("SPAN");
    const spanTodo = document.createElement("SPAN");
    const spanClose = document.createElement("SPAN");
    const liTag = document.createElement("LI");

    //위에서 만들어진 span 태그에 각각 클래스를 부착하라.
    spanComplete.classList.add("complete");
    spanTodo.classList.add("todo");
    spanClose.classList.add("close");

    spanComplete.innerHTML = "&check;";
    spanTodo.innerHTML = todoContent;
    spanClose.innerHTML = "&times;";

    liTag.appendChild(spanComplete);
    liTag.appendChild(spanTodo);
    liTag.appendChild(spanClose);

    ulContent.appendChild(liTag);
  };

  const createTodoList = () => {
    ulContent.innerHTML = "";
    todoList.forEach((item) => createLiTag(item));
  };
  // createTodoList();

  const amountInput = document.querySelector("input.amount");
  amountInput.value = 1;
  const plusButton = document.querySelector("button.plus");
  plusButton.addEventListener("click", function () {
    // 현재 값 가져오기
    let currentValue = parseInt(amountInput.value, 10);

    // 값 증가
    currentValue++;

    // 변경된 값을 다시 설정
    amountInput.value = currentValue;
  });

  const minusButton = document.querySelector("button.minus");
  minusButton.addEventListener("click", function () {
    // 현재 값 가져오기
    let currentValue = parseInt(amountInput.value, 10);

    // 값 증가
    currentValue--;

    if (currentValue < 1) {
      // alert("해당 값보다 더 적어질 수 없습니다");
      // amountInput.select();
      return false;
    }
    // 변경된 값을 다시 설정
    amountInput.value = currentValue;
  });

  // const name = todoinput.value;
  // const amount = todoinput2.value;
  const adBtn = document.querySelector("button.addmemo");
  adBtn.addEventListener("click", () => {
    // const todo = `${name}+${amount + 1}` + "개";
    const todo1 = todoinput.value;
    let todo2 = todoinput2.value;
    if (!todoinput.value) {
      alert("살 것을 입력해주세요");
      todoinput.select();
      return false;
    }
    if (!todoinput2.value) {
      alert("수량을 입력해주세요");
      todoinput2.select();
      return false;
    }

    //list(배열)의 끝에 새로운 값을 추가하기
    todoList.push(todo1 + ` - ` + `${todo2}` + `개`);
    createTodoList();
    todoinput.value = "";
    todoinput2.value = "";
    amountInput.value = 1;
  }); //end addBtnclick

  ulContent.addEventListener("click", (event) => {
    const target = event.target;
    if (target.tagName === "SPAN") {
      if (target.className === "close") {
        //삭제할지 물어보기
        if (confirm("목록을 삭제할까요?")) {
          target.closest("LI").remove();
        }
        return false;
      }
      // 장바구니 목록 체크표시
      const liTag = target.closest("LI");
      liTag?.classList.toggle("complete");

      fetch("/fridge/shopmemo", {
        // 서버의 해당 경로로 요청
        method: "POST", // POST 방식으로 데이터를 전송
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ todo1, todo2 }), // JSON 형태로 데이터를 전송
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error("Error.response was not ok");
          }
          return res.json();
        })
        .then((data) => {
          console.log(data);
          // 서버로부터의 응답 처리
        })
        .catch((error) => {
          console.error("Error:", error);
          // 에러 처리
        });
    } //end if
  }); //ul click event end

  const dsbutton = document.querySelector("section.stiky");
  dsbutton.addEventListener("click", (event) => {
    const target = event.target;
    if (target.className === "delete") {
      //삭제할지 물어보기
      if (confirm("전체 목록을 삭제할까요?")) {
        const liElements = document.querySelectorAll("section.list li");
        liElements.forEach((liElement) => {
          liElement.remove();
        });
      }
      return false;
    }
    if (target.className === "save") {
      alert("저장되었습니다.");
    }
  });

  //클릭한 li에서 완료되면 데이터로
  ulContent.addEventListener("click", (event) => {
    const target = event.target;
    if (target.tagName === "SPAN" && target.className === "complete") {
      const liTag = target.closest("LI");
      liTag?.classList.toggle("complete");

      // li 태그의 내용 추출
      const todoContent = liTag.textContent.trim();

      // 데이터 전송
      fetch("/saveToList", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content: todoContent }),
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error("Failed to save data to the database.");
          }
          return res.json();
        })
        .then((data) => {
          console.log(data);
          // 서버로부터의 응답 처리
        })
        .catch((error) => {
          console.error("Error:", error);
          // 에러 처리
        });
    }
  });
});
