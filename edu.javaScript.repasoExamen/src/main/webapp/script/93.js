/**
 * TEORÍA - Subclases
 */

 class Animal{
	 constructor(nombre){
		 this.nombre = nombre;
	 }
	 
	 especie(){
		 console.log(this.nombre + "Animal");
	 }
 }
 
 class Perro extends Animal{
	 especie(){
		 console.log(this.nombre + "Perro");
	 }
 }
 
 let a = new Animal("pepe");
 let p = new Perro("Adda");
 console.log(a);
 console.log(p);
 a.especie();
 p.especie();