import { useCitizens } from "/script/newZealand/citizens/citizenDataProvider.js"

import { Citizens } from "/script/newZealand/citizens/citizen.js"

export const citizenList = () => {
    const contentElement = document.querySelector(".famous_citizens_list");
    const allTheCitizens = useCitizens();

    for (const citizenObject of allTheCitizens) {
        const citizensHTML = Citizens(citizenObject)
        contentElement.innerHTML += citizensHTML
    };
}