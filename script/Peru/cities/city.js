//// renders individual city objects as HTML (translator)

export const City = (city) =>{
    return `
    <section class = "city">
        <div class="city_name">${city.name}<div>
    </section>
    `
}