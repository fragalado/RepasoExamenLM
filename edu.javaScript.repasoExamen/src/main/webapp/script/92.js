/**
 * TEORÍA - Métodos estáticos
 */

 class Punto{
	 
	 // Constructor
	 constructor(x, y){
		 this.x = x;
		 this.y = y;
	 }
	 
	 // Métodos
	 static distancia(a, b){
		 const dx = a.x - b.x;
		 const dy = a.y - b.y;
		 
		 return Math.sqrt(dx*dx + dy*dy);
	 }
 }
 
 const p1 = new Punto(5,5);
 const p2 = new Punto(10,10);
 console.log(p1);
 console.log(p2);
 console.log(Punto.distancia(p1,p2));