const inputs = document.querySelectorAll(".biggest__input");
const newText = document.querySelector(".biggest__text");

function updateLargestNumber() {
    const values = [...inputs].map(input => Number(input.value) || 0);
    const maxNumber = Math.max(...values);
    newText.textContent = `Найбільше число, яке ви ввели - ${maxNumber}`;
}

inputs.forEach(input => input.addEventListener("input", updateLargestNumber));