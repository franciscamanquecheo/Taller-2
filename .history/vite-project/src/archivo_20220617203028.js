new Vue({
el: 'main',

iniciar: {

}

});


var inicio = false;
var turno =0;
var tablero = new Array();
window.onload = function(){
var comenzar = document.getElementById("comenzar");
comenzar.addEventListener("click",iniciar);
}
function iniciar(){
  inicio = true;
  var jugador1 = document.getElementById("jugador1");
  var jugador2 = document.getElementById("jugador2");
}
function presionar(boton){

if(inicio == true){
  if(turno ==1 && boton.value==""){
    turno =2;
    boton.value="X";
  }else{
    if(turno==2 && boton.value==""){
       turno =1;
    boton.value="O";
    }
  }

}
}