// landmarkList takes HTML translated objects and places them on the DOM

import { Landmark } from './landmark.js'
import { useLandmark } from './dataProvider.js'

export const LandmarkList = () =>{
    //get a reference to the <> element
    const contentElement = document.querySelector(".peruHTML/landmark")
    //grab a copy on the city list
    const cities = useLandmark()
    //iterates through city collection, translate objects to HTML, places HTML on the DOM
    for( const landmarkObject of landmarks){
        const cityHTML = Landmark(landmarkObject)
        contentElement.innerHTML += landmarkHTML
    }
}