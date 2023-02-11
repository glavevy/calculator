const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const multiply = function (a, b) {
  return a * b;
};

const divide = function (a, b) {
  return a / b;
};

const operate = function (operator, a, b) {
  if (operator === "+") {
    return add(a, b);
  }
  if (operator === "-") {
    return subtract(a, b);
  }
  if (operator === "*") {
    return multiply(a, b);
  }
  if (operator === "/") {
    return divide(a, b);
  }
};

const buttons = Array.from(document.querySelector("#operators-operands"));
const operators = Array.from(document.querySelectorAll(".operator"));
const operands = Array.from(document.querySelectorAll(".operand"));
const plusMinus = document.querySelector("#plus-minus");
const backspace = document.querySelector("#backspace");
const clear = document.querySelector("#clear");
const display = document.querySelector("#display");



for (let i = 0; i < operands.length; i++) {
  operands[i].addEventListener('click', () => {
    display.textContent = `${operands[i].textContent}${display.textContent}`;
  });
}

