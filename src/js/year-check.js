document.querySelector('.years__form').addEventListener('submit', function(event) {
    event.preventDefault();
    const year = parseInt(document.getElementById('yearInput').value);
    const resultElement = document.getElementById('result');

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

