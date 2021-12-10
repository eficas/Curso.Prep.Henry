// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "hola mundo";

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 2;

// Crea una variable booleana:
const nuevoBool = "true";

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  // "Return" la string provista: str
  // Tu código:
  return str
}

function suma(x, y) {
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:

  var suma =a+b;
  return suma
}
sumarDosnumeros(1,5);//6
function resta(x, y) {
  // Resta "y" de "x" y devuelve el valor
  // Tu código:
  var resta=x-y;
  return resta;
}
restarDosnumeros (2,5);//3
function multiplica(x, y) {
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
  var multiplica=x*y;
  return multiplicacion;
}
multiplicaDosnumeros (3*5); //15
function divide(x, y) {
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
  var producto =x/y;
  return producto
}
 divideDosnumeros(3/3);//1

function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:
  if (x==y) {
    return true;
  }
    devolverfalse;
  }
  sonIguales(X,Y);//verdad
  
function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
  if ((str1.tienenMismaLongitud)==(str2.tienenMismaLongitud)) {
    devolvertrue;
  } else {
    devolverfalse;
  }
  }
   tienenlaMismalongitud(str1==stri2)//true


function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
  if (numero<90){
    return true;
  } else {
  devolverfalse;
  }
}
menosQueNoventa(20<90);//true

function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
  if (numero>50){
    return true;
}else{ 
  devolverfalse;
}
}
mayorQueCincuenta(60>50);//true

function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
  var producto=x/y;{
  devolverProduvto;
  }
}
obtenerResto(6,3);//2


function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
  if (num%2==0){
    return true;
}else{
return false}
}


function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
  if(num % 2 !=0){
    return true;
}else{
  return false}

}

function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
  math.pow(5,2);
  console.log("5*5 =",squareNumber);
  let variable =5;
  let squareNumber2 =math.pow(variable,2);
  console.log("5*5=",squareNumber2);
}

function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
  var elevado = math.pow(2,3);
  undefined
  elevado
  8
  
}

function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
  resultado=math.pow(9,2);
  alert("el numero es;+resultado");
}

function elevar(num, exponent) {
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
  resultado=math.pow(3,2);
  undefined
  elevado
  9
}

function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
  math. ceil(.95);//1
  
}

function numeroRandom() {
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
  math.redondearNumero(55.55-1); //55.56
}

function esPositivo(numero) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
  
  math.sing=function(X){
    //si x es Nan;
    return Nan
    // si x es positivo;
    return esPositivo
    // si x es negativo;
    return negativo
    if (Number=0);{
      return false;
    }

function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
  <button>press me</button>
  var button= document.querySelector("button");
  button.onclick=function(){
    var name=prompt("what is your name?");
    alert("hello"+name +",nice to see you!");
  }
}

function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:
  var nombres, apellido="wilson cardenas; jhon calderon; estella muños"
  document.write(nombres + apellido);
  var listaNombresApellidos=nombres.split(exprecionRegular);
  document.write(listaNombresApellidos)
}

function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
  var miCadena="hola mundo.nice to see you";
  var divisiones=miCadena.split("",3);
  print(divisiones);
}

function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un rectángulo teniendo su altura y ancho
  // Tu código:
  var canvas=Document.getElemenByid("canvas");
  var ctx=canvas.getContex("2d");
  ctx.fillRed="blue";
  ctx.fillRed(5,5,20,20);
}


function retornarPerimetro(lado){
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
  var perimetro;
  perimetro=(lado*4);
  return perimetro;
}
  var lado;
  lado=prompt("valor del lado del cuadrado"," ");
  lado=parseInt(lado);
  documento.write("el perimetro del cuadrado es:" + returnperimetro(lado));
  

function areaDelTriangulo(base, altura){
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí
var areaResultado=Document.getElemenByid("area de resultados");
var b=parseInt(documento.getElemenByid("base").evalue);
var h=parseInt(document.getElemenByid("altura").evalue);
var area=(b*h)/2;
}

function deEuroAdolar(euro){
  //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
  //como parámetro un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
  var valor= parseFloat(Document.getElemenByid("cantidad").value);
  document.getElemenByid("valor");
  var de=document.getElemenByid("de").value;
  var a=document.getElemenByid("a").evalue;
  var dolar=3.903;
  var euro=4.408;
  resultado=0;
  //peso a dolar
  if (de==1&&a==2) 
    
  {
    resultado=valor/dolar;
}
//peso a euro
else if(de==1&&a==3)
{
  resultado=valor/euro;
}//dolar a pesos
else if(de==2&&a==1)
{
  resultado=valor*dolar
}//dolar a euro
else if(de==2&&a==3)
{
  resultado=valor*(dolar/euro);
}//euro a peso
else if(de==3&&a==1)
{
  resultado=valor*euro;
}
else if(de==3&&a==2)
{
  resultado=valor*(euro/dolar);
}//pesosa pesos,dolar a dolar y euro a euro
else{
  resultado=valor;
}
document.getElemenByid("resultado").$ +resultado.toFixed(2);



function esVocal(letra){
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  // Si no es vocal, tambien debe devolver "Dato incorrecto".
  //Escribe tu código aquí
  letra=letra.toLowerCase();
  if (letra=="a"|| letra=="e" || letra=="i" || letra=="o" || letra=="u"){
  return true; 
  }else{
  return false;
  }
var incorrecto ="";
for (var i=0; i < cadena.length; i ++){
  var letra= cadena.charAt(i);//cadena.substr(i,1 cadena.slice)(i,i+1)
  //si esta letra no es vocal añade incorrecto y si no no hago nada}
  if (!esVocal(letra)) {
    incorrecto +=letra;
}
} 








// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,