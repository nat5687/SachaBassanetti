<template>
    <section class="aboveScrollContainer">
        <img src="../assets/bg-soundDesign.jpg" alt="">
        <div class="overlay"></div>
        <p>{{ textProp }}</p>
    </section>
</template>

<script setup lang="ts">

    const {textProp} = defineProps({
        textProp: String
    })


</script>

<style lang="scss" scoped>
@import  '../style/variables';
@import  '../style/style.scss';

img{
  height: 100%;
  object-fit: cover;
  background-repeat: no-repeat;
  filter: brightness(1) contrast(1) ;
  position: absolute;

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