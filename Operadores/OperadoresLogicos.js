console.log("Operadores Logicos\n"); 

var a1 = true  && true
var a2 = true  && false
var a3 = false && true
var a4 = false && (3 == 4)
var a5 = "Cat" && "Dog"
var a6 = false && "Cat"
var a7 = "Cat" && false

console.log("Operador &&\n")

console.log('var a1 = true  && true     ->',a1)
console.log('var a2 = true  && false    ->',a2)
console.log('var a3 = false && true     ->',a3)
console.log('var a4 = false && (3 == 4) ->',a4)
console.log('var a5 = "Cat" && "Dog"    ->',a5)
console.log('var a6 = false && "Cat"    ->',a6)
console.log('var a7 = "Cat" && false    ->',a7)

var a1 = true  & true
var a2 = true  & false
var a3 = false & true
var a4 = false & (3 == 4)
var a5 = "Cat" & "Dog"
var a6 = false & "Cat"
var a7 = "Cat" & false

console.log("\nOperador &\n")

console.log('var a1 = true  & true     ->',a1)
console.log('var a2 = true  & false    ->',a2)
console.log('var a3 = false & true     ->',a3)
console.log('var a4 = false & (3 == 4) ->',a4)
console.log('var a5 = "Cat" & "Dog"    ->',a5)
console.log('var a6 = false & "Cat"    ->',a6)
console.log('var a7 = "Cat" & false    ->',a7)



console.log("\nOperador ||\n")
var o1 = true  || true;     // t || t devuelve true
var o2 = false || true;     // f || t devuelve true
var o3 = true  || false;    // t || f devuelve true
var o4 = false || (3 == 4); // f || f devuelve false
var o5 = "Cat" || "Dog";    // t || t devuelve "Cat"
var o6 = false || "Cat";    // f || t devuelve "Cat"
var o7 = "Cat" || false;    // t || f devuelve "Cat"

console.log('var o1 = true  || true; 	->',o1);    
console.log('var o2 = false || true; 	->',o2);        
console.log('var o3 = true  || false; 	->',o3);       
console.log('var o4 = false || (3 == 4);	->',o4);    
console.log('var o5 = "Cat" || "Dog"; 	->',o5);       
console.log('var o6 = false || "Cat"; 	->',o6);       
console.log('var o7 = "Cat" || false; 	->',o7);       



console.log("\nOperador |\n")
var o1 = true  | true;     // t || t devuelve true
var o2 = false | true;     // f || t devuelve true
var o3 = true  | false;    // t || f devuelve true
var o4 = false | (3 == 4); // f || f devuelve false
var o41 = false | (3 == 3); // f || f devuelve false
var o5 = "Cat" | "Dog";    // t || t devuelve "Cat"
var o6 = false | "Cat";    // f || t devuelve "Cat"
var o7 = "Cat" | false;    // t || f devuelve "Cat"

console.log('var o1 = true  | true; 	->',o1);    
console.log('var o2 = false | true; 	->',o2);        
console.log('var o3 = true  | false; 	->',o3);       
console.log('var o4 = false | (3 == 4);	->',o4);    
console.log('var o4 = false | (3 == 3);	->',o41);    
console.log('var o5 = "Cat" | "Dog"; 	->',o5);       
console.log('var o6 = false | "Cat"; 	->',o6);       
console.log('var o7 = "Cat" | false; 	->',o7); 