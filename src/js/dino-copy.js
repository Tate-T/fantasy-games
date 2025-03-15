const dino = document.querySelector(".dinos");
const cactus = document.querySelector(".cactus");
const loseMsg = document.querySelector(".loseMessages");
const playButtonElement = document.querySelector(".play-button");
const startPlateElement = document.querySelector(".start-plate");
const playElement = document.querySelector(".play");
let gameStarted = false; 

playButtonElement.addEventListener("click", (event) => {
    startPlateElement.style.display = "none"; 
    gameStarted = true; 
    startGame();
});

document.addEventListener("keydown", function(event) {
    if (event.code === 'Enter' && !gameStarted) {
        startPlateElement.style.display = "none";
        gameStarted = true; 
        startGame();
    }
});

function startGame() {
    loseMsg.style.display = "none"; 

    document.addEventListener("keydown", function(event) {
        if (event.code === 'Enter') {
            jump();
        }
    });

    let isAlive = setInterval(function() {
        if (!gameStarted) return;

        let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
        let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

        if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
            loseMsg.textContent = "Ви програли!"; 
            loseMsg.style.display = "block";
            startPlateElement.appendChild(loseMsg); 
            gameStarted = false; 
            clearInterval(isAlive); 
            resetGame(); 
        }
    }, 10);
}

function jump() {
    if (dino.classList != "jump") {
        dino.classList.add("jump");

        setTimeout(function() {
            dino.classList.remove("jump");
        }, 300);
    }
}

function resetGame() {
    setTimeout(() => {
        startPlateElement.style.display = "block"; 
        loseMsg.style.display = "block"; 
        gameStarted = false; 
    }, 100);
}