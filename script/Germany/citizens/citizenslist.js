import { useCitizens } from "/script/Germany/citizens/citiensdata.js";
import { Citizens } from "/script/Germany/citizens/citizens.js";




export const citizensList = () => {


 
    const contentElement = document.querySelector(".famous_citizens_list")
    const allTheCitizens = useCitizens()
  
    for (const citizensObject of allTheCitizens) {
      const citizensHTML = Citizens(citizensObject)
      contentElement.innerHTML += citizensHTML
    }
}