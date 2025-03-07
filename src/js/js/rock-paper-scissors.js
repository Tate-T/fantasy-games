const rockButtonElement = document.querySelector(".game__button-1");
const  scissorsButtonElement = document.querySelector(".game__button-2");
const  paperButtonElement = document.querySelector(".game__button-3");
const pcButtonElement = document.querySelector(".game__pc-option");

const choices = ["Камінь","Ножиці","Папір"];

let userScore = 0;
let pcScore = 0;
let drawScore = 0;


function playGame(userChoice) {
    const choices = ["Камінь","Ножиці","Папір"];
    const pcButtonElement = choices[Math.floor(Math.random() * choices.length)];
  
    if(computerChoice === choices[0]) {
        pcButtonElement.textContent = "Камінь";
    } else if(computerChoice === choices[1]) {
        pcButtonElement.textContent = "Папір";
    } else if(computerChoice === choices[2]) {
        pcButtonElement.textContent = "Ножиці";
    }}

    