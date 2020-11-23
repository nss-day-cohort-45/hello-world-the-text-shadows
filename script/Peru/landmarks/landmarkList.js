// landmarkList takes HTML translated objects and places them on the DOM

import { Landmark } from '/script/Peru/landmarks/landmark.js'
import { useLandmark } from '/script/Peru/landmarks/dataProvider.js'

export const LandmarkList = () =>{
    //get a reference to the <> element
    const contentElement = document.querySelector(".landmarks_list")
    //grab a copy on the city list
    const landmark = useLandmark()
    //iterates through city collection, translate objects to HTML, places HTML on the DOM
    for(const landmarkObject of landmark){
        const landmarkHTML = Landmark(landmarkObject)
        contentElement.innerHTML += landmarkHTML
    }
}