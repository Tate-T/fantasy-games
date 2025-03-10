let randomNumber = Math.floor(Math.random() * 10) + 1;

document.querySelector('.number__form').addEventListener('submit', (event) => {
    event.preventDefault();
    const userGuess = parseInt(document.querySelector('.number__input').value);
    const resultElement = document.getElementById('result');

    if (userGuess === randomNumber) {
        resultElement.textContent = `Вітаємо! Ви вгадали число ${randomNumber}.`;
        resultElement.style.color = 'green';
        randomNumber = Math.floor(Math.random() * 10) + 1; 
    } else {
        resultElement.textContent = `Нажаль, ви не вгадали. Число, яке загадав комп'ютер, було ${randomNumber}.`;
        resultElement.style.color = 'red';
        randomNumber = Math.floor(Math.random() * 10) + 1; 
    }
});



