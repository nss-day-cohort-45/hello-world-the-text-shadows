const citizensCollection = [
    {
        name: "Götz George"
    },
    {
        name: "Albrecht Dürer"
    },
    {
        name: "Rudolf Eucken"
    }
]

export const useCitizens = () => {
    return citizensCollection.slice()
  }