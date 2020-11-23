//collection of famous citizens and an export function

 const citizenCollection = [
     {citizen:"Hernando de Soto (economist)"},
     {citizen:"Carlos I. Noriega (astronaut)"},
     {citizen:"Susana Baca (singer)"}
 ]

 export const useCitizen = () =>{
     return citizenCollection.slice()
 }