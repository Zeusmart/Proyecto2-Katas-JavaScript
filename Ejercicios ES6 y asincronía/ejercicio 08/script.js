/* Accederemos a los datos de una API pública de Game Of Thrones, queremos un select con todos los nombres de los personajes para que cuando un usuario seleccione un nombre salga su imagen en el medio de la página.

Para obtener los datos con los que jugar necesitaremos estudiar la documentación de la API y buscar la url necesaria para los datos que queramos, para este paso os pedimos que de verdad os esforcéis buscándola en la documentación, queremos la url que me traiga los datos de todos los personajes de GOT, sin embargo, en la slide siguiente tendréis la url directa de esos datos.
URL de la documentación (para que indaguéis): https://thronesapi.com/
Esta sería la URL final (la que deberéis utilizar para vuestra petición):
https://thronesapi.com/api/v2/Characters

*/
fetch("https://thronesapi.com/api/v2/Characters")
    .then((result) =>result.json())
    .then((result) => {  
        const selector = document.querySelector("#character-list")
        const div = document.querySelectorAll("div.img")
        const imagen = document.createElement("img")
        for (const item of result) {
        const opcion = document.createElement("option")
        opcion.textContent = item.fullName
        selector.appendChild(opcion)
              } 
  selector.addEventListener('change', function() {
  const indiceSeleccionado = this.selectedIndex   // Obtener el índice de la opción seleccionada
  const textoSeleccionado = this.options[indiceSeleccionado].text // Obtener el texto opción seleccionada
  const opcion = result[indiceSeleccionado].imageUrl
  imagen.src = opcion
 //  div.appendChild(imagen)
   document.body.appendChild(imagen)
  console.log("Opción seleccionada (Texto):", textoSeleccionado)
         })
    })
        
       

        
