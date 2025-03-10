//вибір людини
const rockButtonElement = document.querySelector(".game__button-1");
const  scissorsButtonElement = document.querySelector(".game__button-2");
const  paperButtonElement = document.querySelector(".game__button-3");
// кнопка вибору пк
const pcButtonElement = document.querySelector(".game__pc-option"); //pc
//рахунок
const totalScoreElement = document.querySelector(".game__point-all");
const pcScoreElement = document.querySelector(".game__point-pc");
const yourScoreElement = document.querySelector(".game__point-your");

const StatusElement = document.querySelector(".game__win-lose")

const choices2 = ["Камінь","Ножиці","Папір"];


let userScore = 0;
let pcScore = 0;
let totalScore = 0;
const loseMessage = "Комп’ютер виграв раунд!";
const winMessage = "Ви виграли раунд!";



rockButtonElement.addEventListener("click", (event) => {
    console.log(event.target)
})
scissorsButtonElement.addEventListener("click", (event) => {
    console.log(event.target)
})
paperButtonElement.addEventListener("click", (event) => {
    console.log(event.target)
})


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
        (userChoice === "Камінь" && computerChoice === "Ножиці") || (userChoice === "Ножиці" && computerChoice === "Папір") ||
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
    const computerChoice = getRandom();
    decideWhoWin(computerChoice);
});




totalScoreElement.textContent = totalScore;
yourScoreElement.textContent = userScore;
pcScoreElement.textContent = pcScore;
