<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
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
</script>

<template>
 <h1>Juego del gato</h1>
<section>
 <article id="comandos">
  Jugador 1:
  
  <input type="text" id="jugador1"><br><br>
  Jugador 2: 
  <input type="text" id="jugador2"><br><br>
  <input type="button" id="comenzar" value="Comenzar">
  <label id="TurnoJugador"></label>
 </article>
  <article id="Tablero">
    <input type="button" id="casilla1" onclick="colocar(this)">
    <input type="button" id="casilla2" onclick="colocar(this)">
    <input type="button" id="casilla3" onclick="colocar(this)"><br><br>

    <input type="button" id="casilla4" onclick="colocar(this)">
    <input type="button" id="casilla5" onclick="colocar(this)">
    <input type="button" id="casilla6" onclick="colocar(this)"><br><br>

    <input type="button" id="casilla7" onclick="colocar(this)">
    <input type="button" id="casilla8" onclick="colocar(this)">
    <input type="button" id="casilla9" onclick="colocar(this)">



  </article>
</section>
</template>


<style>
h1 {
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #4172a2;
  margin-top: 60px;
  font-size: 50px;
  
}
article#comandos{
  margin-top: 50px;
  
  display: inline-block;
  text-align: left;
  border: 1px solid black;
  margin-left: 20px;
font-size: 30px;
vertical-align: top;
min-height: 300px;
width: 25%;
padding-left: 1em;
}
article#Tablero{
 
  display: inline-block;
 
  margin: 2em;
  width: 50%;
   text-align: right;
}
article#Tablero input{
border: 1px solid rebeccapurple;
  font-size: 6em;
  height: 100 px;
  width: 120px;
  margin: 10px;

}
input[type="text"]{
  margin-top: 15px;
  font-size: 1em;
  margin: 0.2 em;
  padding: 0.1em;
}
input[type="button"]#comenzar{
  font-size: 0.8em;
  margin-top: 1em;
  padding: 0.7em;
  margin-left: 6em;
 
}
  


section{
  display: inline-block;
  margin: 0 auto;
  
  width: 100%;
}
template{
  background-color: #2c3e50;
}
</style>
