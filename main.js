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
    console.log(a);
    result = add(a, b);
    display.textContent = result;
    return result;
  }
  if (operator === "-") {
    result = subtract(a, b)
    display.textContent = result;
    return result;
  }
  if (operator === "*") {
    display.textContent = multiply(a, b);
    return display.textContent;
  }
  if (operator === "/") {
    display.textContent = divide(a, b);
    return display.textContent;
  }
};
let displayValue,
  temp = "",
  sign,
  result = 0;

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

//console.log(operate("+", 5, 2))

for (let i = 0; i < operands.length; i++) {
  operands[i].addEventListener("click", () => {
    display.textContent = `${display.textContent}${operands[i].textContent}`;
    displayValue = Number(display.textContent);
    console.log(displayValue);
  });
}

for (let i = 0; i < operators.length; i++) {
  operators[i].addEventListener("click", () => {
    if (temp !== "" && displayValue !== "") {
      display.textContent = "";
      //sign = operators[i].textContent;
      console.log(sign);
      operate(sign, temp, displayValue);
      temp = "";
      sign = "";
    } else {
      temp = displayValue;
      displayValue = "";
      display.textContent = "";
      sign = operators[i].textContent;
      console.log(sign);
    }
    // display.textContent = "";
    // sign = operators[i].textContent;
    // console.log(sign);
    // if (temp !== "" && displayValue !== "") {
    //   operate(sign, temp, displayValue);
    //   temp = "";
    //   sign = "";
    // }
  });
}

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
