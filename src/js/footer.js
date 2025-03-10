const modal = document.querySelector("[data-modal]");
const closeButton = document.querySelector("[data-modal-close]");
const openButton = document.querySelector("[data-modal-open]");
const backdrop = document.querySelector("[data-backdrop]");

openButton.addEventListener("click", () => {
    modal.classList.remove("is-hidden");
    backdrop.classList.add("active");
});

closeButton.addEventListener("click", () => {
    modal.classList.add("is-hidden");
    backdrop.classList.remove("active");
});
// For looking
document.addEventListener("dragstart", function (event) {
    if (event.target.classList.contains("footer-modal-img")) {
      event.preventDefault();
    }
  });
  