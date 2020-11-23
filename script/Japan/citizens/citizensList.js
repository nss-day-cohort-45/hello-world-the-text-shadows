import {useCitizen} from './dataProvider.js'
import {Citizens} from './citizen.js'


export const citizenList = () => {
  const contentElement = document.querySelector(".famous_citizens_list")
  const allTheCitizens = useCitizen()

  for (const citizenObject of allTheCitizens) {
      const citizenHTML = Citizens(citizenObject)
    contentElement.innerHTML += citizenHTML
  }
}