console.log("Operadores Unarios\n"); 
 
console.log("\ndelete\n")

x = 42;
var y = 43;
var miObj = new Number();
miObj.h = 4;   


console.log('delete x        ->',delete x)
console.log('delete y        ->',delete y)
console.log('delete Math.PI  ->',delete Math.PI)
console.log('delete miObj.h  ->',delete miObj.h)
console.log('delete miObj    ->',delete miObj)

console.log("\nBorrar de array\n")


var arboles = new Array("secoya", "laurel", "cedro", "roble", "arce");
delete arboles[3];

console.log('var arboles = new Array("secoya", "laurel", "cedro", "roble", "arce");');
console.log('delete arboles[3];')
console.log(arboles)


console.log("\ntypeof\n")

var miFuncion = new Function("5 + 2");
var forma = "redonda";
var largo = 1;
var hoy = new Date();

typeof miFuncion; // devuelve "function"
typeof forma;     // devuelve "string"
typeof largo;     // devuelve "number"
typeof hoy;       // devuelve "object"
typeof noExiste;  // devuelve "undefined"
typeof true; 	  // devuelve "boolean"
typeof null;      // devuelve "object"

console.log("typeof miFuncion -> ",typeof miFuncion);
console.log("typeof forma     -> ",typeof forma) 
console.log("typeof largo     -> ",typeof largo)     
console.log("typeof hoy       -> ",typeof hoy)       
console.log("typeof noExiste  -> ",typeof noExiste)  
console.log("typeof true      -> ",typeof true) 	  
console.log("typeof null      -> ",typeof null)


console.log("\nvoid\n")

function test(){
	console.log("TEST TEST TES ")
}
console.log("void(0)",void(0))
console.log("void(0)",void(test()))


console.log("-------------------------------------------------------")
console.log("\n* Operador in\n")
console.log("-------------------------------------------------------")

console.log('var arboles = new Array("secoya", "laurel", "cedro", "roble", "arce");')
console.log('0 in arboles;        // devuelve true')
console.log('3 in arboles;        // devuelve true')
console.log('6 in arboles;        // devuelve false')
console.log('"laurel" in arboles; // devuelve false (Se debe especificar el nro de índice,')
console.log('                     // no el valor contenido en ese índice)')
console.log('"length" in arboles; // devuelve true (length es una propiedad del Array)')



var arboles = new Array("secoya", "laurel", "cedro", "roble", "arce");

0 in arboles;        // devuelve true
3 in arboles;        // devuelve true
6 in arboles;        // devuelve false
"laurel" in arboles; // devuelve false (Se debe especificar el nro de índice,
                     // no el valor contenido en ese índice)
"length" in arboles; // devuelve true (length es una propiedad del Array)


// Objetos predefinidos

"PI" in Math;          // devuelve true
var miCadena = new String("coral");
"length" in miCadena;  // devuelve true


// Objetos creados

var miCoche = {marca: "Honda", modelo: "Accord", fecha: 1998};

"marca" in miCoche;  // devuelve true
"modelo" in miCoche; // devuelve true

 