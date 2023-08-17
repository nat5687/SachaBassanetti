<template>
    <main>
      <above-scroll :textProp="message"> </above-scroll>
      <h1>This is all my work</h1>
      <section class="game_audio">
        <div class="text">
          <p class="title">Game audio</p>
          <p>
            Asset creation, integration...
          </p>
        </div>
        <div class="show_container">
          <div style="background-image: url(https://static.wixstatic.com/media/2f8a00_1b0c003a0c0e414a9f912f21be67fa0a~mv2.png/v1/fit/w_776,h_230,q_90/2f8a00_1b0c003a0c0e414a9f912f21be67fa0a~mv2.png);" alt="" class="show_img"></div>
          <div style="background-image: url(https://static.wixstatic.com/media/2f8a00_ae8f14518e4640a691ba1fd7fbf4f6dc~mv2.png/v1/fit/w_776,h_230,q_90/2f8a00_ae8f14518e4640a691ba1fd7fbf4f6dc~mv2.png);" alt="" class="show_img"></div>
          <div style="background-image: url(https://static.wixstatic.com/media/2f8a00_97fb740785fd406e83036490cc11e413~mv2.jpg/v1/fit/w_776,h_230,q_90/2f8a00_97fb740785fd406e83036490cc11e413~mv2.jpg);" alt="" class="show_img"></div>
          <router-link to="/works/game-audio" class="overlay_text"><h2 class="">See More</h2></router-link>
        </div>
      </section>
      <section class="linear_audio">
        <div class="text">
          <p class="title">Linear audio</p>
          <p>
            Short films, trailer and more...
          </p>
        </div>
        <div class="show_container">
          <div loading="lazy" style="background-image: url(https://static.wixstatic.com/media/2f8a00_fee4db509d5d416ea80a1f63411c2834~mv2.png/v1/fill/w_282,h_415,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Addn%20affiche%20PRIX%20v2%20CORRIGE.png)" alt="" class="show_img"></div>
          <div style="background-image: url(https://static.wixstatic.com/media/2f8a00_f634cc7dc2e74ca784f2cbcaf82054ab~mv2.jpg/v1/fill/w_336,h_498,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Une%20Nuit%20En%20Rouge.jpg);" alt="" class="show_img"></div>
          <div style="background-image: url(https://static.wixstatic.com/media/2f8a00_a78052d49dbc412c8cca54ffe5486907~mv2.jpg/v1/fill/w_336,h_498,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Affiche%20Stayin%20Alive.jpg);" alt="" class="show_img"></div>
          <router-link to="/works/linear-audio" class="overlay_text"><h2 class="">See More</h2></router-link>
        </div>
      </section>
      <section class="music">
        <div class="text">
          <p class="title">Music</p>
          <p>
            Spotify, Soundcloud, Youtube...
          </p>
        </div>
        <div class="show_container">
          <div style="background-image: url(https://i1.sndcdn.com/avatars-fqVobZLBJrm5e7T3-U4ymxA-t500x500.jpg);" alt="" class="show_img"></div>
          <div style="background-image: url(https://i.scdn.co/image/ab67616d00001e02255a889eb12c1a33ae6a20e3);" alt="" class="show_img"></div>
          <div style="background-image: url(https://i1.sndcdn.com/artworks-FXSuzuhB61gKwKsR-6Jbnng-t500x500.jpg);" alt="" class="show_img"></div>
          <router-link to="/works/music" class="overlay_text"><h2 class="">See More</h2></router-link>
        </div>
      </section>
      <section class="re_sound_design">
        <div class="text">
          <p class="title">Re Sound Design</p>
          <p>
            Video games, movies, trailer, animations...
          </p>
        </div>
        <div class="show_container">
          <div style="background-image: url(https://i.ytimg.com/vi/2Z9vdZTrTF0/mqdefault.jpg);" alt="" class="show_img"></div>
          <div style="background-image: url(https://i.ytimg.com/vi/gFUUyVmzkFU/mqdefault.jpg);" alt="" class="show_img"></div>
          <div style="background-image: url(https://i.ytimg.com/vi/sUvTOjHwcrM/mqdefault.jpg);" alt="" class="show_img"></div>
          <router-link to="/works/re-sound-design" class="overlay_text"><h2 class="">See More</h2></router-link>
        </div>
      </section>
    </main>
  </template>
  
  
  <script setup lang="ts">
    import aboveScroll from '../components/aboveScroll.vue'
    const message = 'Works'
  </script>


<style scoped lang="scss">

@import '../style/works.scss';
</style>