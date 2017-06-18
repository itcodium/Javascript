## Modo de uso:

1. descargar el repositorio
2. En cada carpeta hay un archivo de test.bat
3. Ejecutar el test.bat para ver el contenido de cada archivo y el resultado por consola.


Para ejecutar los archivos javascripts se utiliza phantomjs Link: http://phantomjs.org/
	
	- Ejecucion
		
		En cada carpeta hay un archivo **test.bat** que se encarga de ejecutar los ejemplo.
		

		**Contenido del archivo**

		cls
		"..\..\phantomjs\phantomjs.exe" "..\..\phantomjs\RunTest.js" "ObjectCreation.js"
		@pause

		**RunTest.js** archivo javascript que recibe por argumento el nombre del archivo a ejecutar, por ejemplo para este caso es **ObjectCreation.js**



Los ejemplos estan basados en:

https://addyosmani.com/resources/essentialjsdesignpatterns/book/#constructorpatternjavascript
