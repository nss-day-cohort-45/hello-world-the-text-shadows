//collectin of all landmarks 

const landmarkCollection = [
    {landmak:"Machu Picchu"},
    {landmark:"The Inca Trail"},
    {landmark: "Cañon del Colca"}
]

export  const useLandmark = () =>{
    return landmarkCollection.slice()
}