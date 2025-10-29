/*3.3 Dado el siguiente array, devuelve una lista que contenga los valores
de la propiedad .name y añade al valor de .name el string ' (Visitado)'
cuando el valor de la propiedad isVisited = true.
*/

const cities = [
	{isVisited:true, name: 'Tokyo'},
	{isVisited:false, name: 'Madagascar'},
	{isVisited:true, name: 'Amsterdam'},
	{isVisited:false, name: 'Seul'}
]

const nombres = cities.map(objeto => {
  if (objeto.isVisited==true) {
    return 'Visitado'
  } else {
    return objeto.name
  }
})
console.log(nombres)