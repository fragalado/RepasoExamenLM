/**
 * TEORÍA - Array
 */

 // Definicion array
 let alumnos = ["Francisco", "Daniel", "Isidro", "Jose"];
 
 // Acceso a las posiciones
 console.log("Posicion 0 de alumnos: " + alumnos[0]);
 
 // Acceso a un caracter
 console.log("Caracter de la posicion 0 de alumnos: " + alumnos[0].charAt(2));
 console.log("Caracter de la posicion 0 de alumnos: " + alumnos[0][2]);
 
 // Array con varios tipos de datos
 let array = [123, "Francisco", true];
 
 console.log("Posicion 0 de array: " +array[0]);
 // ERROR console.log("Caracter de la posicion 0 de array: " + array[0].charAt(2));
 console.log("Caracter de la posicion 0 de alumnos: " + array[0][2]);
 console.log("Posicion 1 de array: " +array[1]);
 console.log("Posicion 2 de array: " +array[2]);
 // ERROR console.log("Caracter de la posicion 2 de alumnos: " + array[2].charAt(2));
 console.log("Caracter de la posicion 2 de alumnos: " + array[2][2]);