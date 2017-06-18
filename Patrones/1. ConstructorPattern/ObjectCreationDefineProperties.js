 
var defineProp = function ( obj, key, value ){
  var config = {
    value: value,
    writable: true,
    enumerable: true,
    configurable: true
  };
  Object.defineProperty( obj, key, config );
};
 
var person = Object.create( Object.prototype );
 
defineProp( person, "car", "Delorean" );
defineProp( person, "dateOfBirth", "1981" );
defineProp( person, "hasBeard", false );
 

var driver = Object.create( person );
defineProp(driver, "topSpeed", "100mph");
console.log( driver.dateOfBirth );
console.log( driver.topSpeed );

console.log("person-> ",JSON.stringify(person));
console.log("driver-> ",JSON.stringify(driver));

// 4. Object.defineProperties
// Set properties
var newObject={};
Object.defineProperties( newObject, {
 
  "someKey": {
    value: "Hello World",
    writable: true
  },
 
  "anotherKey": {
    value: "Foo bar",
    writable: false
  }
 
});
 
console.log("newObject-> ",JSON.stringify(newObject));
 