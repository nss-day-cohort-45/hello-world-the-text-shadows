const landmarksCollection = [
    {
        name: "Reichstag Building"
    },
    {
        name: "Altstadt"
    },
    {
        name: "Windmühlen in Ostfriesland"
    }
]

export const useLandmarks = () => {
    return landmarksCollection.slice()
  }