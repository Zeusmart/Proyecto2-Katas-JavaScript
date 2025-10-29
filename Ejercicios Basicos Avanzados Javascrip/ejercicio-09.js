//Calcular una suma 
const numbers = [1, 2, 3, 5, 45, 37, 58]
let acum=0
function sumNumbers(numberList) {
  // Completar código
    for (i=0; i < numberList.length; i++) {
        acum += numberList[i]
      }
              return acum
    }
console.log(sumNumbers(numbers))
