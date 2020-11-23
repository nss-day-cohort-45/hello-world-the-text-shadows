import {useLandmark} from './dataProvider.js'
import {Landmarks} from './landmark.js'


export const landmarkList = () => {
  const contentElement = document.querySelector(".landmarks_list")
  const allTheLandmarks = useLandmark()

  for (const landmarkObject of allTheLandmarks) {
      const landmarkHTML = Landmarks(landmarkObject)
    contentElement.innerHTML += landmarkHTML
  }
}