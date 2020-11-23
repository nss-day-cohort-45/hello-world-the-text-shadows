// citizenList takes HTML translated objects and places them on the DOM

import { Citizen } from '/script/Peru/citizens/citizen.js'
import { useCitizen } from '/script/Peru/citizens/dataProvider.js'

export const CitizenList = () =>{
    //get a reference to the <> element
    const contentElement = document.querySelector(".famous_citizens_list")
    //grab a copy on the city list
    const citizen = useCitizen()
    //iterates through citizen collection, translate objects to HTML, places HTML on the DOM
    for(const citizenObject of citizen){
        const citizenHTML = Citizen(citizenObject)
        contentElement.innerHTML += citizenHTML
    }
}