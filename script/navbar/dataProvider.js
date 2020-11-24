//data for the navbar

export const linkCollection = [
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
    },

    {
        countryName: "Home",
        fileName: "index.html"
    }
]

export const useLink = () =>{
    return linkCollection.slice()
}