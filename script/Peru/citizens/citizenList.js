// citizenList takes HTML translated objects and places them on the DOM

import { Citizen } from './citizen.js'
import { useCitizen } from './dataProvider.js'

export const CitizenList = () =>{
    //get a reference to the <> element
    const contentElement = document.querySelector(".citizen")
    //grab a copy on the city list
    const cities = useCitizen()
    //iterates through citizen collection, translate objects to HTML, places HTML on the DOM
    for( const citizenObject of citizens){
        const citizenHTML = Citizen(citizenObject)
        contentElement.innerHTML += citizenHTML
    }
}