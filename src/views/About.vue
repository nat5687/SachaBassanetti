<template>
    <section>
      <above-scroll :textProp="message"></above-scroll>
      <div class="img_container">
        <img src="../assets/photo_sacha.webp" alt="Une photo de moi">
      </div>
      <div class="content">
        <h1>Sacha Bassanetti</h1>
        <p>Passionated about music, cinema and video games, I try to find inspiration in the world around me to improve my creativity and my skills every day. <br>Musician and music composer since a few years, i also have a sound engineer bachelor and a video game sound design specialization. <br> Any project that requires sound in mind ? <br>Feel free to contact me. <br> For more informations, please, click on my resume below.</p>
      </div>
    </section>
  </template>
  
  
<script setup lang="ts">
  import aboveScroll from '../components/aboveScroll.vue'
  const message = 'About'
</script>

<style scoped lang="scss">
@import '../style/about.scss'

</style>

