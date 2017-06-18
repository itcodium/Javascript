## Basic Constructors

**JavaScript doesn't support the concept of classes but it does support special constructor functions that work with objects**. By simply prefixing a call to a constructor function with the keyword "new", we can tell JavaScript we would like the function to behave like a constructor and instantiate a new object with the members defined by that function.

Inside a constructor, the keyword this references the new object that's being created. 



## Constructors With Prototypes

Functions, like almost all objects in JavaScript, contain a "prototype" object. When we call a JavaScript constructor to create an object, all the properties of the constructor's prototype are then made available to the new object.