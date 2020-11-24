//convert object to HTML (translator


export const Link =(link)=>{
    return `
        <a href="/${link.fileName}"> ${link.countryName}</a>
    `
}
