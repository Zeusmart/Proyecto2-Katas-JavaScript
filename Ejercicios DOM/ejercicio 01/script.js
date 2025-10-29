//1.1 Usa querySelector para mostrar por consola el botón con la clase .showme
const boton = document.querySelector(".showme")
console.log(boton)

//1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado
const Titulo = document.querySelector("#pillado")
console.log(Titulo)

//1.3 Usa querySelector para mostrar por consola todos los p
const parrafos = document.querySelectorAll("p")
for(const parrafo1 of parrafos){
    console.log(parrafo1.textContent)
}
//1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon
const clases = document.querySelectorAll(".pokemon")
for(const clase of clases){
    console.log(clase.textContent)
}
//1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo data-function="testMe".
const datas = document.querySelectorAll("span")
for(const data of datas){
    console.log(data.textContent)
}
//1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo data-function="testMe".
const datas1 = document.querySelectorAll("span")
let conta=0
for(const data of datas1){
    conta=conta+1
    if(conta==3){
    console.log(data.textContent)
    }
 }
