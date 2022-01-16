// Areas de figuras
//Area de circulo
function circulo (r, pi, resultado){
    var r =10;
    var pi= 3.1416;
    var resultado =(r*r)*pi;
    alert ("El area del circulo es: " +resultado);
}
circulo();

//Area del rectangulo
function rectangulo(b,h,resultado){
    var b= 15;
    var h= 25;
    var resultado = b*h;
    console.log(resultado);
}
rectangulo();

//Area del triangulo
function triangulo(b, h, resultado){
    var resultado =(b*h)/2;
    alert("El  area del triangulo es: " + resultado);
}
triangulo(5,10);
