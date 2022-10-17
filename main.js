const numbers = document.querySelectorAll(".data-number");
const operators = document.querySelectorAll(".data-operation");
const output = document.querySelector(".previous-operand");
const equal = document.querySelector(".data-equals");
const clear = document.querySelector(".data-all-clear");
let clickedKey;
let clickedOperator;
let firstNumber = "";
let secondNumber = "";
let userInput = [];
let calcScreen = [];
let calculation;
let result;
let isOperatorClicked = true;

function getNumber() {
  numbers.forEach(function (number) {
    number.addEventListener("click", (event) => {
      clickedKey = event.target.value;
      userInput.push(clickedKey);
      calcScreen.push(clickedKey);
      output.innerHTML = calcScreen.join("");
    });
  });
}

function getOperator() {
  operators.forEach(function (operator) {
    operator.addEventListener("click", (event) => {
      clickedOperator = event.target.value;
      output.innerHTML = "";
      userInput.push(clickedOperator);
      calcScreen = [];
    });
  });
}

clear.addEventListener("click", () => {
  userInput = [];
  calculation = "";
  firstNumber = "";
  secondNumber = "";
  calcScreen = [];
  output.innerHTML = "";
});

equal.addEventListener("click", () => {
  for (i = 0; i < userInput.length; i++) {
    if (
      userInput[i] === "+" ||
      userInput[i] === "-" ||
      userInput[i] === "/" ||
      userInput[i] === "*"
    ) {
      var operator = userInput[i];
    } else if (!operator) {
      firstNumber = firstNumber + userInput[i];
    } else if (operator) {
      secondNumber = secondNumber + userInput[i];
    }
    calculate(firstNumber, operator, secondNumber);
    console.log({ firstNumber });
    console.log({ secondNumber });
    console.log(userInput);

    output.innerHTML = calculation;
  }

  function calculate(firstNumber, operator, secondNumber) {
    if (operator === "+") {
      calculation = parseInt(firstNumber) + parseInt(secondNumber);
      firstNumber = "";
    }
    if (operator === "-") {
      calculation = parseInt(firstNumber) - parseInt(secondNumber);
      output.innerHTML = calculation;
    }
    if (operator === "*") {
      calculation = parseInt(firstNumber) * parseInt(secondNumber);
      output.innerHTML = calculation;
    }
    if (operator === "/") {
      calculation = parseInt(firstNumber) / parseInt(secondNumber);
      output.innerHTML = calculation;
    }
  }
});

getNumber();
getOperator();
