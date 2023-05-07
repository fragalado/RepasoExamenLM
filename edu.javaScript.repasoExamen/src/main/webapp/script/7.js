/**
 * TEORÍA - Conversión entre string y number
 */

function ejemplo1() {
	let num1 = "2";
	let num2 = "3";
	let suma = num1 + num2;
	console.log(suma);
}

function ejemplo2() {
	let num1 = 2;
	let num2 = "3";
	let suma = num1 + num2;
	console.log(suma);
}

function ejemplo3() {
	let num1 = "7";
	let num2 = "5";
	let operacion = Number(num1) + Number(num2);
	console.log(operacion);
}

function ejemplo4() {
	let texto = "No soy un número";
	let conversion = Number(texto);
	console.log(typeof (conversion) + " " + conversion);
}

function ejemplo5(){
	let numero = 8;
	let texto1 = numero.toString();
	let texto = String(numero);
	console.log(typeof (texto));
	console.log(typeof (texto1));
}

// Ejemplo de: TEORÍA - Operadores: incremento, decremento, exponenciación y asignación.
function ejemplo6(){
	let a = 3;
	console.log(a **= 2);
	console.log(a **= 0);
	console.log(a **= 'hello');
}

// Ejemplo de: TEORÍA - Operadores de comparación
function ejemplo7(){
	function coche(marca, modelo, anioFabricacion) {
		this.marca = marca;
		this.modelo = modelo;
		this.anioFabricacion = anioFabricacion;
	}
	var Vehiculo = new coche('Honda', 'Civic', 2010);
	var Vehiculo1 = new coche('Honda', 'Civic', 2010);
	
	console.log(Vehiculo == Vehiculo1);
	console.log(Vehiculo === Vehiculo1);
	console.log(2 == '2');
	console.log(2 === '2');
}