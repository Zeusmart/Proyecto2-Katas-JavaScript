/* Usa un for para remplazar todas las comidas que no sean veganas con las frutas del array de frutas.
Recuerda no usar frutas duplicadas.
Finalmente, imprime el array resultante.
 */
const fruits = ["Strawberry", "Banana", "Orange", "Apple"];

const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];
let j=0
for (i=0;i<foodSchedule.length;i++) {
      if(foodSchedule[i].isVegan==false){
        if(j<4){nuevoValor=fruits[j]}  
        foodSchedule[i].name=nuevoValor
        foodSchedule[i].isVegan=true
        j=j+1
    }
  }

  console.log(foodSchedule)