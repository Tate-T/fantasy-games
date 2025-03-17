
// Вибір людини
const rockButtonElement = document.querySelector(".game__button-1");
const scissorsButtonElement = document.querySelector(".game__button-2");
const paperButtonElement = document.querySelector(".game__button-3");
const showOptionElement = document.querySelector(".game__your-choice");
// Кнопка вибору ПК
const pcButtonElement = document.querySelector(".game__pc-option");
// Рахунок
const totalScoreElement = document.querySelector(".game__point-all");
const pcScoreElement = document.querySelector(".game__point-pc");
const yourScoreElement = document.querySelector(".game__point-your");

const StatusElement = document.querySelector(".game__win-lose");

const choices2 = ["Камінь", "Ножиці", "Папір"];

let userScore = 0;
let pcScore = 0;
let totalScore = 0;
const loseMessage = "Комп’ютер виграв раунд!";
const winMessage = "Ви виграли раунд!";

let userChoice = null;

rockButtonElement.addEventListener("click", (event) => {
  userChoice = "Камінь";
  showOptionElement.textContent = `${userChoice}`;
  showOptionElement.style.color = "white";
  showOptionElement.style.backgroundColor = "#000";
});

scissorsButtonElement.addEventListener("click", (event) => {
  userChoice = "Ножиці";
  showOptionElement.textContent = `${userChoice}`;
  showOptionElement.style.color = "white";
  showOptionElement.style.backgroundColor = "#000";
});

paperButtonElement.addEventListener("click", (event) => {
  userChoice = "Папір";
  showOptionElement.textContent = `${userChoice}`;
  showOptionElement.style.color = "white";
  showOptionElement.style.backgroundColor = "#000";
});

function getRandom() {
  const randomIndex = Math.floor(Math.random() * choices2.length);
  return choices2[randomIndex];
}

function decideWhoWin(userChoice) {
  const computerChoice = getRandom();
  let resultMessage = "";

  if (userChoice === computerChoice) {
    resultMessage = "Нічия!";
    StatusElement.style.color = "black";
  } else if (
    (userChoice === "Камінь" && computerChoice === "Ножиці") ||
    (userChoice === "Ножиці" && computerChoice === "Папір") ||
    (userChoice === "Папір" && computerChoice === "Камінь")
  ) {
    userScore++;
    resultMessage = winMessage;
    StatusElement.style.color = "green";
  } else {
    pcScore++;
    resultMessage = loseMessage;
    StatusElement.style.color = "red";
  }

  totalScore++;
  totalScoreElement.textContent = totalScore;
  yourScoreElement.textContent = userScore;
  pcScoreElement.textContent = pcScore;
  StatusElement.textContent = resultMessage;
}

pcButtonElement.addEventListener("click", () => {
  if (userChoice) {
    decideWhoWin(userChoice);
    userChoice = null; 
  }
});

totalScoreElement.textContent = totalScore;
yourScoreElement.textContent = userScore;
pcScoreElement.textContent = pcScore;