const field = document.querySelector(".field");
const ball = document.querySelector(".ball");

field.addEventListener("click", (event) => {
  const fieldCoords = field.getBoundingClientRect();


  const ballCoords = {
    top: event.clientY - fieldCoords.top - ball.offsetHeight / 2,
    left: event.clientX - fieldCoords.left - ball.offsetWidth / 2,
  };

  if (ballCoords.top < 0) ballCoords.top = 0;
  if (ballCoords.left < 0) ballCoords.left = 0;
  if (ballCoords.top + ball.offsetHeight > field.offsetHeight) {
    ballCoords.top = field.offsetHeight - ball.offsetHeight;
  }
  if (ballCoords.left + ball.offsetWidth > field.offsetWidth) {
    ballCoords.left = field.offsetWidth - ball.offsetWidth;
  }


  ball.style.top = `${ballCoords.top}px`;
  ball.style.left = `${ballCoords.left}px`;
});
