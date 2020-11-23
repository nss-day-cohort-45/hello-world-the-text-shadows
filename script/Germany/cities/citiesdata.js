const citiesCollection = [
    {
        name: "Berlin"
    },
    {
        name: "Nuremberg"
    },
    {
        name: "Aurich"
    }
]

export const useCities = () => {
    return citiesCollection.slice()
  }