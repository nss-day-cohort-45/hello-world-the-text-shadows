const citizenCollection = [
    {
        name: "Peter Jackson"
    },
    {
        name: "Russell Crowe"
    },
    {
        name: "Lorde"
    }
];

export const useCitizens = () => {
    return citizenCollection.slice()
}