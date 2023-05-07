/**
 * TEORÍA - Operadores lógicos y especiales
 */

var a1 = true && true;	console.log("a1: " + a1);
var a2 = true && false; console.log("a2: " + a2);
var a3 = false && true; console.log("a3: " + a3);
var a4 = false && (3 == 4); console.log("a4: " + a4);
var a5 = 'Cat' && 'Dog'; console.log("a5: " + a5);
var a6 = false && 'Cat'; console.log("a6: " + a6);
var a7 = 'Cat' && false; console.log("a7: " + a7);

var o1 = true || true; console.log("\n\no1: " + o1);
var o2 = false || true; console.log("o2: " + o2);
var o3 = true || false; console.log("o3: " + o3);
var o4 = false || (3 == 4); console.log("o4: " + o4);
var o5 = 'Cat' || 'Dog'; console.log("o5: " + o5);
var o6 = false || 'Cat'; console.log("o6: " + o6);
var o7 = 'Cat' || false; console.log("o7: " + o7);

var n1 = !true; console.log("n1: " + n1);
var n2 = !false; console.log("n2: " + n2);
var n3 = !'Cat'; console.log("n3: " + n3);
