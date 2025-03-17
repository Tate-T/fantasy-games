const square = document.querySelector(".square");
const scoreDisplay = document.querySelector(".scuare");
const container = document.querySelector(".catch__the__square");
let score = 0;

function moveSquare() {
  const containerRect = container.getBoundingClientRect();
  const x = Math.random() * (containerRect.width - 50);
  const y = Math.random() * (containerRect.height - 50);
  square.style.left = `${x}px`;
  square.style.top = `${y}px`;
}

square.addEventListener("click", () => {
  score++;
  scoreDisplay.textContent = `очки - ${score}`;
  moveSquare();
});

moveSquare();
