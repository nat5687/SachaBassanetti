<template>
    <main>
        <above-scroll :textProp="message"></above-scroll>
        <section class="l_m">
          <div class='container'>
          <app-video :url="urls[0]" :video_title="video_titles[0]">Last Memories</app-video>
          </div>
          <p class="text">Lofi / Chill instrumental beats EP composed, recorded and mixed by myself.<br>All the animations were made by my friend Lucas Limondin.</p>
        </section>
        <section class="redeemer">
          <p class=title>The redeemer</p>
          <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/2Fp2U33s6sihV3KmtplWHE?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          <p class="text">Music highly inspired by some of the League of Legends world championship anthems. <br>The goal was to mix pop vocals with some orchestral elements, to give the feeling of an epic story. <br>I had the opportunity to write music for a string quartet and to record them. </p>
        </section>
        <section class="soundcloud">
          <p class="title">Soundcloud Demos</p>
          <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1572328282&color=%234d4d4d&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/zenisound" title="Zeni" target="_blank" style="color: #cccccc; text-decoration: none;">Zeni</a> · <a href="https://soundcloud.com/zenisound/sets/demo-ost" title="Démo OST" target="_blank" style="color: #cccccc; text-decoration: none;">Démo OST</a></div>
        </section>
  
      <back-arrow></back-arrow>
    </main>
</template>

<script setup lang="ts">
import aboveScroll from '../../components/aboveScroll.vue'
import backArrow from '../../components/backArrow.vue'
import appVideo from '../../components/appVideo.vue'

  const urls = [
    'https://www.youtube.com/embed/i37u3klgR1Y'
  ]

  const video_titles = [
    'Zeni - Last Memories 🎋 [chill music/instrumental beats]'
  ]

  const message = 'Music'
</script>


<style scoped lang='scss'>
@import '../../style/works/music.scss';

</style>