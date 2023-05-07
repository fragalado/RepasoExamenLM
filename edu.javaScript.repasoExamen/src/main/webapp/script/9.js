/**
 * TEORÍA - Objeto Date
 */

 let fecha1 = new Date();
 let fecha2 = new Date(0);
 
 console.log("Fecha 1: " + fecha1);
 console.log("Fecha 1 toLocaleDateString: " + fecha1.toLocaleDateString());
 console.log("Fecha 1 getMilliseconds: " + fecha1.getMilliseconds());
 console.log("Fecha 1 getTime: " + fecha1.getTime());
 console.log("Fecha 2: " + fecha2);
 
 
 // fecha1 está en gmt+2, si queremos obtener gmt+1:
 let fecha3 = new Date(fecha1.getTime() - 1*60*60*1000);
 console.log("Fecha 3 gmt+1: " + fecha3);
 
 
 
 
 
 // --------- Ejercicio ---------
 let enero1970 = new Date(0);
 
 // Añade 24 horas a enero1970
 enero1970.setTime(enero1970.getTime() + 24*60*60*1000)
 console.log("24 horas mas: " + enero1970);
 
 // Resta 24 horas a enero1970
 enero1970.setTime(enero1970.getTime() - 24*60*60*1000)
 console.log("24 horas menos: " + enero1970);
 
 
 // Crea fecha con Date.parse
 let fechaString = new Date("2023-02-01");
 let date = new Date(Date.parse("2012-01-26T13:51:50.417-07:00"));
 console.log("Fecha pasando un string: " + fechaString);
 console.log("Fecha pasando un string 2: " + date);
 
 // Crea fecha con parametros
 let fechaParams = new Date(2023, 2, 1);
 console.log("Fecha pasando parametros: " + fechaParams);
 
 