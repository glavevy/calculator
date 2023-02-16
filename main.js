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
  }
  if (operator === "-") {
    result = subtract(a, b);
    display.textContent = result;
    displayValue = result;
    sign = "-";
  }
  if (operator === "*") {
    result = multiply(a, b);
    display.textContent = result;
    displayValue = result;
    sign = "*";
  }
  if (operator === "/") {
    result = divide(a, b);
    display.textContent = result;
    displayValue = result;
    sign = "/";
  }
  if (operator === "=") {
    result = firstNumber;
    display.textContent = result;
    displayValue = firstNumber;
    sign = "=";
  }
};

let displayValue = "",
  firstNumber = "",
  sign,
  result = 1,
  memory = 0;

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
const memPlus = document.querySelector("#memPlus");
const memMinus = document.querySelector("#memMinus");
const mRC = document.querySelector("#MRC");

for (let i = 0; i < operands.length; i++) {
  operands[i].addEventListener("click", () => {
    if (result === 0) {
      display.textContent = `${display.textContent}${operands[i].textContent}`;
      displayValue = Number(display.textContent);
      console.log("c");
    } else {
      console.log("d");
      display.textContent = `${operands[i].textContent}`;
      displayValue = Number(display.textContent);
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
      if (sign !== "=") {
        operations.textContent = firstNumber + " " + sign;
      } else {
        operations.textContent = firstNumber + " ";
      }
      console.log(typeof displayValue);
      console.log(typeof firstNumber);
    } else {
      firstNumber = displayValue;
      displayValue = null;
      sign = operators[i].textContent;
      console.log("a");
      result = 1;
    }
  });
}

clear.addEventListener("click", () => {
  displayValue = "";
  firstNumber = "";
  sign = "";
  result = 1;
  display.textContent = 0;
  operations.textContent = 0;
});

memPlus.addEventListener("click", () => {
  console.log(memory);
  memory += firstNumber;
  console.log(memory);
  displayValue = "";
  firstNumber = "";
  sign = "";
  result = 1;
  display.textContent = 0;
  operations.textContent = 0;
});

memMinus.addEventListener("click", () => {
  console.log(memory);
  memory -= firstNumber;
  console.log(memory);
  displayValue = "";
  firstNumber = "";
  sign = "";
  result = 1;
  display.textContent = 0;
  operations.textContent = 0;
});

mRC.addEventListener("click", () => {
  operations.textContent = memory;
  display.textContent = memory;
  console.log(memory);
});

mRC.addEventListener("dblclick", () => {
  memory = 0;
  console.log(memory);
});
