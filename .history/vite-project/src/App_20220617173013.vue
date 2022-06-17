<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
 <h1>Juego del gato</h1>
<section>
 <article id="comandos">
  Jugador 1:
  <input type="text" id="jugador1"><br><br>
  Jugador 2: 
  <input type="text" id="jugador 2"><br><br>
  <input type="button" id="comenzar" value="Comenzar">
  <label id="TurnoJugador"></label>
 </article>
  <article id="Tablero">
    <input type="button" id="casilla1">
    <input type="button" id="casilla2">
    <input type="button" id="casilla3"><br><br>

    <input type="button" id="casilla4">
    <input type="button" id="casilla5">
    <input type="button" id="casilla6"><br><br>

    <input type="button" id="casilla7">
    <input type="button" id="casilla8">
    <input type="button" id="casilla9">



  </article>











</section>
</template>

<style>
h1 {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
article#comandos{
  display: inline-block;
  text-align: left;
  border: 1px solid black;
font-size: 30px;


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
