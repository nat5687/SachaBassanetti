<template>
    <section class="aboveScrollContainer">
        <img  loading="lazy" src="../assets/bg-soundDesign.webp" alt="">
        <div class="overlay"></div>
        <p v-html="textProp"></p>
    </section>
</template>

<script setup lang="ts">

    const {textProp} = defineProps({
        textProp: String
    })


</script>

<style lang="scss" scoped>
@import  '../style/_variables';
@import  '../style/style.scss';

section {
  font-family: $first-font;
}

img{
  height: 100%;
  object-fit: cover;
  background-repeat: no-repeat;
  filter: brightness(1) contrast(1) ;
  position: absolute;
  width:100vw;

  z-index: -2;
}
.overlay{
  background-color: rgba(211, 211, 211, 0.5);
  background-blend-mode: luminosity; 
  height: 100%;
  width: 100vw;
  position: absolute;
  top: 0;
  z-index: -1;
  
}

p{
  position: relative;
  font-size: 13vmin;
  text-align: center;
  color: $font-color;
  
}

.aboveScrollContainer{
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}


</style>