const citiesCollection = [
    {
        city_name: "Glasglow"
    },
    {
        city_name: "Aberdeen"
    },
    {
        city_name: "Edinburgh"
    }
];

export const useCities = () => {
    return citiesCollection.slice();
};