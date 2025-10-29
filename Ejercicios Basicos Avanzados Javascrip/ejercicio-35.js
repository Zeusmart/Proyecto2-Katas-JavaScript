/*Desarrolla una función que busque en un array de objetos representando mutantes si existe alguno con un poder específico y retorne un mensaje indicando si fue encontrado o no.
Considera el caso de múltiples mutantes con el mismo poder.
 */

const mutants = [
  { name: 'Wolverine', power: 'regeneration' },
  { name: 'Magneto', power: 'magnetism' },
  { name: 'Professor X', power: 'telepathy' },
  { name: 'Jean Grey', power: 'telekinesis' },
  { name: 'Rogue', power: 'power absorption' },
  { name: 'Storm', power: 'weather manipulation' },
  { name: 'Mystique', power: 'shape-shifting' },
  { name: 'Beast', power: 'superhuman strength' },
  { name: 'Colossus', power: 'steel skin' },
  { name: 'Nightcrawler', power: 'teleportation' }
];
let encontrado=""
let nombre=""
let poder=""
a="Storm"
b="weather manipulation"
function findMutantByPower(mutant, power) {
  // insert code
  for(i=0;i<mutants.length;i++){

    if(mutants[i].name==a){
      console.log("encontrado")
      encontrado="SI"
      nombre=mutants[i].name
      poder=mutants[i].power
    }

  }
  return encontrado,poder
}

console.log(findMutantByPower(a,b))

