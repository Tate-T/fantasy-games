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

const choices = ["Камінь","Ножиці","Папір"];

let userScore = 0;
let pcScore = 0;
let drawScore = 0;
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


pcButtonElement.addEventListener("click", (event) => {

})

totalScoreElement.textContent = totalScore;
yourScoreElement.textContent = userScore;
pcScoreElement