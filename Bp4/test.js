 
/*

	\\192.168.5.230\TarjetasDeCredito\Promociones\DEV\Out\

*/

var url = "http://localhost:3333/api/conciliaciones/movPresentados/export";

var page = require('webpage').create();
page.onError = function(msg, trace) {
  //prevent js errors from showing in page.content
  return;
};
page.open(url, function () {
     var content = page.content;
	console.log('Content: ' + content);
  
    phantom.exit();
});

 