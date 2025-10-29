//1.1 Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los paises. const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
const ul = document.createElement("ul")
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
for(const countries1 of countries){
   const li = document.createElement("li")
   li.textContent=countries1
   ul.appendChild(li)
   document.body.appendChild(ul) 
}

//1.2 Elimina el elemento que tenga la clase .fn-remove-me.
const claseRemove = document.querySelector(".fn-remove-me")
 claseRemove.remove()

//1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere". const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const div1 = document.querySelector("div") 
const ul1 = document.createElement("ul")
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
for(const cars1 of cars){
   const li = document.createElement("li")
   li.textContent=cars1
   ul1.appendChild(li)
   div1.append(li)
}

/*1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento h4 para el titulo y otro elemento img para la imagen. const countries = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];*/
const countries1 = [
	{title: 'Random 1', imgUrl: 'https://picsum.photos/300/200?random=1'},
	{title: 'Random 2', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random 3', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random 4', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random 5', imgUrl: 'https://picsum.photos/300/200?random=5'}
	]
for(const countries2 of countries1){
	const div3 = document.createElement("div") 
	const h4 = document.createElement("h4") 
	const img = document.createElement("img") 
   h4.title=countries2.title
   img.src=countries2.imgUrl
   div3.append(h4)
   div3.append(img)
   console.log(countries2.imgUrl)
   document.body.appendChild(div3)
}

//1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último elemento de la serie de divs.
	const miBoton = document.createElement("button") 
	const div4 = document.querySelector("div") 
	const div5 = document.querySelectorAll("div") 
	miBoton.innerText = 'Haz clic aquí'
	miBoton.id = 'btn-generado'
	miBoton.className = 'btn-estilo'
	console.log(div5[5])
	miBoton.addEventListener('click', function() {const divABorrar = div5[5]; divABorrar.remove()})
		div4.append(miBoton)


//1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los divs que elimine ese mismo elemento del html.
const div6 = document.querySelectorAll("div") 
const divsArray = [...div6]
for(const todosLosDivs of div6){
	if(divsArray.indexOf(todosLosDivs)>0){
	const miBoton = document.createElement("button") 
	miBoton.innerText = 'Haz clic aquí para borrar este div'
	todosLosDivs.append(miBoton)
	console.log(divsArray.indexOf(todosLosDivs))
	miBoton.addEventListener('click', function() {const divABorrar = div6[divsArray.indexOf(todosLosDivs)]; divABorrar.remove()})
	}

}


