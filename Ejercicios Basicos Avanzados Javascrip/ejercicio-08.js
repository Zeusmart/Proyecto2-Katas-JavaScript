//Buscar la palabra más larga: 
const avengers = [
  "Hulk",
  "Thor",
  "Iron Man",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];
function findLongestWord(strings) {
  // Completar código
 if (!strings || strings.length === 0) {
    return "";
  }

  let stringMasLargo = ""
  for (i = 0; i < strings.length; i++) {
    if (strings[i].length > stringMasLargo.length) {
      stringMasLargo = strings[i]
    }
  }
  return stringMasLargo
}
console.log(findLongestWord(avengers))

