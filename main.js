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
    result = Math.round(result * 1000) / 1000;
    display.textContent = result;
    displayValue = result;
    sign = "+";
  }
  if (operator === "-") {
    result = subtract(a, b);
    result = Math.round(result * 1000) / 1000;
    display.textContent = result;
    displayValue = result;
    sign = "-";
  }
  if (operator === "*") {
    result = multiply(a, b);
    result = Math.round(result * 1000) / 1000;
    display.textContent = result;
    displayValue = result;
    sign = "*";
  }
  if (operator === "/") {
    if (b === 0) {
      return "lmao";
    } else {
      result = divide(a, b);
      result = Math.round(result * 1000) / 1000;
      display.textContent = result;
      displayValue = result;
      sign = "/";
    }
  }
  if (operator === "=") {
    result = firstNumber;
    result = Math.round(result * 1000) / 1000;
    display.textContent = result;
    displayValue = firstNumber;
    sign = "=";
  }
  if (operator === "%") {
    result = firstNumber / 100;
    result = Math.round(result * 1000) / 1000;
    display.textContent = result;
    displayValue = result;
    sign = "%";
  }
};

let displayValue = "",
  firstNumber = "",
  sign,
  result = 1,
  memory = 0;

const buttons = document.querySelector("#operators-operands");
const operators = Array.from(document.querySelectorAll(".operator"));
const operands = Array.from(document.querySelectorAll(".operand"));
const backspace = document.querySelector("#backspace");
const clear = document.querySelector("#clear");
const display = document.querySelector("#display");
const operations = document.querySelector("#operations");
const memPlus = document.querySelector("#memPlus");
const memMinus = document.querySelector("#memMinus");
const mRC = document.querySelector("#MRC");
const decimal = document.querySelector("#decimal");

for (let i = 0; i < operands.length; i++) {
  operands[i].addEventListener("click", () => {
    if (result === 0 && displayValue.toString().length <= 9) {
      display.textContent = `${display.textContent}${operands[i].textContent}`;
      displayValue = Number(display.textContent);
    } else if (result === 0 && displayValue.toString().length > 9) {
      return;
    } else {
      display.textContent = `${operands[i].textContent}`;
      displayValue = Number(display.textContent);
      result = 0;
    }
  });
}

for (let i = 0; i < operators.length; i++) {
  operators[i].addEventListener("click", () => {
    if (firstNumber ?? displayValue) {
      display.textContent = "";
      operate(sign, firstNumber, displayValue);
      sign = operators[i].textContent;
      firstNumber = result;
      displayValue = null;
      decimal.disabled = false;
      if (sign === "%") {
        operate(sign, firstNumber);
        operations.textContent = firstNumber + " " + sign;
      } else if (sign !== "=") {
        operations.textContent = firstNumber + " " + sign;
      } else {
        operations.textContent = firstNumber + " ";
      }
    } else {
      firstNumber = displayValue;
      displayValue = null;
      sign = operators[i].textContent;
      result = 1;
      operations.textContent = firstNumber + " " + sign;
      decimal.disabled = false;
      if (sign === "%") {
        operate(sign, firstNumber);
        operations.textContent = firstNumber + " " + sign;
        decimal.disabled = false;
      }
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
  if (firstNumber === "") {
    memory += displayValue;
  } else {
    memory += firstNumber;
    displayValue = "";
    firstNumber = "";
    sign = "";
    result = 1;
    display.textContent = 0;
    operations.textContent = 0;
  }
});

memMinus.addEventListener("click", () => {
  if (firstNumber === "") {
    memory -= displayValue;
  } else {
    memory -= firstNumber;
    displayValue = "";
    firstNumber = "";
    sign = "";
    result = 1;
    display.textContent = 0;
    operations.textContent = 0;
  }
});

mRC.addEventListener("click", () => {
  operations.textContent = memory;
  display.textContent = memory;
});

mRC.addEventListener("dblclick", () => {
  memory = 0;
});

backspace.addEventListener("click", () => {
  displayValue = Number(
    displayValue.toString().split("").slice(0, -1).join("")
  );
  display.textContent = displayValue;
});

decimal.addEventListener("click", () => {
  displayValue += ".";
  //displayValue= Number(displayValue);
  console.log(displayValue);
  display.textContent = displayValue;
  decimal.disabled = true;
});
