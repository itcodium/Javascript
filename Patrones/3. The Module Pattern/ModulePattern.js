/*
In object literal notation, an object is described as:

A set of comma-separated name/value pairs enclosed in curly braces ({}). Names inside the object may be either strings or identifiers that are followed by a colon. There should be no comma used after the final name/value pair in the object as this may result in errors.
*/
var myObjectLiteral = {

    variableKey: "Hello World",

    functionKey: function () {
      return this.variableKey;
    }
};

console.log(myObjectLiteral.functionKey())


