import { useCitizens } from './citizensData.js'
import { citizens } from './citizens.js'

const citizenNames = document.querySelector(".famous_citizens_list")

export const citizenListComponent = () => {
    // Use the journal entry data from the data provider component
    const citizensList = useCitizens()

    for (const citizen of citizensList) {
        /*
            Invoke the component that returns an
            HTML representation of a single entry
        */
       const citizensHTMLRepresentations = citizens(citizen)

       citizenNames.innerHTML += citizensHTMLRepresentations
    }
}