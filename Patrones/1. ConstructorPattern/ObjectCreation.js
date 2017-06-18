
var newObject1 = {};
var newObject2 = Object.create( Object.prototype );
var newObject3 = new Object();


// ECMAScript 3 compatible approaches

// 1. Dot syntax
newObject1.someKey = "Hello World";
var value = newObject1.someKey;
 
// 2. Square bracket syntax
newObject2["someKey"] = "Hello World";
var value = newObject2["someKey"];

// ECMAScript 5 only compatible approaches
// For more information see: http://kangax.github.com/es5-compat-table/
 
// 3. Object.defineProperty
 
// Set properties
Object.defineProperty( newObject3, "someKey", {
    value: "for more control of the property's behavior",
    writable: true,
    enumerable: true,
    configurable: true
});


console.log(JSON.stringify(newObject1));
console.log(JSON.stringify(newObject2));
console.log(JSON.stringify(newObject3));