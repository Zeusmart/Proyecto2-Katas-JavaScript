/*Utiliza un bucle para encontrar la serie de dibujos animados más antigua en el array y guarda su nombre en una variable. */
const cartoons = [
  { name: 'Bugs Bunny', debut: 1938 },
  { name: 'SpongeBob SquarePants', debut: 1999 },
  { name: 'Tom and Jerry', debut: 1940 },
  { name: 'Mickey Mouse', debut: 1928 },
  { name: 'Scooby-Doo', debut: 1969 },
  { name: 'The Flintstones', debut: 1960 },
  { name: 'Batman: The Animated Series', debut: 1992 },
  { name: 'The Simpsons', debut: 1989 },
  { name: 'Pokémon', debut: 1997 },
  { name: "Dexter's Laboratory", debut: 1996 }
];

// Añade tu código de bucle aquí
let aux=1
for (i=0;i<cartoons.length;i++) {
    for(j=aux;j<cartoons.length;j++){
     if(cartoons[i].debut<cartoons[j].debut){
        masAntigua=cartoons[i]
        if(j==cartoons.length-1){
            i=cartoons.length //si se compara con el ultimo elemento y no hay mas bajo que el sale del for i
        }
    }else{
         masAntigua=cartoons[j] //si al comparar no es el mas bajo salta al final del for j para pasar a preguntar al siguiente 
         i=j-1
         aux=j+1
         j=cartoons.length 
    }
    }
  }

  console.log(masAntigua)