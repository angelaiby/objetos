
 var assert = require('assert');
 function EjerciciosObjetos(){
 this.area=function(base, altura) {
   this.base = base;
   this.altura= altura;
   return base*altura;
 }

 this.datos=function (nombre,dia,mes,anio){
   this.nombre =nombre;
   this.dia = dia;
   this.mes =mes;
   this.anio=anio;

   var hoy= new Date();
   var year=hoy.getFullYear();
   var month= hoy.getMonth();
   var day = hoy.getDate();
   var edad;

   if(month>=mes && day>=dia) {
     edad = year-anio;
 }else{
     edad= year-anio-1;
 }
   return("la edad actual de "+nombre +" es "+ edad);
 }
 //var edad=new datos("ana",2,8,1995);

 this.pasatiempo=function (nombre,edad,pasatiempo){
  this.nombre =nombre;
  this.edad = edad;
  this.pasatiempo =pasatiempo;
  return ("Hola soy "+ nombre +"tengo "+ edad+ " años y me gusta " + pasatiempo);
}
}
//var informacion=new datos("Angela ",23,"escuchar musica");



var ejercicios = new EjerciciosObjetos();

describe('Ejercicios Ojetos', function(){
describe('Ejercicio 1', function(){
  it("cuando area [6,8]", function(){
    assert.equal(48,ejercicios.area(6,8));
  });
  });

describe('Ejercicio 2', function(){
  it("la edad actual es ", function(){
    assert.equal("la edad actual de ana es 21",ejercicios.datos("ana",2,8,1995));
    });
    });

describe('Ejercicio 3', function(){
  it("informacion personal", function(){
    assert.equal("Hola soy Angela tengo 23 años y me gusta escuchar musica",ejercicios.pasatiempo("Angela ",23,"escuchar musica"));
    });
    });
  });
