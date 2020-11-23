import { useLandmarks } from "/script/Germany/landmarks/landmarksdata.js"
import { Landmarks } from "/script/Germany/landmarks/landmarks.js"




export const landmarksList = () => {


 
    const contentElement = document.querySelector(".landmarks_list")
    const allTheLandmarks = useLandmarks()
  
    for (const landmarksObject of allTheLandmarks) {
      const landmarksHTML = Landmarks(landmarksObject)
      contentElement.innerHTML += landmarksHTML
    }
  }