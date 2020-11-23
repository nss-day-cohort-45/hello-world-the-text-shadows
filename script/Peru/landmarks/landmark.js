// renders individual landmark objects as HTML (translator)
export const Landmark = (landmarkObject) =>{
    return `
    <section class = "landmark">
        <div class="landmark_name">${landmarkObject.landmark}<div>
    </section>
    `
}