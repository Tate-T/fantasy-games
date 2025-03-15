const scientists = [
    {
        name: "Albert",
        surname: "Einstein",
        born: 1879,
        dead: 1955,
        id: 1,
    },
    {
        name: "Isaac",
        surname: "Newton",
        born: 1643,
        dead: 1727,
        id: 2,
    },
    {
        name: "Galileo",
        surname: "Galilei",
        born: 1564,
        dead: 1642,
        id: 3,
    },
    {
        name: "Marie",
        surname: "Curie",
        born: 1867,
        dead: 1934,
        id: 4,
    },
    {
        name: "Johannes",
        surname: "Kepler",
        born: 1571,
        dead: 1630,
        id: 5,
    },
    {
        name: "Nicolaus",
        surname: "Copernicus",
        born: 1473,
        dead: 1543,
        id: 6,
    },
    {
        name: "Max",
        surname: "Planck",
        born: 1858,
        dead: 1947,
        id: 7,
    },
    {
        name: "Katherine",
        surname: "Blodgett",
        born: 1898,
        dead: 1979,
        id: 8,
    },
    {
        name: "Ada",
        surname: "Lovelace",
        born: 1815,
        dead: 1852,
        id: 9,
    },
    {
        name: "Sarah E.",
        surname: "Goode",
        born: 1855,
        dead: 1905,
        id: 10,
    },
    {
        name: "Lise",
        surname: "Meitner",
        born: 1878,
        dead: 1968,
        id: 11,
    },
    {
        name: "Hanna",
        surname: "Hammarström",
        born: 1829,
        dead: 1909,
        id: 12,
    },
];
document.addEventListener("DOMContentLoaded", () => {
    const scientistsList = document.querySelector(".sceinists__list");
    const buttons = document.querySelectorAll(".sceinists__button");
    const scientistsItems = document.querySelectorAll(".sceinists__item");
    const originalOrder = [...scientistsList.children].map(item => item.textContent);

    buttons[0].addEventListener("click", () => {
        for (let i = 0; i < 12; i++) {
            let currentSceinistBirth = scientists[i].born;
            if (currentSceinistBirth >= 1801) {
                continue;
            } else {
                scientistsItems[i].textContent = "не підходить по фільтрації!";
            }
        }
    });

    buttons[1].addEventListener("click", () => {
        const scientistsItems = scientistsList.children;
        for (let i = 0; i < scientistsItems.length - 1; i++) {
            for (let j = i + 1; j < scientistsItems.length; j++) {
                const nameA = scientistsItems[i].textContent.toLowerCase();
                const nameB = scientistsItems[j].textContent.toLowerCase();
                if (nameA > nameB) {
                    scientistsList.insertBefore(scientistsItems[j], scientistsItems[i]);
                }
            }
        }
    });

    buttons[2].addEventListener("click", () => {
        scientists.sort((a, b) => {
            if ((a.dead - a.born) > (b.dead - b.born)) {
                return 1;
            } else {
                return -1;
            }
        });
    });

    buttons[3].addEventListener("click", () => {
        let latestBorn = scientists.reduce((latest, scientist) => {
            if (scientist.born > latest.born) {
                return scientist;
            } else {
                return latest;
            }
        }, scientists[0]);

        alert(
            `${latestBorn.name} ${latestBorn.surname} народився у ${latestBorn.born} році.`
        );
    });

    buttons[4].addEventListener("click", () => {
        for (let i = 0; i < scientists.length; i++) {
            if (scientists[i].name === "Albert" && scientists[i].surname === "Einstein") {
                alert(`Albert Einstein народився у ${scientists[i].born} році.`);
                break;
            }
        }
    });

    buttons[5].addEventListener("click", () => {
        let found = false;
        for (let i = 0; i < scientists.length; i++) {
            if (scientists[i].surname.startsWith("C")) {
                scientistsItems[i].textContent = `${scientists[i].name} ${scientists[i].surname} ${scientists[i].born}-${scientists[i].dead}`;
                found = true;
            } else {
                scientistsItems[i].textContent = "не підходить по фільтрації!";
            }
        }
    });

    buttons[6].addEventListener("click", () => {
        for (let i = 0; i < scientists.length; i++) {
            if (scientists[i].name.startsWith("A")) {
                scientistsItems[i].textContent = "не підходить по фільтрації!";
            }
        }
    });

    buttons[7].addEventListener("click", () => {
        let longestLived = scientists.reduce((longest, scientist) => {
            if (scientist.dead - scientist.born > longest.dead - longest.born) {
                return scientist;
            } else {
                return longest;
            }
        }, scientists[0]);

        let shortestLived = scientists.reduce((shortest, scientist) => {
            if (scientist.dead - scientist.born < shortest.dead - shortest.born) {
                return scientist;
            } else {
                return shortest;
            }
        }, scientists[0]);

        alert(
            `Найдовше прожив: ${longestLived.name} ${longestLived.surname} - ${longestLived.dead - longestLived.born
            } років`
        );
        alert(
            `Найменше прожив: ${shortestLived.name} ${shortestLived.surname} - ${shortestLived.dead - shortestLived.born
            } років`
        );
    });

    buttons[8].addEventListener("click", () => {
        let found = false;
        for (let i = 0; i < scientists.length; i++) {
            if (scientists[i].name[0] === scientists[i].surname[0]) {
                scientistsItems[i].textContent = `${scientists[i].name} ${scientists[i].surname} ${scientists[i].born}-${scientists[i].dead}`;
                found = true;
            } else {
                scientistsItems[i].textContent = "не підходить по фільтрації!";
            }
        }
    });
    buttons[9].addEventListener("click", () => {
        scientistsList.innerHTML = ''; 
        originalOrder.forEach(item => scientistsList.appendChild(item));
    });
    
});