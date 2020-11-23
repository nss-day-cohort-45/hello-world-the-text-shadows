const landmarkCollection = [
  {
    landmarkName: "Tokyo Tower"
  },

  {
    landmarkName: "Fushimi Inari Taisha Shrine"
  },

  {
    landmarkName: "Dotonbori District"
  }
]

export const useLandmark = () => {
  return landmarkCollection.slice()
}