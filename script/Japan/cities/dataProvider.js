const cityCollection = [
  {
    cityName: "Tokyo"
  },

  {
    cityName: "Kyoto"
  },

  {
    cityName: "Osaka"
  }
]

export const useCity = () => {
  return cityCollection.slice()
}