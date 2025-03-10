const numberInput = document.querySelector('.time__number-input');
        const calculateButton = document.querySelector('.time__butotn');
        const resultElement = document.querySelector('.time__result');

        calculateButton.addEventListener('click', function() {
            const inputValue = parseInt(numberInput.value);

            if (!isNaN(inputValue)) {
                const days = Math.floor(inputValue / (60 * 60 * 24));
                const hours = Math.floor((inputValue % (60 * 60 * 24)) / (60 * 60));
                const minutes = Math.floor((inputValue % (60 * 60)) / 60);
                const seconds = inputValue % 60;

                resultElement.textContent = `${days} дн. ${hours}:${minutes}:${seconds}`;
            } else {
                resultElement.textContent = 'Введіть коректне число';
            }
        });