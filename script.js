//PEDES IN TERRA AD SIDERA VISUS
/*alert("Estoy vivooo");
console.log("alerta en la consola");

var nombre ="Alberto Adrian";
var apellido ="Diaz Rivera";
var edad ="28";
console.log(nombre, apellido, edad);


alert("Mi nombre es: " + nombre + ", mis apellidos son: " + apellido + " y mi edad es: " + edad);

//Otro ejemplo de como mostrar variables en consola

var num1 = 5;
var num2 = 7;
var resultado = num1+num2;
console.log("El resultado de la suma es: " + resultado);

*/

//Declaracion de funcion

/*function saludar(){
    alert("Hola a todos");
}
saludar()

//Expresion de funcion

var cantar = function(){
    alert ("A mi me gusta cantar");
}
cantar();

//Funcion sin parametros

function sumar(){
    var numero1 = 5;
    var numero2 = 6;
    var resultado = numero1+numero2;
    alert("La suma de la funcion sin parametros es: " + resultado);
}
sumar();

//Funcion con parametros

function restar(num1,num2,resta){
    var num1 = 6;
    var num2 = 8;
    var resta = num1-num2;
    alert ("La resta de la funcion con parametros es: " +resta);
}
restar();

//Otra funcion con parametros

function cuadrado(cuadrado){
    var rescuadrado = cuadrado * cuadrado;
    alert ("El cuadrado del numero es: "+ rescuadrado);
}
cuadrado(4);

//Calculadora simple

function operaciones(num1, num2, num3, suma, resta, multi){
    var suma = num1+num2+num3;
    var resta = num1-num2-num3;
    var multi = num1*num2*num3;
    alert ("La suma es: "+ suma + "la resta es: " + resta + "la multiplicacion es: " +multi );
}
operaciones(5,6,7);*/

//Funcion Prompter
/*function Prompter(){
var respuesta = prompt("Buen dia, ¿cual es tu nombre? ");
alert("Es un gusto saludarte " + respuesta);
}
Prompter();

function areaCuadrDO(){
    var datoIngresado = prompt("Ingresa un valor: ");
    var resultado =
}
*/


//getelementByID
function cambiarColor(nuevoColor){
    var elem = document.getElementById ("parrafo");
    elem.style.color = nuevoColor;
}


function Accion (Tipo){
    var elem = document.getElementById ("DivBotones");
    if (Tipo == "Ocultar")
    elem.style.display = 'none';
    else
    elem.style.display = '';
}
