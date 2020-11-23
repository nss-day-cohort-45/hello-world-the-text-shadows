import { useLandmarks } from './landmarksData.js'
import { landmarks } from './landmarks.js'

const landmarkNames = document.querySelector(".landmarks_list")

export const landmarkListComponent = () => {
    // Use the journal entry data from the data provider component
    const landmarksList = useLandmarks()

    for (const landmark of landmarksList) {
        /*
            Invoke the component that returns an
            HTML representation of a single entry
        */
       const landmarkHTMLRepresentations = landmarks(landmark)

       landmarkNames.innerHTML += landmarkHTMLRepresentations
    }
}