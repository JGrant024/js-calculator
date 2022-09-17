class Calculator {
     constructor(previousOperandTexetElement, currentOperandTexetElement){
        this.previousOperandTexetElement = previousOperandTexetElement
        this,currentOperandTexetElement = currentOperandTexetElement
        this.clear  
     }
}
clear() {

}

delete(){

}
 
appendNumber(number) {

}

chooseOperation(operation) {

}

compute() {

}

updateDisplay() {
    this.currentOperandTexetElement.innerText 
}


const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButtons = document.querySelectorAll('[data-equals]')
const deleteButton = document.querySelectorAll('[data-delete]')
const allClearButton = document.querySelectorAll('[data-all-clear]')
const previousOperandTexetElement = document.querySelectorAll('[data-previous-opperand]')
const currentOperandTexetElement = document.querySelectorAll('[data-current-opperand]')

const Calculator = new Calculator(previousOperandTexetElement, currentOperandTexetElement),

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText) 
        calculator.updateDisplay()
    })
})
