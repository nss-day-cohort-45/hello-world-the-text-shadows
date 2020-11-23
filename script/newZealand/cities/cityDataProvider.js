const cityCollection = [
    {
        name: "Auckland"
    },
    {
        name: "Wellington"
    },
    {
        name: "Christchurch"
    }
];

export const useCities = () => {
    return cityCollection.slice()
}