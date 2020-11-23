import { useCities } from "/script/Germany/cities/citiesdata.js"
import { Cities } from "/script/Germany/cities/cities.js"




export const citiesList = () => {


 
    const contentElement = document.querySelector(".city_list")
    const allTheCities = useCities()
  
    for (const citiesObject of allTheCities) {
      const citiesHTML = Cities(citiesObject)
      contentElement.innerHTML += citiesHTML
    }
  }