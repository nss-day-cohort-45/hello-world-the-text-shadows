// renders individual citizen objects as HTML (translator)

export const Citizen = (citizenObject) =>{
    return `
    <section class = "citizen">
        <div class="citizen_name">${citizenObject.citizen}<div>
    </section>
    `
}