//data for the navbar

export const linkCollection = [
    {
        countryName: "Home",
        fileName: "index.html"
    },
    
    {
        countryName: "Germany",
        fileName: "germany.html"
    },

    {
        countryName: "Japan",
        fileName: "japan.html"
    },

    {
        countryName: "New Zealand",
        fileName: "newzealand.html"
    },

    {
        countryName: "Peru",
        fileName: "peru.html"
    },

    {
        countryName: "Scotland",
        fileName: "scotland.html"
    }

]

export const useLink = () =>{
    return linkCollection.slice()
}