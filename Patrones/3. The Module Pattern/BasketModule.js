var BasketModule = (function () {
 
  // privates
  var basket = [];
  function doSomethingPrivate() {}
 
  function doSomethingElsePrivate() {}
 
  // Return an object exposed to the public
  return {
    addItem: function( values ) {
      basket.push(values);
    },
 
    getItemCount: function () {
      return basket.length;
    },
 
    doSomething: doSomethingPrivate,
    getTotal: function () {
      var q = this.getItemCount(),
          p = 0;
      while (q--) {
        p += basket[q].price;
      }
      return p;
    }
  };
})();

BasketModule.addItem({
  item: "bread",
  price: 0.5
});
 
BasketModule.addItem({
  item: "butter",
  price: 0.3
});
 
console.log( BasketModule.getItemCount() );
console.log( BasketModule.getTotal() );
console.log( BasketModule.basket );
try {
    console.log( basket );
}
catch(err) {
    console.log(err.message);
}


