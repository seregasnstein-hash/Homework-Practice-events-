const calc = document.getElementById("calc");
const numbers = document.querySelectorAll(".num");
let value = "";
let num1 = "";
let num2 = "";
let operator = "";
let total = "";

function clearCalcValue() {
  calc.value = "";
  value = "";
  num1 = "";
  num2 = "";
  operator = "";
  total = "";
}

function getResult() {
  if (!isNaN(num1) && !isNaN(num2)) {
    if (operator === "+") {
      total = num1 + num2;
    } else if (operator === "-") {
      total = num1 - num2;
    } else if (operator === "/") {
      total = num1 / num2;
    } else if (operator === "*") {
      total = num1 * num2;
    };
    calc.value = `${num1}${operator}${num2} = ${total}`;
  } else {
    alert("Что-то не так с примером!");
    clearCalcValue();
  };
};

numbers.forEach((elem) => {
  elem.addEventListener("click", () => {
    if (elem.textContent === "C") {
      clearCalcValue();
    } else {
      value += elem.textContent;
      calc.value += elem.textContent;
      if (
        elem.textContent === "+" ||
        elem.textContent === "-" ||
        elem.textContent === "/" ||
        elem.textContent === "*"
      ) {
        operator = value.slice(-1);
        num1 = +value.slice(0, -1);
        value = "";
      };

      if (elem.textContent === "=") {
        num2 = +value.slice(0, -1);
        getResult();
      };
    };
  });
});

calc.addEventListener("keydown", (event) => {
  let key = event.key;

  if (key === "Backspace") {
    clearCalcValue();
  } else {
    value += key;
    if (key === "+" || key === "-" || key === "/" || key === "*") {
      operator = value.slice(-1);
      num1 = +value.slice(0, -1);
      value = "";
    };

    if (key === "Enter") {
      for (let i = 0; i <= value.length; i++) {
        if (value[i] >= "0" && value[i] <= "9") {
          num2 += value[i];
        }
      };
      num2 = +num2;
      getResult();
    };
  };
});
