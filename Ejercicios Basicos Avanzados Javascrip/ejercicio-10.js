//Calcular un promedio
const numbers = [12, 21, 38, 5, 45, 37, 6];
let acum=0
function average(numberList) {
  // Completar
      for (i=0; i < numberList.length; i++) {
        acum += numberList[i]
      }
      acum=acum/(numberList.length)
              return acum
}
console.log(average(numbers))