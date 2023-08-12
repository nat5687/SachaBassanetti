<template>
  <div class="container">
    <p  class="title"><slot>
  </slot></p>
  <div class="video_container">
    <iframe :src="url" :title="video_title" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </div>
  </div>
</template>

<script setup lang="ts">

  const {url, video_title} =  defineProps({
    url: String,
    video_title: String
  })
</script>

<style scoped lang="scss">

  .container{
    margin-top: 10vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .video_container{
    position: relative;
    padding-bottom: 56.25%; /* Rapport 16:9 pour une vidéo */
    height: 0;
    overflow: hidden;
    width: max(90%);
    margin:1em auto 0 auto;

    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }

  .title{
    font-size: 7vmin;
  }
</style>