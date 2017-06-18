var myRevealingModule1 = (function () {
 
        var privateVar = "Ben Cherry",
            publicVar = "Hey there!";
 
        function privateFunction() {
            console.log( "Name:" + privateVar );
        }
 
        function publicSetName( strName ) {
            privateVar = strName;
        }
 
        function publicGetName() {
            privateFunction();
        }
 
        // Reveal public pointers to
        // private functions and properties
 
        return {
            setName: publicSetName,
            greeting: publicVar,
            getName: publicGetName
        };
 
    })();

myRevealingModule1.setName( "Paul Kinlan" ); 
myRevealingModule1.getName()

var myRevealingModule2 = (function () {
 
        var privateCounter = 0;
 
        function privateFunction() {
            privateCounter++;
        }
 
        function publicFunction() {
            publicIncrement();
        }
 
        function publicIncrement() {
            privateFunction();
        }
 
        function publicGetCount(){
          return privateCounter;
        }
 
        // Reveal public pointers to
        // private functions and properties
 
       return {
            start: publicFunction,
            increment: publicIncrement,
            count: publicGetCount
        };
 
    })();
 
myRevealingModule2.start();
var count=myRevealingModule2.count();

console.log("count",count)

