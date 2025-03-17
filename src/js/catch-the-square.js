const square = document.querySelector(".square");
const scoreDisplay = document.querySelector(".scuare");
let score = 0;

function moveSquare() {
  const x = Math.random() * (window.innerWidth - 50);
  const y = Math.random() * (window.innerHeight - 50);
  square.style.left = `${x}px`;
  square.style.top = `${y}px`;
}
square.addEventListener("click", () => {
  score++;
  scoreDisplay.textContent = `очки - ${score}`;
  moveSquare();
});

moveSquare();
