import { useCities } from "/script/newZealand/cities/cityDataProvider.js"

import { Cities } from "/script/newZealand/cities/city.js"

export const cityList = () => {
    const contentElement = document.querySelector(".city_list");
    const allTheCities = useCities();

    for (const cityObject of allTheCities) {
        const citiesHTML = Cities(cityObject)
        contentElement.innerHTML += citiesHTML
    };
}