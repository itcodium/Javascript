var mySingleton = (function () {
    var instance;
 
    function init() {
      var privateVariable = "Im also private";
      var privateRandomNumber = Math.random();

      function privateMethod(){
          console.log( "I am private" );
      }

      return {
        // Public methods and variables
        publicProperty: "I am also public",
        publicMethod: function () {
          console.log( "The public can see me!" );
        },
        getRandomNumber: function() {
          return privateRandomNumber;
        }
      };
    };
 
  return {
     // Get the Singleton instance if one exists
    // or create one if it doesn't
    getInstance: function () {
 
      if ( !instance ) {
        instance = init();
      }
 
      return instance;
    }
  };
 
})();
 
// Usage:
 
var singleA = mySingleton.getInstance();
var singleB = mySingleton.getInstance();
console.log( singleA.getRandomNumber() === singleB.getRandomNumber() ); // true