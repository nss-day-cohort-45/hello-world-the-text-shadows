const citizensCollection = [
  {
      citizen_name: "Sean Connery"
  },
  {
      citizen_name: "Tilda Swinton"
  },
  {
      citizen_name: "Ewan McGregor"
  }
];

export const useCitizens = () => {
  return citizensCollection.slice();
};