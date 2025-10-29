const jedi = {nombre: "Luke Skywalker", edad: 19};

// Tu código para cambiar la edad aquí... 

jedi.edad=25

const nombre= "Leia"
const apellido= "Organa"
const edad= 20

console.log("Soy", nombre +" " + apellido +" tengo",  edad +" años y soy una princesa de Alderaan.")

const sable1 = {nombre: "Shoto de Yoda", precio: 1500}
const sable2 = {nombre: "Sable de Darth Vader", precio: 2000}
const suma = sable1.precio + sable2.precio
console.log("El precio total por los dos sables es = ", suma)

let precioBaseGlobal = 10000
// Cambia el precio base en esta linea modificando la variable
precioBaseGlobal = 25000

const nave1 = {nombre: "Ala-X", precioBase: 50000, precioFinal: 60000};
const nave2 = {nombre: "Halcón Milenario", precioBase: 70000, precioFinal: 80000};

// Tu código para actualizar el precio final de cada nave aquí...
const preAnterior1 = nave1.precioFinal
const preAnterior2 = nave2.precioFinal
precio1 = nave1.precioFinal + precioBaseGlobal
precio2 = nave2.precioFinal + precioBaseGlobal
nave1.precioFinal=precio1
nave2.precioFinal=precio2
console.log("Precio Final Anterior Nave 1 = ", preAnterior1 +" Precio Final Actualizado Nave 1 = ", nave1.precioFinal)
console.log("Precio Final Anterior Nave 2 = ", preAnterior2 +" Precio Final Actualizado Nave 1 = ", nave2.precioFinal)
