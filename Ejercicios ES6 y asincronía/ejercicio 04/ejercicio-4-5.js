/*4.5 utiliza .filter() para generar un nuevo array con los streamers que incluyan
el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion
.includes() para la comprobación.
Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando
.age sea mayor que 35.
 */

const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
]


// 1. Filtrar los elementos que cumplen la condición de gameMorePlayed
const filtradoGame = streamers.filter(persona => persona.gameMorePlayed.includes("Legends"))
// 1. Filtrar los elementos que cumplen la condición de age mayor a 35
const filtradoEdad = filtradoGame.filter(persona => persona.age > 35)
// 2. Transformar los elementos filtrados (en este caso, name a mayúsculas)
const elementosModificados = filtradoEdad.map(persona => ({
  ...persona,
  name: persona.name.toUpperCase()
}));

console.log(elementosModificados)
//console.log(filtradoGame)