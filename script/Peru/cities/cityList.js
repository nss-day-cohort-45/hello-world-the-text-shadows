// cityList takes HTML translated objects and places them on the DOM

import { City } from '/script/Peru/cities/city.js'
import { useCity } from '/script/Peru/cities/dataProvider.js'

export const CityList = () =>{
    //get a reference to the <> element
    const contentElement = document.querySelector(".city_list")
    //grab a copy on the city list
    const cities = useCity()
    //iterates through city collection, translate objects to HTML, places HTML on the DOM
    for( const cityObject of cities){
        const cityHTML = City(cityObject)
        contentElement.innerHTML += cityHTML
    }
}