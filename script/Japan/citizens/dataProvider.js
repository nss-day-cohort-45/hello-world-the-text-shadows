const citizenCollection = [
  {
    citizenName: "Hayao Miyazaki"
  },

  {
    citizenName: "Yoko Ono"
  },

  {
    citizenName: "Shigeru Miyamoto"
  }
]

export const useCitizen = () => {
  return citizenCollection.slice()
}