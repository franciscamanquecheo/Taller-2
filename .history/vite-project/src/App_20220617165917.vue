<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
 <h1>Juego del gato</h1>
 <article id="comandos">
  Jugador 1:
  <input type="text" id="jugador1"><br><br>
  Jugador 2: 
  <input type="text" id="jugador 2"><br>
  <label id="TurnoJugador"></label>
  

 </article>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
