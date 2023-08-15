<template>
    <main>
        <above-scroll :textProp="message"></above-scroll>
        <section class="genopolys">
          <div class='container'>
          <app-video :url="urls[0]" :video_title="video_titles[0]">Genopolys</app-video>
          <p class="text">Short animation made by ArtFX students for Genopolys, "Institut de Genomique Fonctionnelle de Montpellier".</p>
          </div>
        </section>
        <section class="a_d_d_n">
          <div class='container'>
          <app-video :url="urls[1]" :video_title="video_titles[1]">Au-Dessus de Nous</app-video>
          <p class="text">Short student film by Pierre Fittante. (3rd year at ISPRA School) <br>My role : Boom operator, sound editing, music composition, final mix (5.1) <br>We earned several nominations and prices.</p>
          </div>
          <div class='img_container img_container1'>
            <img src="https://static.wixstatic.com/media/2f8a00_fee4db509d5d416ea80a1f63411c2834~mv2.png/v1/fill/w_282,h_415,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Addn%20affiche%20PRIX%20v2%20CORRIGE.png">
            <img src="https://static.wixstatic.com/media/2f8a00_be6ee9964d0b478991b048eae65d86e8~mv2.png/v1/fill/w_441,h_284,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/prix_01.png">
            <img src="https://static.wixstatic.com/media/2f8a00_bdfe19e56f114e4aba4b087ebe6ae983~mv2.png/v1/fill/w_385,h_382,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/2f8a00_bdfe19e56f114e4aba4b087ebe6ae983~mv2.png">
          </div>
        </section>
        <section class="u_n_en_r">
          <div class='container'>
          <app-video :url="urls[2]" :video_title="video_titles[2]">Une Nuit en Rouge</app-video>
          <p class="text">Short student film by Anata Bizet. (2nd year at ISPRA School) <br>My role : Boom operator, sound editing, music composition, mix (5.1) <br>We earned two prices at ISPRA school for : <br>"Best music composition" and "Best sound mixing</p>
          </div>
          <div class='img_container'>
            <img src="https://static.wixstatic.com/media/2f8a00_f634cc7dc2e74ca784f2cbcaf82054ab~mv2.jpg/v1/fill/w_336,h_498,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Une%20Nuit%20En%20Rouge.jpg">
          </div>
        </section>
        <section class="s_a">
          <div class='container'>
          <app-video :url="urls[3]" :video_title="video_titles[3]">Stayin' Alive</app-video>
          <p class="text">Short student film by Allan Klein. (3rd year at ISPRA School) <br> My role : Music composition</p>
          </div>
          <div class='img_container'>
            <img src="https://static.wixstatic.com/media/2f8a00_a78052d49dbc412c8cca54ffe5486907~mv2.jpg/v1/fill/w_336,h_498,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Affiche%20Stayin%20Alive.jpg">
          </div>
        </section>
        <section class="z_t">
          <div class='container'>
          <app-video :url="urls[4]" :video_title="video_titles[4]">Zukirika Trailer</app-video>
          <p class="text">Trailer for a comic book by Lucas Limondin. <br> You can read it on the link below. <br> <a href='https://www.mangadraft.com/manga/zukirika' target="_blank">https://www.mangadraft.com/manga/zukirika</a> </p>
          </div>
        </section>
        <section class="s_f">
          <p class=title>Sang Froid</p>
          <div class='img_container'>
            <img src="https://static.wixstatic.com/media/2f8a00_295f2de2caff422f8849c643df2902d0~mv2.jpg/v1/fill/w_336,h_498,al_c,lg_1,q_80,enc_auto/Poster_not_available.jpg">
            <p class='text'>Short student film by Maryline Solignac. (2nd year at ISPRA School) <br>My role : Sound editing, mix (5.1)</p>
          </div>
        </section>

        <back-arrow></back-arrow>
    </main>
</template>

<script setup lang="ts">
import aboveScroll from '../../components/aboveScroll.vue'
import backArrow from '../../components/backArrow.vue'
import appVideo from '../../components/appVideo.vue'

  const urls = [
    'https://www.youtube.com/embed/f8deaUow014',
    'https://www.youtube.com/embed/ERZ6tRDG6hQ',
    'https://www.youtube.com/embed/LWIqFLxJACE',
    'https://www.youtube.com/embed/_EpKyGmVkIc',
    'https://www.youtube.com/embed/flvDgl-acSA'
  ]

  const video_titles = [
    'GENOPOLYS',
    'Au Dessus De Nous Ep. 1',
    'Une Nuit En Rouge',
    'Stayin&#39; Alive',
    'ZUKIRIKA Trailer 01'
  ]


  const message = 'Linear Audio'
</script>

<style scoped lang="scss">
@import '../../style/works/linearAudio.scss'
</style>