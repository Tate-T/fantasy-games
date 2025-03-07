const creditsHeadline = document.querySelector(".credits__headline");
const creditsDescribtion = document.querySelector(".credits__describtion");
const creditsImage = document.querySelector(".credits__image");
const leftButton = document.querySelector(".credits__left-svg");
const rightButton = document.querySelector(".credits__right-svg");
const lineItems = document.querySelectorAll(".credits__item-line");

const team = [
    {
        name: "Ім’я студента",
        role: "Інформація про роботу, яку він/вона виконав/ла",
        image: "./img/credits/square.png",
    },
    {
        name: "Тарас",
        role: "Тімлід",
        image: "./img/credits/taras.png",
    },
    {
        name: "Діма",
        role: "Скрам-майстер",
        image: "./img/credits/dima.png",
    },
    {
        name: "Маркіян",
        role: "Розробник, (Я зробив цю секцію)",
        image: "./img/credits/markiian.png",
    },
    {
        name: "Денис",
        role: "Розробник",
        image: "./img/credits/denys.png",
    },
    {
        name: "Настя",
        role: "Розробник",
        image: "./img/credits/nastya.png",
    },
    {
        name: "Діна",
        role: "Розробник",
        image: "./img/credits/dina.png",
    },
];

let currentIndex = 0;

function updateCredits() {
    creditsHeadline.textContent = team[currentIndex].name;
    creditsDescribtion.textContent = team[currentIndex].role;
    creditsImage.src = team[currentIndex].image;

    lineItems.forEach(line => line.classList.remove("selected"));

    if (lineItems[currentIndex]) {
        lineItems[currentIndex].classList.add("selected");
    }
}

rightButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % team.length;
    updateCredits();
});

leftButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + team.length) % team.length;
    updateCredits();
});

updateCredits();