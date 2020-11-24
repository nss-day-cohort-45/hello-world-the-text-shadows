//place converted objects/HTML onto DOM

import { Link } from "/script/navbar/links.js"
import { useLink } from "/script/navbar/dataProvider.js"


export const LinkList = () =>{
    //get a reference to the <> element
    const contentElement = document.querySelector(".navigation_bar")
    //grab a copy on the link list
    const links = useLink()
    //iterates through country name and country file name to translate
    for(const linkObject of links){
        const linkHTML = Link(linkObject)
        contentElement.innerHTML += linkHTML
    }

}


