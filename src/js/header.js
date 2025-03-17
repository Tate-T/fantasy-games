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

document.addEventListener("DOMContentLoaded", function () {
  const modal = document.querySelector(".header__modal");
  const input = document.querySelector("#modal__name-input");
  const saveButton = document.querySelector(".modal__save-button");
  const helloValue = document.querySelector(".header__hello-value");
  const closeModal = document.querySelector(".modal__close")

  // Відкрити модалку при вході на сайт
  modal.setAttribute("data-open", "true");
  modal.classList.add("modal--visible");

 closeModal.addEventListener("click", function () {
  modal.style.display = "none";
 })

  // Обробник кліку по кнопці "Зберегти"
  saveButton.addEventListener("click", function () {
      const name = input.value.trim();
      if (name) {
          helloValue.textContent = name; // Передаємо значення в span.header__hello-value
          modal.classList.remove("modal--visible"); // Закриваємо модальне вікно
          modal.setAttribute("data-open", "false");
      }
  });
});


const slider = document.getElementById("slider");
const pageDark = document.querySelector("body");

slider.addEventListener("change", function () {
  if (this.checked) {
   
    pageDark.setAttribute("id", "dark-theme")
    // pageDark.classList.add("dark-theme");
  } else {
    pageDark.removeAttribute("id")
    // pageDark.classList.remove("dark-theme");
  }
})

