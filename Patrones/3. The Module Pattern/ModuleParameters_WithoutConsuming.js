/*
Exports
This next variation allows us to declare globals without consuming them and could similarly support the concept of global imports seen in the last example.
*/
var myModule = (function ( jQ, _ ) {
 
    function privateMethod1(){
        jQ(".container").html("test");
    }
 
    function privateMethod2(){
      console.log( _.min([10, 5, 100, 2, 1000]) );
    }
    var module = {};
    module.publicMethod = function () {
         privateMethod1();
    };
    module.testUnderscore = function () {
         privateMethod2();
    };

    return module;

})( jQuery, _ );


myModule.publicMethod();
myModule.testUnderscore();