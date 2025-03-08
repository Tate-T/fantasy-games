const button = document.querySelector(".header__list-button");
const submenu = document.querySelector(".header__submenu");

button.addEventListener("click", function(event) {
  event.stopPropagation();
  submenu.classList.toggle("show");
});

document.addEventListener("click", function(event) {
  if (!submenu.contains(event.target) && !button.contains(event.target)) {
    submenu.classList.remove("show");
  }
});

window.onload = function () {
    const modal = document.querySelector('.modal'); // Модальне вікно
    const input = document.getElementById('modal__name-input'); // Поле введення імені
    const saveButton = document.querySelector('.modal__save-button'); // Кнопка збереження
    const userNameSpan = document.querySelector('.header_hello-value'); // Місце для імені

    modal.classList.add('modal--active'); // Відкриваємо модальне вікно

    saveButton.addEventListener('click', function () {
        const userName = input.value.trim(); // Отримуємо введене ім'я

        if (userName !== '') {
            userNameSpan.textContent = userName; // Оновлюємо ім'я в хедері
            modal.classList.remove('modal--active'); // Закриваємо модальне вікно
        } else {
            alert('Будь ласка, введіть своє ім’я!'); // Повідомлення, якщо поле порожнє
        }
    });

    // Закриття модалки при натисканні на "Escape"
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            modal.classList.remove('modal--active');
        }
    });

    // Закриття модалки при кліку поза нею
    modal.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.classList.remove('modal--active');
        }
    });
};

