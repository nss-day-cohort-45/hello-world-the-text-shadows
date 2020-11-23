import { useCities } from './citiesData.js'
import { cities } from './cities.js'

const cityNames = document.querySelector(".city_list")

export const cityListComponent = () => {
    // Use the journal entry data from the data provider component
    const cityList = useCities()

    for (const city of cityList) {
        /*
            Invoke the component that returns an
            HTML representation of a single entry
        */
       const cityHTMLRepresentations = cities(city)

       cityNames.innerHTML += cityHTMLRepresentations
    }
}