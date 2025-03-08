const inputs = document.querySelectorAll(".calculator__number-input")
const buttons = document.querySelectorAll(".calculator__doing-symbols")
const equalButton = document.querySelector(".calculator__doing-symbols-equal")
const resultInput = inputs[2]// querySelectorAll робить масив з цими елементами 
let operator = null
buttons.forEach(button => {
    button.addEventListener("click", function () {
        operator = this.textContent
    })
})
equalButton.addEventListener("click", function () {
    const num1 = parseFloat(inputs[0].value)
    const num2 = parseFloat(inputs[1].value)
    if (!isNaN(num1) && !isNaN(num2) && operator) {
        let result
        switch (operator) {
            case "+":
                result = num1 + num2
                break
            case "-":
                result = num1 - num2
                break
            case "*":
                result = num1 * num2
                break
            case "/":
                result = num2 !== 0 ? num1 / num2 : "Помилка"
                break
            default:
                result = "Помилка"
        }
        resultInput.value = result
    } else {
        resultInput.value = "Помилка"
    }
})