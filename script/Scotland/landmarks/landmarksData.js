const landmarksCollection = [
  {
      landmark_name: "Edinburgh Castle and the Royal Mile"
  },
  {
      landmark_name: "Loch Lomond"
  },
  {
      landmark_name: "Cruising Loch Ness and the Caledonian Canal"
  }
];

export const useLandmarks = () => {
  return landmarksCollection.slice();
};