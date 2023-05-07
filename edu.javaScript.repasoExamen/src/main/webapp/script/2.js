/**
 * TEORÍA - Tipos de datos y estrategias de consulta
 */

 function pruebaTypeOf(){
	 let variable1 = 10;
	 let variable2 = 5.3;
	 
	 console.log("pruebaTypeOf" + typeof variable1);
	 console.log("pruebaTypeOf" + typeof variable2);
 }
 
 function pruebaBoolean(){
	 let es = true;
	 console.log("pruebaBoolean" + typeof es);
	 console.log("pruebaBoolean" + es);
 }
 
 function pruebaNumber(){
	 let variable1 = 10;
	 let variable2 = 5.3;
	 
	 console.log("pruebaNumber" + typeof variable1);
	 console.log("pruebaNumber" + typeof variable2);
 }
 
 function pruebaBigInt(){
	 let numeroGrande = 4567891324657987654;
	 let numeroGrandeCasteado = BigInt(987654321654987654);

	 console.log("pruebaBigInt" + typeof (numeroGrande));
	 console.log("pruebaBigInt" + numeroGrande);
	 console.log("pruebaBigInt" + typeof (numeroGrandeCasteado));
	 console.log("pruebaBigInt" + numeroGrandeCasteado);
 }
 
 function pruebaString(){
	 let texto = "Soy un string";

	 console.log("pruebaString" + typeof (texto));

	 console.log("pruebaString" + texto);
 }
 
 function pruebaUndefined(){
	 let variableVacia;
	 console.log("pruebaUndefined" + variableVacia);

	 console.log("pruebaUndefined" + typeof (variableVacia));
 }
 
 function pruebaNull(){
	 let nulo = null;
	 console.log("pruebaNull" + nulo);
	 console.log("pruebaNull" + typeof (nulo));
 }
 
 function pruebaObject(){
	 let Objeto = new Object();


	 console.log("pruebaObject" + Objeto);

	 function coche(marca, modelo, anioFabricacion) {
		 this.marca = marca;
		 this.modelo = modelo;
		 this.anioFabricacion = anioFabricacion;
	 }
	 var Vehiculo = new coche('Honda', 'Civic', 2010);

	 console.log("pruebaObject" +(Vehiculo instanceof coche));
	 console.log("pruebaObject" + (Vehiculo instanceof Object));
	 console.log("pruebaObject" + Vehiculo);
	 console.log("pruebaObject" + Vehiculo.marca);
 }
 
 function creaObjetoEjercicio(){
	 function alumno(nombre, apellidos, edad){
		 this.nombre = nombre;
		 this.apellidos = apellidos;
		 this.edad = edad;
	 }
	 
	 let yo = new alumno("Francisco", "Gallego Dorado", 19);
	 console.log(yo);
	 console.log(typeof yo)
	 console.log(yo instanceof Object);
	 console.log(yo instanceof alumno);
	 console.log(yo.nombre);
	 console.log(yo.apellidos);
	 console.log(yo.edad);
 }
 
 