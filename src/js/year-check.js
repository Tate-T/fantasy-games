document.querySelector('.years__form').addEventListener('submit', function(event) {
    event.preventDefault();
    const year = parseInt(document.querySelector('.years__input').value);
    const resultElement = document.getElementById('resultat');

    if (isLeapYear(year)) {
        resultElement.textContent = "Ви народилися у високосний рік!";
        resultElement.style.color = 'green';
    } else {
        resultElement.textContent = "Ви народилися не у високосний рік!";
        resultElement.style.color = 'red';
    }
});

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}


