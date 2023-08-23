<template>
    <main>
      <above-scroll :textProp="message"></above-scroll>
      <div class="img_container">
        <img loading="lazy" src="../assets/photo_sacha.webp" alt="Une photo de moi">
      </div>
      <div class="content">
        <h1>Sacha Bassanetti</h1>
        <p>Passionated about music, cinema and video games, I try to find inspiration in the world around me to improve my creativity and my skills every day. <br>Musician and music composer since a few years, I also have a sound engineer bachelor and a video game sound design specialization. <br> Any project that requires sound in mind ? <br>Feel free to contact me. <br> For more informations, please, click on my resume below.</p>
        <a href='https://dd17ced0-51f7-4d86-a6ba-7f8305446e54.filesusr.com/ugd/2f8a00_470cc3489d304b598487e5132777bc6d.pdf' target='_blank'>Resume</a>
      </div>
    </main>
  </template>
  
  
<script setup lang="ts">
  import aboveScroll from '../components/aboveScroll.vue'
  const message = 'About'
</script>

<style scoped lang="scss">
@import '../style/about.scss';

</style>

