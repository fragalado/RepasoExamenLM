/**
 * TEORÍA - Introducción a formularios
 */

 function guardar(){
	 // 2 formas para leer de un formulario
	 let mensaje = document.getElementsByName("tuMensaje")[0].value;
	 let mensaje2 = document.formularioEntrada.tuMensaje.value;
	 
	 document.write("Se guarda el mensaje " + mensaje);
	 document.write("<br>Se guarda el mensaje " + mensaje2);
 }
 
 /**
  * EJERCICIO - Formularios Introducción
  */
 
 /*
  *Realiza un programa en el cual se solicite al usuario que introduzca un valor mediante un form. 
  *A este valor se calculará el 30% y se mostrará por la pantalla del navegador y por el log de la consola.
  */
 
 function calculaValorForm(){
	 let valor = Number(document.getElementsByName("tuValor")[0].value);
	 valor *= 0.3;
	 console.log("Tipo: " + typeof valor);
	 console.log("Valor: " + valor)
 }
 
 
 /**
  * TEORÍA - Pasar el form a la función
  */
 
 function evaluar(form){
	 let resultado = form.tuValor.value;
	 form.tuResultado.value = Number(eval(resultado));
 }
 
 
 /**
  * EJERCICIO - Calculadora falsa
  */
 
 function calculadoraFalsa(form){
	 let resultado = form.operacionCalculadora.value;
	 form.resultadoCalculadora.value = eval(resultado);
 }
 
 
 /**
  * EJERCICIO - Calculadora peso corporal
  */
 
 function calculadoraPeso(form){
	 let sexo = form.sexoUsu.value;
	 let edad = Number(form.edadUsu.value);
	 let altura = Number(form.alturaUsu.value);
	 
	 if(sexo == "hombre")
	 	form.resultadoPeso.value = 50+((altura-150)/4)*3 + (edad - 20)/4;
	 else
	 	form.resultadoPeso.value = (50+((altura-150)/4)*3 + (edad - 20)/4)*0.9;
 }