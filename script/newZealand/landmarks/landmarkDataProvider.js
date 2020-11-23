const landmarkCollection = [
    {
        name: "Moeraki Boulders"
    },
    {
        name: "Craters of the Moon"
    },
    {
        name: "The Sky Tower"
    }
];

export const useLandmarks = () => {
    return landmarkCollection.slice()
}