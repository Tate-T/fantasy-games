const scientists = [
    { name: "Albert", surname: "Einstein", born: 1879, dead: 1955, id: 1 },
    { name: "Isaac", surname: "Newton", born: 1643, dead: 1727, id: 2 },
    { name: "Galileo", surname: "Galilei", born: 1564, dead: 1642, id: 3 },
    { name: "Marie", surname: "Curie", born: 1867, dead: 1934, id: 4 },
    { name: "Johannes", surname: "Kepler", born: 1571, dead: 1630, id: 5 },
    { name: "Nicolaus", surname: "Copernicus", born: 1473, dead: 1543, id: 6 },
    { name: "Max", surname: "Planck", born: 1858, dead: 1947, id: 7 },
    { name: "Katherine", surname: "Blodgett", born: 1898, dead: 1979, id: 8 },
    { name: "Ada", surname: "Lovelace", born: 1815, dead: 1852, id: 9 },
    { name: "Sarah E.", surname: "Goode", born: 1855, dead: 1905, id: 10 },
    { name: "Lise", surname: "Meitner", born: 1878, dead: 1968, id: 11 },
    { name: "Hanna", surname: "Hammarström", born: 1829, dead: 1909, id: 12 }
];
document.addEventListener("DOMContentLoaded", () => {
    const scientistsList = document.querySelector(".sceinists__list");
    const buttons = document.querySelectorAll(".sceinists__button");
    const scientistsItems = document.querySelectorAll(".sceinists__item");
    const modal = document.getElementById("modal");
    const modalTitle = document.getElementById("modal-title");
    const closeModalBtn = document.getElementById("close-modal");
    function openModal(text) {
        modalTitle.textContent = text;
        modal.style.visibility = "visible";
        modal.style.opacity = "1";
    }
    function closeModal() {
        modal.style.visibility = "hidden";
        modal.style.opacity = "0";
    }
    closeModalBtn.addEventListener("click", () => {
        closeModal();
    });
    function clearScientistsList() {
        scientistsList.innerHTML = '';
    }
    function addScientistsToList(scientistsData) {
        scientistsData.forEach(item => {
            const scientistText = `${item.name} ${item.surname} ${item.born}-${item.dead}`;
            const listItem = document.createElement('p');
            listItem.textContent = scientistText;
            listItem.classList.add('sceinists__item');
            scientistsList.appendChild(listItem);
        });
    }
    buttons[0].addEventListener("click", () => {
        const filteredScientists = scientists.filter(scientist => scientist.born >= 1801);
        clearScientistsList();
        addScientistsToList(filteredScientists);
    });
    buttons[1].addEventListener("click", () => {
        const sortedScientists = [...scientists].sort((a, b) => {
            const nameA = a.name.toLowerCase();
            const nameB = b.name.toLowerCase();
            return nameA.localeCompare(nameB);
        });
        clearScientistsList();
        addScientistsToList(sortedScientists);
    });
    buttons[2].addEventListener("click", () => {
        const sortedByLifespan = [...scientists].sort((a, b) => (b.dead - b.born) - (a.dead - a.born));
        clearScientistsList();
        addScientistsToList(sortedByLifespan);
    });
    buttons[3].addEventListener("click", () => {
        let latestBorn = scientists.reduce((latest, scientist) => {
            if (scientist.born > latest.born) {
                return scientist;
            }
            return latest;
        }, scientists[0]);
        openModal(`${latestBorn.name} ${latestBorn.surname} народився у ${latestBorn.born} році.`);
    });
    buttons[4].addEventListener("click", () => {
        const einstein = scientists.find(scientist => scientist.name === "Albert" && scientist.surname === "Einstein");
        openModal(`${einstein.name} ${einstein.surname} народився у ${einstein.born} році.`);
    });
    buttons[5].addEventListener("click", () => {
        const filteredScientists = scientists.filter(scientist => scientist.surname[0].toUpperCase() === 'C');
        clearScientistsList();
        addScientistsToList(filteredScientists);
    });
    buttons[6].addEventListener("click", () => {
        const filteredScientists = scientists.filter(scientist => !scientist.name.startsWith('A'));
        clearScientistsList();
        addScientistsToList(filteredScientists);
    });
    buttons[7].addEventListener("click", () => {
        let longestLived = scientists.reduce((longest, scientist) => {
            if ((scientist.dead - scientist.born) > (longest.dead - longest.born)) {
                return scientist;
            }
            return longest;
        }, scientists[0]);
        let shortestLived = scientists.reduce((shortest, scientist) => {
            if ((scientist.dead - scientist.born) < (shortest.dead - shortest.born)) {
                return scientist;
            }
            return shortest;
        }, scientists[0]);
        openModal(`Найдовше прожив: ${longestLived.name} ${longestLived.surname} - ${longestLived.dead - longestLived.born} років. Найменше прожив: ${shortestLived.name} ${shortestLived.surname} - ${shortestLived.dead - shortestLived.born} років.`);
    });
    buttons[8].addEventListener("click", () => {
        const filteredScientists = scientists.filter(scientist => scientist.name[0].toUpperCase() === scientist.surname[0].toUpperCase());
        clearScientistsList();
        addScientistsToList(filteredScientists);
    });

    buttons[9].addEventListener("click", () => {
        clearScientistsList();
        addScientistsToList(scientists);
    });
});


//P.S. в мене з'явилися великі проблеми з рендерингом цих карточок, ви знаєте що я спершу спробував замінювати текст в картках при фільтрі на " не підходить по фільтру" але коли
//я натискав їх багато разів то вони в мене глючили тому, у нас на мітапі появилась ідея щодо "просто видалити і вставити дані" я зрозумів що це можна зробити
//функцією оскільки я це буду робити всюди і так я розумію що scientists це є правильне слово а 
//sceinist/sceinists неправильно але коли я це зрозумів то було вже пізно і мені не хочеться перейменовувати  все в секції на правильне слово
