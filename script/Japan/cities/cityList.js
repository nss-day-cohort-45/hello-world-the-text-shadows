import {useCity} from './dataProvider.js'
import {Cities} from './city.js'


export const cityList = () => {
  const contentElement = document.querySelector(".city_list")
  const allTheCities = useCity()

  for (const cityObject of allTheCities) {
      const cityHTML = Cities(cityObject)
    contentElement.innerHTML += cityHTML
  }
}