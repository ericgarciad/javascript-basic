 //Ejercicio 1. Mostrar por consola un 'Hola mundo' 
 console.log("Hola Mundo");


 //Ejercicio 2. Crear un alert que muestre tu nombre
 alert("Me llamo Eric García Domingo");


 //Ejercicio 3. Crea una variable que contenga tu nombre y otra que contenga tu apellido.
 let name = "Eric";
 let surName = "García";
 console.log(name + " " + surName);


 //Ejercicio 4. Crea dos variables con dos números y haz una suma entre ellos.
 let num1 = 46;
 let num2 = 4;
 console.log("La suma entre " + num1 + " y " + num2 + " es " + (num1 + num2));


 /*Ejercicio 5. Crea una variable nota_examen juntamente con un alert que nos diga si 
 el examen ha sido aprobado o no juntament con la nota.
 */
 function resultadoExamen() {

     let nota_examen = parseFloat(document.getElementById("resultat_nota_examen").value);

     if (nota_examen == NaN || isNaN(nota_examen) == true || nota_examen < 0 || nota_examen > 10) {
         alert("Error: Has introducido un valor nulo o incorrecto");
         return false;
     }

     if (nota_examen >= 0 && nota_examen < 5) {
         alert("Lo siento, has suspendido el examen con un " + nota_examen);
     } else {
         alert("¡Muy bien! Has aprobado el examen con un " + nota_examen);
     }

 }


 //Ejercicio 6. Reemplaza la palabra azul por la palabra verde del texto.
 var textCotxe = document.getElementById("textCotxe").innerHTML

 function canviarBlauPerVer() {

     let textCotxeVerd = textCotxe.replace("blau", "verd");
     document.getElementById("textCotxe").innerHTML = textCotxeVerd;
 }

 function canviarOperU() {

     let textOperU = textCotxe.replaceAll("o", "u");
     document.getElementById("textCotxe").innerHTML = textOperU;
 }


 /*Ejercicio 7. Dado el siguiente listado de objetos 'taula', 'cadira', 'ordinador', 'libreta'
 crea un bucle que muestre por pantalla cada objecto y su posición en el listado.
 */
 function mostrarListado() {
     let llistatObjectes = ["taula", "cadira", "ordinador", "llibreta"];
     let results = "";
     let i = 0;
     for (i in llistatObjectes) {
         results += "L'objecte " + '<span style="color:green">' + llistatObjectes[i] +
             '</span>' + " està a la posició " + '<span style="color:green">' +
             llistatObjectes.indexOf(llistatObjectes[i]) + '</span>' + '<br />';

         document.getElementById("listadoObjetos").innerHTML = results;
     }
 }


 /*Exercici 8. Crea una función llamada calculadora() que tenga como entrada los siguientes
 parámetros: operador, valor1 i valor2.
 Estructura la función que haga sumas, restas y multiplicaciones. 
 El resultado tendrá que ser mostrado por pantalla.

 Además, se añade la funcionalidad pedido en el Ejercicio 1 del Nivel2
 */
 function calculadora(operador, valor1, valor2) {

     //Recogemos los valores introducidos en el input de valor1, valor2 y de operador.
     valor1 = parseFloat(document.getElementById("valor1").value)
     operador = document.getElementById("operador").value
     valor2 = parseFloat(document.getElementById("valor2").value)
     let resultat = 0;

     //Comrpobamos que no dejemos ningun input vacío.
     if (valor1 == NaN || isNaN(valor1) == true || valor2 == NaN || isNaN(valor2) == true ||
         operador == null || operador == "") {
         alert("Error: Les caselles no poden estar buides");
         return false;
     }

     // En función del operador introducido, realizamos la operación
     if (operador == "+") {
         resultat = valor1 + valor2;
         document.getElementById("resultat").value = resultat;
     } else if (operador == "-") {
         resultat = valor1 - valor2;
         document.getElementById("resultat").value = resultat;
     } else if (operador == "*") {
         resultat = valor1 * valor2;
         document.getElementById("resultat").value = resultat;
     } else if (operador == "*") {
         resultat = valor1 * valor2;
         document.getElementById("resultat").value = resultat;
     } else if (operador == "/" && valor1 == 0 && valor2 == 0) {
         document.getElementById("resultat").value = "Resultado indefinido";
     } else if (operador == "/") {
         resultat = valor1 / valor2;
         document.getElementById("resultat").value = resultat;
     } else if (operador != "+" || operador != "-" || operador != "*" || operador != "/") {
         alert("No ha introduït un operador correcte");
     } else {
         alert("Revisa les dades introduïdes");
     }
 }


 //NIVEL 3

 /* Nivel 3: Ejercicio 1: Creamos función para saber que número o operador 
 estamos seleccionando y una vez tengamos el cálculo que queramos hacer
 en pantalla, ejecutamos la función calculadoraNivell3() la qual troceará
 el valor para extraer el valor1, el operador y el valor2.
 */
 function mostrarValorSeleccionatCalculadora(valorSeleccionadoCalculadora) {

     // Borramos el valor 0 inicial de la pantalla de la calculadora al empezar ha escribir
     if (document.getElementById("resultatCalculadora").innerHTML == "0") {
         document.getElementById("resultatCalculadora").innerHTML = "";
     }

     //Controlamos que no se introduzca más de 1 vez cualquier operador
     if (document.getElementById("resultatCalculadora").innerHTML.replace(/[^+]/g, "").length > 1) {
         document.getElementById("resultatCalculadora").innerHTML = "Error";
         return false;
     } else if (document.getElementById("resultatCalculadora").innerHTML.replace(/[^-]/g, "").length > 1) {
         document.getElementById("resultatCalculadora").innerHTML = "Error";
         return false;
     } else if (document.getElementById("resultatCalculadora").innerHTML.replace(/[^/]/g, "").length > 1) {
         document.getElementById("resultatCalculadora").innerHTML = "Error";
         return false;
     } else if (document.getElementById("resultatCalculadora").innerHTML.replace(/[^*]/g, "").length > 1) {
         document.getElementById("resultatCalculadora").innerHTML = "Error";
         return false;
     }

     //Controlamos la división entre 0 para mostrar valor indeterminado en la función
     // calculadoraNivell3()
     if (document.getElementById("resultatCalculadora").innerHTML == "/") {
         document.getElementById("resultatCalculadora").innerHTML = "0/";
     }

     //Vamos añadiendo en la pantalla de la calculadora los valores seleccionados
     //y los guardamos en la variable operacion
     let operacion = document.getElementById("resultatCalculadora").innerHTML += valorSeleccionadoCalculadora;
 }
 

 // Función que borra todo el contenido de la pantalla y deja un 0 como valor inicial
 function borrarPantalla() {
     document.getElementById("resultatCalculadora").innerHTML = "0";
 }


 // Función que borra el último valor introducido en la calculadora
 function borrarDigit() {
     let digit = document.getElementById("resultatCalculadora").innerHTML;
     let nouDigit = digit.substring(0, digit.length - 1);
     document.getElementById("resultatCalculadora").innerHTML = nouDigit;

     if (digit.length == 1) {
         document.getElementById("resultatCalculadora").innerHTML = "0";
     }
 }


 // Nivel 3: Ejercici 1: Creamos la función completa de la calculadora para éste ejercicio
 function calculadoraNivell3(operador, valor1, valor2) {
     // Recogemos el valor introducido en la pantalla de la calculadora
     operacionCalculadora = document.getElementById("resultatCalculadora").innerHTML;

     //Buscamos la posición del operador para poder dividir y saber dónde está el valor1
     //valor 2 y el operador
     let operadorMas = document.getElementById("operadorMas");
     let operadorMenos = document.getElementById("operadorMenos");
     let operadorMultiplicar = document.getElementById("operadorMultiplicar");
     let operadorDividir = document.getElementById("operadorDividir");

     if (/\-/.test(operacionCalculadora) == true) {
         var operadorIndexOf = operadorMenos.innerHTML;
     } else if (/\+/.test(operacionCalculadora) == true) {
         var operadorIndexOf = operadorMas.innerHTML;
     } else if (/\*/.test(operacionCalculadora) == true) {
         var operadorIndexOf = operadorMultiplicar.innerHTML;
     } else {
         var operadorIndexOf = operadorDividir.innerHTML;
     }

     // Guardamos la posición en la que se encuentra el símbolo operador
     posicionValor = operacionCalculadora.indexOf(operadorIndexOf);

     /*Una vez sabemos la posición del operador, podemos extraer el valor de la variable
     valor1, operador y valor2 para poder asignarlos a sus variables
     */
     valor1 = parseFloat(operacionCalculadora.substring(0, posicionValor));
     valor2 = parseFloat(operacionCalculadora.substring(posicionValor + 1, operacionCalculadora.length));
     operador = operacionCalculadora.substring(posicionValor, posicionValor + 1);

     /*Inicializamos la variable resultado que se mostrara por la pantalla de la calculadora
     y que será fruto del cálculo hecho en función del operador que hayamos escogido y que
     filtraremos mediante el siguiente if.
     */
     let resultat = 0;

     if (operador == "+") {
         resultat = valor1 + valor2;
         document.getElementById("resultatCalculadora").innerHTML = resultat;
     } else if (operador == "-") {
         resultat = valor1 - valor2;
         document.getElementById("resultatCalculadora").innerHTML = resultat;
     } else if (operador == "*") {
         resultat = valor1 * valor2;
         document.getElementById("resultatCalculadora").innerHTML = resultat;
     } else if (operador == "*") {
         resultat = valor1 * valor2;
         document.getElementById("resultatCalculadora").innerHTML = resultat;
     } else if (operador == "/" && valor1 == 0 && valor2 == 0) {
         document.getElementById("resultatCalculadora").innerHTML = "Resultado indefinido";
     } else if (operador == "/") {
         resultat = valor1 / valor2;
         document.getElementById("resultatCalculadora").innerHTML = resultat;
     } else {
         document.getElementById("resultatCalculadora").innerHTML = "Error";
     }
 }