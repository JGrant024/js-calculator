const numbers = document.querySelectorAll(".data-number");
const operators = document.querySelectorAll(".data-operation");
const output = document.querySelector(".previous-operand");
const equal = document.querySelector(".data-equals");
let clickedKey;
let clickedOperator;
let firstNumber = [];
let secondNumber = [];
let userInput = [];
let calculation;
let isOperatorClicked = true;

function getNumber() {
  numbers.forEach(function (number) {
    number.addEventListener("click", (event) => {
      clickedKey = event.target.value;
      if (isOperatorClicked) {
        firstNumber.push(clickedKey);
        userInput.push(firstNumber);
        output.innerHTML = firstNumber.join("");
      } else {
        secondNumber.push(clickedKey);
        userInput.push(secondNumber);
        output.innerHTML = secondNumber.join("");
      }
    });
  });
}

function getOperator() {
  operators.forEach(function (operator) {
    operator.addEventListener("click", (event) => {
      clickedOperator = event.target.value;
      isOperatorClicked = false;
      output.innerHTML = "";
    });
  });
}

equal.addEventListener("click", () => {
  if (clickedOperator === "+") {
    calculation =
      parseInt(firstNumber.join("")) + parseInt(secondNumber.join(""));
    output.innerHTML = calculation;
  }
  if (clickedOperator === "-") {
    calculation = parseInt() - parseInt(secondNumber.join(""));
    output.innerHTML = calculation;
  }
  if (clickedOperator === "*") {
    calculation = parseInt() * parseInt(secondNumber.join(""));
    output.innerHTML = calculation;
  }
  if (clickedOperator === "/") {
    calculation = parseInt() / parseInt(secondNumber.join(""));
    output.innerHTML = calculation;
  }
});

getNumber();
getOperator();
