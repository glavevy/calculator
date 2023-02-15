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
    result = add(a, b);
    display.textContent = result;
    displayValue = result;
    sign = "+";
    operations.textContent += displayValue + '' + sign;
  }
  if (operator === "-") {
    result = subtract(a, b);
    display.textContent = result;
    displayValue = result;
    sign = "-";
    operations.textContent += displayValue + '' + sign;
  }
  if (operator === "*") {
    result = multiply(a, b);
    display.textContent = result;
    displayValue = result;
    sign = "*";
    operations.textContent += displayValue + '' + sign;
  }
  if (operator === "/") {
    result = divide(a, b);
    display.textContent = result;
    displayValue = result;
    sign = "/";
    operations.textContent += displayValue + '' + sign;
  }
};

let displayValue = "",
  firstNumber = "",
  sign,
  result = 0,
  displaySecondNumber,
  newSign;

const buttons = Array.from(document.querySelector("#operators-operands"));
const operators = Array.from(document.querySelectorAll(".operator"));
const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const times = document.querySelector("#times");
const division = document.querySelector("#division");
const equal = document.querySelector("equals");
const operands = Array.from(document.querySelectorAll(".operand"));
const plusMinus = document.querySelector("#plus-minus");
const backspace = document.querySelector("#backspace");
const clear = document.querySelector("#clear");
const display = document.querySelector("#display");
const operations = document.querySelector("#operations");

let displayText = display.textContent;

for (let i = 0; i < operands.length; i++) {
  operands[i].addEventListener("click", () => {
    if (result === 0) {
      display.textContent = `${display.textContent}${operands[i].textContent}`;
      displayValue = Number(display.textContent);
      operations.textContent += displayValue;
      console.log("c");
    } else {
      console.log("d");
      display.textContent = `${operands[i].textContent}`;
      displayValue = Number(display.textContent);
      operations.textContent += displayValue;
      result = 0;
    }
  });
}

for (let i = 0; i < operators.length; i++) {
  operators[i].addEventListener("click", () => {
    if (firstNumber ?? displayValue) {
      console.log(typeof displayValue);
      console.log(typeof firstNumber);
      console.log("b");
      display.textContent = "";
      operate(sign, firstNumber, displayValue);
      sign = operators[i].textContent;
      firstNumber = result;
      displayValue = null;
      operations.textContent = firstNumber + sign; 
      console.log(typeof displayValue);
      console.log(typeof firstNumber);
    } else {
      firstNumber = displayValue;
      displayValue = null;
      sign = operators[i].textContent;
      console.log("a");
      result = 1;
      operations.textContent += '' + sign; 
    }
  });
}