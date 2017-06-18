var fs = require('fs');

var system = require('system');
var args = system.args;

if (args.length === 1) {
  console.log('Try to pass some arguments when invoking this script!');
  phantom.exit();
} 

var content = fs.read(args[1]);
console.log("")
console.log("------------------------    File   -------------------------------------");
console.log(content);
console.log("------------------------ Resultado -------------------------------------");
console.log("")
eval(content)
console.log("")
console.log("------------------------    Fin    -------------------------------------");
phantom.exit();