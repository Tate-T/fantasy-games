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
  const scientistsById = scientists.reduce((acc, scientist) => {
    acc[scientist.id] = scientist;
    return acc;
  }, {});

  const scientistsList = document.querySelector(".sceinists__list");
  const buttons = {
    filter19thCentury: document.getElementById("filter-19th-century"),
    sortAlphabetically: document.querySelector(
      ".sceinists__buttons button:nth-child(2)"
    ),
    sortByAge: document.querySelector(
      ".sceinists__buttons button:nth-child(3)"
    ),
    findLatestBorn: document.querySelector(
      ".sceinists__buttons button:nth-child(4)"
    ),
    findEinsteinYear: document.querySelector(
      ".sceinists__buttons button:nth-child(5)"
    ),
    findSurnameC: document.querySelector(
      ".sceinists__buttons button:nth-child(6)"
    ),
    removeNamesA: document.querySelector(
      ".sceinists__buttons button:nth-child(7)"
    ),
    findLongestShortestLived: document.querySelector(
      ".sceinists__buttons button:nth-child(8)"
    ),
    findMatchingInitials: document.querySelector(
      ".sceinists__buttons button:nth-child(9)"
    ),
  };

  function updateList(filteredIds) {
    if (!filteredIds.length) {
      scientistsList.innerHTML =
        '<p class="sceinists__item">Не підходить до фільтру</p>';
      return;
    }

    scientistsList.innerHTML = filteredIds
      .map((id) => {
        const s = scientistsById[id];
        return `<p class="sceinists__item">${s.name} ${s.surname} ${s.born}-${s.dead}</p>`;
      })
      .join("");
  }
  buttons.filter19thCentury.addEventListener("click", () => {
    updateList(
      Object.keys(scientistsById).filter((id) => {
        const s = scientistsById[id];
        return s.born >= 1801 && s.born <= 1900;
      })
    );
  });
  buttons.sortAlphabetically.addEventListener("click", () => {
    updateList(
      Object.keys(scientistsById).sort((a, b) => {
        return scientistsById[a].surname.localeCompare(
          scientistsById[b].surname
        );
      })
    );
  });
  buttons.sortByAge.addEventListener("click", () => {
    updateList(
      Object.keys(scientistsById).sort((a, b) => {
        return (
          scientistsById[b].dead -
          scientistsById[b].born -
          (scientistsById[a].dead - scientistsById[a].born)
        );
      })
    );
  });
  buttons.findLatestBorn.addEventListener("click", () => {
    const latestId = Object.keys(scientistsById).reduce((latest, id) => {
      return scientistsById[id].born > scientistsById[latest].born
        ? id
        : latest; //тернарний оператор !!11!1! не забути !!!!
    }, Object.keys(scientistsById)[0]);
    updateList([latestId]);
  });
  buttons.findEinsteinYear.addEventListener("click", () => {
    const einsteinId = Object.keys(scientistsById).find((id) => {
      const s = scientistsById[id];
      return s.name === "Albert" && s.surname === "Einstein";
    });
    alert(
      einsteinId
        ? `Albert Einstein народився у ${scientistsById[einsteinId].born} році.`
        : "Не підходить до фільтру"
    );
  });
  buttons.findSurnameC.addEventListener("click", () => {
    updateList(
      Object.keys(scientistsById).filter((id) =>
        scientistsById[id].surname.startsWith("C")
      )
    );
  });
  buttons.removeNamesA.addEventListener("click", () => {
    updateList(
      Object.keys(scientistsById).filter(
        (id) => !scientistsById[id].name.startsWith("A")
      )
    );
  });
  buttons.findLongestShortestLived.addEventListener("click", () => {
    const sortedIds = Object.keys(scientistsById).sort((a, b) => {
      return (
        scientistsById[b].dead -
        scientistsById[b].born -
        (scientistsById[a].dead - scientistsById[a].born)
      );
    });
    updateList(
      sortedIds.length ? [sortedIds[0], sortedIds[sortedIds.length - 1]] : []
    );
  });
  buttons.findMatchingInitials.addEventListener("click", () => {
    updateList(
      Object.keys(scientistsById).filter((id) => {
        const s = scientistsById[id];
        return s.name[0] === s.surname[0];
      })
    );
  });
});
