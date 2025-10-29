//2.1 Inserta dinamicamente en un html un div vacio con javascript.
const nuevoDiv1 = document.createElement("div")
document.body.appendChild(nuevoDiv1)

//2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
const nuevoDiv2 = document.createElement("div")
document.body.appendChild(nuevoDiv2)    
const nuevoP1 = document.createElement("p")
nuevoDiv2.appendChild(nuevoP1)

//2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
const nuevoDiv3 = document.createElement("div")
document.body.appendChild(nuevoDiv3)    
for(i = 0; i < 7; i++){
    const nuevoP2 = document.createElement("p")
    nuevoDiv3.appendChild(nuevoP2)
}

//2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
const nuevoP3 = document.createElement("p")
document.body.appendChild(nuevoP3)
nuevoP3.textContent="Soy dinámico!"

//2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
const h2 = document.querySelector("h2.fn-insert-here")
h2.textContent = "Wubba Lubba dub dub"

//2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array. const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const ul = document.createElement("ul")
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter']
for(const apps1 of apps){
   const li = document.createElement("li")
   li.textContent=apps1
   ul.appendChild(li)
}
document.body.appendChild(ul) 

//2.7 Elimina todos los nodos que tengan la clase .fn-remove-me
const clases1 = document.querySelectorAll(".fn-remove-me")
for(const clases2 of clases1){
    clases2.remove()
}
//2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.	Recuerda que no solo puedes insertar elementos con .appendChild.
const div1 = document.querySelector("div")   
const nuevoP4 = document.createElement("p")
div1.append(nuevoP4)
nuevoP4.textContent="Voy en medio!"

//2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here
const div2 = document.querySelectorAll(".fn-insert-here")
const nuevoP5 = document.createElement("p")
for(const div22 of div2){
    div22.append(nuevoP5)
    nuevoP5.textContent="Voy dentro!"
}

