<template>
  <main>
    <above-scroll :textProp="message"></above-scroll>
    <section class='content'>
      <h2>This is my Showreel</h2>
    <div class="videos-container">
      <app-video  class="video video-1" :url="urls[0]" :video_title="video_titles[0]">Sound Design Showreel</app-video>
    <app-video  class="video video-2" :url="urls[1]" :video_title="video_titles[1]">Game Sound Design Showreel</app-video>
    <app-video  class="video video-3" :url="urls[2]" :video_title="video_titles[2]">Technical Showreel </app-video>
    </div>

    </section>

  </main>
</template>


<script setup lang="ts">
  import aboveScroll from '../components/aboveScroll.vue'
  import appVideo from '../components/appVideo.vue'

  const message = 'Sound Designer - Composer - Sound Engineer'
  const urls = [
    `https://www.youtube.com/embed/VykZSkETSLk`,
    `https://www.youtube.com/embed/CstgFFhPGqc`,
    `https://www.youtube.com/embed/A4eIKtM63To`
  ]
  const video_titles = [
    'Sound Design Showreel 2023 - Sacha Bassanetti',
    'Game Sound Design Showreel 2023 - Sacha bassanetti',
    'Technical Showreel 2023 - Sacha Bassanetti'
  ]
</script>

<style scoped lang="scss">
@import '../style/home.scss';

</style>