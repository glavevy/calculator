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
    sign = '+';
  }
  if (operator === "-") {
    result = subtract(a, b);
    display.textContent = result;
    displayValue = result;
    sign = '-';
  }
  if (operator === "*") {
    result = multiply(a, b);
    display.textContent = result;
    displayValue = result;
    sign = '*';
  }
  if (operator === "/") {
    result = divide(a, b);
    display.textContent = result;
    displayValue = result;
    sign = '/';
  }
};

let displayValue = "",
  firstNumber = "",
  sign,
  result = 0,
  displaySecondNumber;

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

let displayText = display.textContent;

for (let i = 0; i < operands.length; i++) {
  operands[i].addEventListener("click", () => {
    if (result === 0) {
      display.textContent = `${display.textContent}${operands[i].textContent}`;
      displayValue = Number(display.textContent);
      // console.log(displayValue);
      //console.log(result);
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
    if (firstNumber !== "" && displayValue !== "") {
      //display.textContent = "";
      //sign = operators[i].textContent;
      //console.log(temp);
      //console.log(displayValue)
      console.log("b");
      display.textContent = "";
      operate(sign, firstNumber, displayValue);
      firstNumber = result;
      displayValue = "";
      //sign = "";
    } else {
      firstNumber = displayValue;
      displayValue = "";
      display.textContent = "";
      sign = operators[i].textContent;
      sign.activeElement;
      console.log("a");
      //result = 0;
    }
  });
}

// temp = result;
// display.textContent = `${result} ${sign} ${operands[i].textContent}`;
// displaySecondNumber = displayText.charAt(displayText.length-1);
// displayValue = Number(displaySecondNumber);
// displayValue = Number(display.textContent);
// displayValue = result;
//display.textContent = result;
// temp = displayValue;
//displayValue = Number(display.textContent);
//console.log(result);

// } else if (sign !== "") {
//   operate(sign, firstNumber, displayValue);
// display.textContent = "";
// sign = operators[i].textContent;
// console.log(sign);
// if (temp !== "" && displayValue !== "") {
//   operate(sign, temp, displayValue);
//   temp = "";
//   sign = "";
// }

//sled kato prikluchi temp = displayValue aktivirane na butonite i sled tova operate

//console.log(operate("+", 5, 2));
//let displayValue = 0;

//let operandsArray = Array.from(operands);

//addEventListener textcontent, make them into an array querySelectorAll
//toarray map

//operands.addEventListener("click", getValue);
// const displayValue = function () {
//   display.textContent = operands[i].textContent;
//   console.log(operands.textContent)
//   return display;
// };

// if (displayValue.length === 10) {
//   display.textContent = '';
// }
// if(displayValue === '' ){
//   display.textContent = `${operands[i].textContent}`;
// }
