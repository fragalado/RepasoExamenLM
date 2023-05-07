/**
 * EJERCICIO - Ejemplos propiedades document
 */

// Cambia el color de fondo
 function pruebaBgColor(){
	 let color = "ff0000";
	 
	 document.bgColor = color;
 }
 
 // Cambia el titulo de la pagina
 function pruebaTitle(){
	 let texto = "prueba cambia titulo";
	 
	 document.title = texto;
 }
 
 // Obtiene el dominio/enlace/ip
 function pruebaDomain(){
	 let dominio  =document.domain;
	 
	 document.write("El dominio es: " + dominio);
 }
 
 // Obtiene la URL completa
 function pruebaURL(){
	 let url = document.URL;
	 document.write("La ubicacion del documento es: " + url);
 }
 
 // Devuelve fecha/hora de la ultima modificación del doc html
 function pruebaLastModified(){
	 alert(document.lastModified);
 }
 
 // Muestra por pantalla la URL del documento que se está visualizando, LO MISMO QUE URL
 function pruebaLocation(){
	 alert(document.location);
 }
 
 //Una alerta con la URL de la página de la que viene el usuario
 function pruebaReferrer(){
	 alert(document.referrer);
 }