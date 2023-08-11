<script setup lang="ts">
  import AppHeader from './components/header/AppHeader.vue';
</script>

<template>
  <div class="main">
    <app-header></app-header>
    <img src="./assets/bg-soundDesign.jpg" alt="">
    <div class="overlay"></div>
    <p>Sound Designer  Composer  Sound Engineer</p>
  </div>
  
</template>

<style lang="scss" scoped>
@import url(style.scss);

img{
  height: 100vh;
  object-fit: cover;
  background-repeat: no-repeat;
  filter: brightness(1) contrast(1) ;
  position: absolute;

  z-index: -2;
}
.overlay{
  background-color: rgba(211, 211, 211, 0.5);
  background-blend-mode: luminosity; 
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  z-index: -1;
  
}

p{
  position: relative;
  font-size: 13vmin;
  top: 40vh;
  text-align: center;
}


</style>
