//1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el evento click que ejecute un console log con la información del evento del click
	const miBoton = document.createElement("button") 
	const miClase = document.querySelector(".click")   
    const miBody = document.querySelector("Body")      
    miBoton.id="btnToClick"
    miBoton.innerText = 'Haz clic aquí'
    miBoton.addEventListener('click', function() {console.log("Haz hecho clic en el boton")})
    miBody.insertBefore(miBoton, miClase.nextSibling);

//1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.
	const inputElement1 = document.querySelector(".focus")   

    inputElement1.addEventListener('focus', function() {inputElement1.style.backgroundColor = "yellow"})
    
//1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.
	const inputElement2 = document.querySelector(".value")   
    inputElement2.addEventListener('input', function() {inputElement2.style.backgroundColor = "green"})

//console.log(miClase2)
