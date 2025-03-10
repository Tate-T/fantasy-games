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

window.onload = () => {
    const modal = document.querySelector(".modal");
    const closeBtn = modal.querySelector("svg");

    if (modal.dataset.open === "true") {
        modal.style.display = "block";
    }

    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });
};


const userValueSpan = document.querySelector(".header__hello-value");
const modalInput = document.getElementById("modal__name-input");
const saveBtn = document.querySelector(".modal__save-button");
const modal = document.querySelector(".modal[data-open='true']");

// Слухаємо подію click для кнопки "Зберегти"
saveBtn.addEventListener("click", function() {
  // Витягуємо значення з інпуту
  const inputValue = modalInput.value;

  // Вставляємо значення в span
  userValueSpan.textContent = inputValue;

  // Закриваємо модальне вікно
  modal.style.display = "none";
});


