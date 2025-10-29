/*Contador de repeticiones: Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.
Por ejemplo, que devuelva: code:4, repeat: 1, eat: 1,...
Podéis conformar el formato que queráis para la devolución del resultado siempre y cuando sea claro.
 */
const words = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code'
]
n=0
contador=0
const cuentaWord =[]
function repeatCounter(list) {
  // Completar
        for (i=0; i < list.length; i++) {
          const elemen=list[i] //asigno el elemento del primer indice a una variable elemen para irla comparando con los otros elementos
         for (j=contador; j < list.length; j++){ //este segundo for es para ir recorriendo el array y comparando con la variable elemen
            if (elemen==list[j]){
              n = n + 1 //suma el numero de veces que se repite el elemento
            }
          } 
            if(list.length==2){ //cuando la longitud del array llega a 2 es porque esta en la ronda fina y se debe adicionar ese primer elemento al nuevo array
                    cuentaWord.push(list[0]+":"+n)
            }else{
                if (i!==list.length){ //cuando aun no esta en la ronda final y se necesita ir llenando el nuevo array  siempre que i sea diferente de la longitud del array original cuando aun no es su longitd igual a 2
                    cuentaWord.push(list[i]+":"+n)
                }
            }
           for(k=0; k < list.length; k++){//recorre el array original y va eliminando las conincidencias para ir descartandolas y no volver a preguntar por esos elementos que ya se contaron 
            if (elemen==list[k]){
              list.splice(k,1)
            }
           }   
            i=0 //se encera la letra i para ir recorriendo el primer array
            n=0 //se encera el contador de elementos para ir sabiendo cuantas veces se repite un elemento 
            contador = i + 1 //se le da un valor inicial al contador que sera el que incializa el for j para el recorrido de la comparacion
        }
      return cuentaWord
}

console.log("Array Principal",words)
console.log("El número de veces de palabras repetidas en el Array",repeatCounter(words))

