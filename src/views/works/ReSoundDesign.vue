<template>
    <main>
        <above-scroll :textProp="message"></above-scroll>
        <section class="portal">
          <app-video :url="urls[0]" :video_title="video_titles[0]">Portal</app-video>
        </section>
        <section class="cod">
          <app-video :url="urls[1]" :video_title="video_titles[1]">Call of Duty</app-video>
        </section>
        <section class="bioshock">
          <app-video :url="urls[2]" :video_title="video_titles[2]">Bioshock</app-video>
        </section>
        <section class="p_in_b">
          <app-video :url="urls[3]" :video_title="video_titles[3]">Puss in Boots 2 - 1st Wolf Encounter</app-video>
        </section>
        <section class="s_c_m">
          <app-video :url="urls[4]" :video_title="video_titles[4]">Sly Cooper Movie Trailer</app-video>
        </section>
        <section class="overwatch">
          <app-video :url="urls[5]" :video_title="video_titles[5]">Overwatch - Cinematic</app-video>
        </section>
        <section class="o_and_blind">
          <app-video :url="urls[6]" :video_title="video_titles[6]">Ori and the Blind Forest</app-video>
        </section>
        <back-arrow></back-arrow>

    </main>
</template>

<script setup lang="ts">
import aboveScroll from '../../components/aboveScroll.vue'
import backArrow from '../../components/backArrow.vue' 
import appVideo from '../../components/appVideo.vue'

  const urls = [
  'https://www.youtube.com/embed/sUvTOjHwcrM',
  'https://www.youtube.com/embed/yrnGXaADH-4',
  'https://www.youtube.com/embed/I7WSk2wv2-I',
  'https://www.youtube.com/embed/gFUUyVmzkFU',
  'https://www.youtube.com/embed/2Z9vdZTrTF0',
  'https://www.youtube.com/embed/H2sy0vXcVB4',
  'https://www.youtube.com/embed/RBfzsqxhXAc'
  ]

  const video_titles = [
    '[Re-sound Design] - Portal',
    '[Re-sound Design] - Call of Duty',
    '[Re-sound Design] - Bioshock',
    '[Re-sound Design] - Puss in Boots 2 - 1st Wolf Encounter',
    '[Re-sound Design] - Sly Cooper Movie Trailer',
    '[Re-sound Design] - Overwatch - Cinematic',
    '[Re-sound Design] - Ori and the Blind Forest'

  ]
const message = 'Re Sound Design'
</script>


<style  scoped lang="scss">
@import '../../style/works/reSoundDesign.scss';
</style>