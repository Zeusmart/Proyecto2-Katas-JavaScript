/* Calcular promedio mezclado: Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume. */
const mixedElements = [
  6,
  1,
  "Marvel",
  1,
  "hamburguesa",
  "10",
  "Prometeo",
  8,
  "Hola mundo",
];
let resp=0
function averageWord(list) {
  // Completar
        for (i=0; i < list.length; i++) {
            const elemento1 = list[i]
        if(typeof elemento1 === 'number'){
             resp += elemento1
        } else {
            const elemento2 = list[i].length
            resp += elemento2
        }
    }
    return resp
}
          console.log(averageWord(mixedElements))  
