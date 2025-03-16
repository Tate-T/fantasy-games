const modal = document.querySelector("[data-modal]");
const falseModal = document.querySelector("[data-false-modal]");
const falseBackdrop = document.querySelector("[data-false-backdrop]");
const falseCloseButton = document.querySelector("[data-false-modal-close]");
const closeButton = document.querySelector("[data-modal-close]");
const openButton = document.querySelector("[data-modal-open]");
const backdrop = document.querySelector("[data-backdrop]");
const input = document.querySelector(".footer__input");

openButton.addEventListener("click", () => {
    if (input.value.includes("@")) {
        modal.classList.remove("is-hidden");
        backdrop.classList.add("active");
        input.value = "";
    } else {
        function modalOpen() {
            falseModal.classList.remove("is-hidden");
            falseBackdrop.classList.add("active");
        }
        modalOpen()
    }
});

closeButton.addEventListener("click", () => {
    modal.classList.add("is-hidden");
    backdrop.classList.remove("active");
});

falseCloseButton.addEventListener("click", () => {
    falseModal.classList.add("is-hidden");
    falseBackdrop.classList.remove("active");
});

// For looking
document.addEventListener("dragstart", function (event) {
    if (event.target.classList.contains("footer-modal-img")) {
        event.preventDefault();
    }
});
