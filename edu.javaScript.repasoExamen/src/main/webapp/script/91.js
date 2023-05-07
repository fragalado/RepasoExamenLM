/**
 * EJERCICIO - Repaso examen
 */

 function ejercicio1(){
	 /*
	 Genera la fecha y hora actual; y calcula a partir de esta las fechas y horas de tres usos horarios diferentes. 
	 Por último, calcula la fecha actual para el uso horario cero. Muestra por consola y en la vista todos los valores.
	 */
	
	let fechaActual = new Date(); // GMT +2
	let gmt1 = new Date(+fechaActual - 1*60*60*1000); // GMT +1
	let gmt0 = new Date(+fechaActual - 2*60*60*1000); // GMT +0
	let gmt_1 = new Date(fechaActual.getTime() - 3*60*60*1000); // GMT -1
	
	console.log("GMT+2: " + fechaActual);
	console.log("GMT+1: " + gmt1);
	console.log("GMT+0: " + gmt0);
	console.log("GMT+0: " + fechaActual.toUTCString());
	console.log("GMT-1: " + gmt_1);
	
 }
 
 function ejercicio2(){
	 /*
	 Solicita el nombre y los apellidos de una persona desde la vista y guárdalos en diferentes variables. 
	 Muestra un menú que te de dos opciones: 1, mostrar nombre; 2, mostrar apellidos. 
	 Solicita la opción deseada y en base a esta muestra por la vista el nombre o los apellidos.
	 */
	let nombre = prompt("Introduzca su nombre: ");
	
	while(nombre == "" || nombre == null){
		nombre = prompt("** Error: No se ha introducido una respuesta **\nIntroduzca su nombre: ");
	}
	
	let apellidos = prompt("Introduzca sus apelidos: ");
	
	while(apellidos == "" || apellidos == null){
		apellidos = prompt("** Error: No se ha introducido una respuesta **\nIntroduzca sus apelidos: ");
	}
	
	// Mostramos menu
	let opcion = Number(prompt("1. Mostrar nombre\n2. Mostrar apellidos"));
	
	while(isNaN(opcion) || opcion < 1 || opcion > 2){
		opcion = Number(prompt("** Error: No se ha introducido una opción válida **\n1. Mostrar nombre\n2. Mostrar apellidos"));
	}
	
	if(opcion == 1)
		console.log(nombre);
	else if(opcion == 2)
		console.log(apellidos);
	
 }
 
 function ejercicio3(){
	 alert("No hay nada");
 }
 
 function ejercicio4(){
	 alert("No hay nada"); 
 }
 
 function ejercicio5(){
	 /*
	 Muestra por consola el siguiente string:    La posada se llamana "El toro".   
	Consigue que se muestren las dobles comillas correctamente.
	Añade un un salto de línea después de la palabra posada.
	 */
	console.log("La posada\nse llamaba \"El Toro\"");
 }
 
 function ejercicio6(){
	 /*
	 Crea un programa que solicite dos números y devuelva el mayor de los dos en un elemento alert. 
	 Convierte los datos introducidos a números antes de comenzar a operar con ellos
	 */
	let numero1 = capturaNumero("Introduzca el primer numero: ");
	let numero2 = capturaNumero("Introduzca el segundo numero: ");
	
	console.log(numero1 > numero2 ? numero1:numero2);
	
	function capturaNumero(texto){
		let numero = Number(prompt(texto));
		
		while(isNaN(numero)){
			numero = Number(prompt("** Error: No se ha introducido el formato correcto **\n"+texto));
		}
		
		return numero;
	}
 }
 
 function ejercicio7(){
	 alert("No hay nada"); 
 }
 
 function ejercicio8(){
	 alert("No hay nada"); 
 }