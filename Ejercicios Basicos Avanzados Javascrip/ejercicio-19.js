/* Mixed For...of e includes: Usa un bucle for...of para recorrer todos los juguetes y elimina los que incluyan la palabra gato (también podéis crear uno nuevo con solo los que NO incluyan esa palabra). */
const toys = [
    {id: 5, name: 'Transformers'},
    {id: 11, name: 'LEGO'},
    {id: 40, name: 'FurReal Friends gato interactivo'},
    {id: 23, name: 'Hot Wheels'},
    {id: 40, name: 'Rascador de gato'},
    {id: 60, name: 'Nerf Blaster'},
    {id: 71, name: 'Sylvanian Families - Familia gato'}
];

for (const objeto of toys) {
  if(objeto.name.includes("gato")==true){
    console.log(objeto.id,objeto.name)
    const idElimina=objeto.id
    const index = toys.findIndex(objeto => objeto.id === idElimina)
   toys.splice(index,1)
  }

}
console.log(toys)