const modal = document.querySelector("[data-modal]");
const closeButton = document.querySelector("[data-modal-close]");
const openButton = document.querySelector("[data-modal-open]");
const backdrop = document.querySelector("[data-backdrop]");

openButton.addEventListener("click", (event) => {
    modal.classList.remove("is-hidden")
    backdrop.classList.add("footer-backdrop") 
    backdrop.classList.add("footer-backdrop-flex")
    backdrop.classList.remove("footer-backdrop-none")
});
closeButton.addEventListener("click", (event) => {
    modal.classList.add("is-hidden")
    backdrop.classList.remove("footer-backdrop")
    backdrop.classList.remove("footer-backdrop-flex")
    backdrop.classList.add("footer-backdrop-none")
});

// For looking
document.addEventListener("dragstart", function (event) {
    if (event.target.classList.contains("footer-modal-img")) {
      event.preventDefault();
    }
  });
  