#Tabla 3.1 Operadores de asignación

Nombre								 				Operador abreviado			Significado
Operadores de asignación								x   = y		       			x = y
Asignación de adición								    x += y		                x = x + y
Asignación de sustracción							    x  -= y		                x = x - y
Asignación de multiplicación						    x *= y		                x = x * y
Asignación de división								    x  /= y		                x = x / y
Asignación de resto									    x %= y		                x = x % y
Asignación de exponenciación					        x **= y	                    x = x ** y
Asignación de desplazamiento a la izquierda				x <<= y	                    x = x << y
Asignación de desplazamiento a la derecha				x >>= y	                    x = x >> y
Asignación de desplazamiento a la derecha sin signo		x >>>= y	                x = x >>> y
Asignación AND binaria									x &= y		                x = x & y
Asignación XOR binaria									x ^= y		                x = x ^ y
Asignación OR binaria									x |= y		                x = x | y


Referencia


#Operadores lógicos

Los operadores lógicos son comúnmente utilizados con valores booleanos; estos operadores devuelven un valor booleano. Sin embargo, los operadores && y || realmente devuelven el valor de uno de los operandos, asi que si estos operadores son usados con valores no booleanos, podrían devolveran un valor no booleano. En la siguiente tabla se describen los operadores lógicos:

#Operadores de cadenas de caractere
Además de los operadores de comparación, que pueden ser usados en cadenas de caracteres, el operador de concatenación (+) une dos valores de tipo String, devolviendo otro String correspondiente a la unión de los dos operandos.

#Operador condicional (ternario)
El operador condicional es el único operador de JavaScript que necesita tres operandos. El operador asigna uno de dos valores basado en una condición.

#Operador coma

El operador coma (,) simplemente evalúa ambos operandos y retorna el valor del último. Este operador es ante todo utilizado dentro de un ciclo for, permitiendo que diferentes variables sean actualizadas en cada iteración del ciclo.

	for (var i = 0, j = 9; i <= j; i++, j--)
	  console.log("a[" + i + "][" + j + "]= " + a[i][j]);
  

https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_Operators

#Pendiente de ver...
https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_Operators#Operadores_unarios
