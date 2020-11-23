//contains data of cities on Peru as an object 

const cityCollection = [
    {name:"Lima"},
    {name: "Arequipa"},
    {name:"Trujillo"}
]

export const useCity = () => {
    return cityCollection.slice()
}