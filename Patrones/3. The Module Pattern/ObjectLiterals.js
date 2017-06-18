
var myObjectLiteral = {

    variableKey: "Hello World",

    functionKey: function () {
      return this.variableKey;
    }
};

console.log(myObjectLiteral.functionKey())