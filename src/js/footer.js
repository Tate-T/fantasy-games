const modal = document.querySelector("[data-modal]");
const closeButton = document.querySelector("[data-modal-close]");
const openButton = document.querySelector("[data-modal-open]");
const backdrop = document.querySelector("[data-backdrop]");
const input = document.querySelector(".footer__input");

openButton.addEventListener("click", () => {
    if (input.value.includes("@")) {
        modal.classList.remove("is-hidden");
        backdrop.classList.add("active");
    } else {
        alert("Please enter a valid email!");
    }
});

closeButton.addEventListener("click", () => {
    modal.classList.add("is-hidden");
    backdrop.classList.remove("active");
});
