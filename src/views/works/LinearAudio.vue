<template>
    <main>
        <above-scroll :textProp="message"></above-scroll>
        <div class='mobile' v-if='isMobile'>
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
              <img  loading="lazy" src="https://static.wixstatic.com/media/2f8a00_fee4db509d5d416ea80a1f63411c2834~mv2.png/v1/fill/w_282,h_415,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Addn%20affiche%20PRIX%20v2%20CORRIGE.png">
              <img  loading="lazy" src="https://static.wixstatic.com/media/2f8a00_be6ee9964d0b478991b048eae65d86e8~mv2.png/v1/fill/w_441,h_284,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/prix_01.png">
              <img  loading="lazy" src="https://static.wixstatic.com/media/2f8a00_bdfe19e56f114e4aba4b087ebe6ae983~mv2.png/v1/fill/w_385,h_382,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/2f8a00_bdfe19e56f114e4aba4b087ebe6ae983~mv2.png">
            </div>
          </section>
          <section class="u_n_en_r">
            <div class='container'>
            <app-video :url="urls[2]" :video_title="video_titles[2]">Une Nuit en Rouge</app-video>
            <p class="text">Short student film by Anata Bizet. (2nd year at ISPRA School) <br>My role : Boom operator, sound editing, music composition, mix (5.1) <br>We earned two prices at ISPRA school for : <br>"Best music composition" and "Best sound mixing</p>
            </div>
            <div class='img_container'>
              <img  loading="lazy" src="https://static.wixstatic.com/media/2f8a00_f634cc7dc2e74ca784f2cbcaf82054ab~mv2.jpg/v1/fill/w_336,h_498,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Une%20Nuit%20En%20Rouge.jpg">
            </div>
          </section>
          <section class="s_a">
            <div class='container'>
            <app-video :url="urls[3]" :video_title="video_titles[3]">Stayin' Alive</app-video>
            <p class="text">Short student film by Allan Klein. (3rd year at ISPRA School) <br> My role : Music composition</p>
            </div>
            <div class='img_container'>
              <img loading="lazy"  src="https://static.wixstatic.com/media/2f8a00_a78052d49dbc412c8cca54ffe5486907~mv2.jpg/v1/fill/w_336,h_498,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Affiche%20Stayin%20Alive.jpg">
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
              <img loading="lazy" src="https://static.wixstatic.com/media/2f8a00_295f2de2caff422f8849c643df2902d0~mv2.jpg/v1/fill/w_336,h_498,al_c,lg_1,q_80,enc_auto/Poster_not_available.jpg">
              <p class='text'>Short student film by Maryline Solignac. (2nd year at ISPRA School) <br>My role : Sound editing, mix (5.1)</p>
            </div>
          </section>
        </div>

        <div class='desktop' v-if='!isMobile'>
          <div class="mosaique-container">
            <div class="img-container" v-for="(url, index) in thumbnailUrls" :key="index">
              <img :src='url'  >
              <div @click.prevent='showOverlay(index)' class='overlay'>
                <h2 >{{names[index]}}</h2>
              </div>
            </div>
            
          </div>
        </div>

        <overlay v-if='overlayIsVisible' @close='closeOverlay' ><section class='no-border' v-if="sectionToShow" v-html="sectionToShow"></section></overlay>


        <back-arrow ></back-arrow>
    </main>
</template>

<script setup lang="ts">
import aboveScroll from '../../components/aboveScroll.vue'
import backArrow from '../../components/backArrow.vue'
import appVideo from '../../components/appVideo.vue'
import {returnThumbnailOfVideo} from '../../thumbnail.ts'
import overlay from '../../components/overlay.vue'
import {ref} from 'vue'

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


  const sections =  [
    `<section class="genopolys">
        <div class='container'>
          <div class="container-overlay container">
            <p  class="title">Genopolys
          </p>
          <div class="video_container">
            <iframe loading="lazy" src="${urls[0]}" title="${video_titles[0]}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>
        <p class="text">Short animation made by ArtFX students for Genopolys, "Institut de Genomique Fonctionnelle de Montpellier".</p>
        </div>
      </section>`,
    `<section class="a_d_d_n no-border">
      <div class='container'>
        <div class="container-overlay container">
            <p  class="title">Au-Dessus de Nous
          </p>
          <div class="video_container">
            <iframe loading="lazy" src="${urls[1]}" title="${video_titles[1]}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>
          <p class="text">Short student film by Pierre Fittante. (3rd year at ISPRA School) <br>My role : Boom operator, sound editing, music composition, final mix (5.1) <br>We earned several nominations and prices.</p>
          </div>
          <div class='img_container img_container1'>
            <img  loading="lazy" src="https://static.wixstatic.com/media/2f8a00_fee4db509d5d416ea80a1f63411c2834~mv2.png/v1/fill/w_282,h_415,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Addn%20affiche%20PRIX%20v2%20CORRIGE.png">
            <img  loading="lazy" src="https://static.wixstatic.com/media/2f8a00_be6ee9964d0b478991b048eae65d86e8~mv2.png/v1/fill/w_441,h_284,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/prix_01.png">
            <img  loading="lazy" src="https://static.wixstatic.com/media/2f8a00_bdfe19e56f114e4aba4b087ebe6ae983~mv2.png/v1/fill/w_385,h_382,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/2f8a00_bdfe19e56f114e4aba4b087ebe6ae983~mv2.png">
          </div>
    </section>`,
    `<section class="u_n_en_r no-border">
      <div class='container'>
        <div class="container-overlay container">
            <p class="title">Une Nuit en Rouge
          </p>
          <div class="video_container">
            <iframe loading="lazy" src="${urls[2]}" title="${video_titles[2]}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>
      <p class="text">Short student film by Anata Bizet. (2nd year at ISPRA School) <br>My role : Boom operator, sound editing, music composition, mix (5.1) <br>We earned two prices at ISPRA school for : <br>"Best music composition" and "Best sound mixing</p>
      </div>
      <div class='img_container'>
        <img  loading="lazy" src="https://static.wixstatic.com/media/2f8a00_f634cc7dc2e74ca784f2cbcaf82054ab~mv2.jpg/v1/fill/w_336,h_498,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Une%20Nuit%20En%20Rouge.jpg">
      </div>
    </section>`,
    `<section class="s_a no-border">
      <div class='container'>
        <div class="container-overlay container">
            <p  class="title">Stayin' Alive
          </p>
          <div class="video_container">
            <iframe loading="lazy" src="${urls[3]}" title="${video_titles[3]}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>
      <p class="text">Short student film by Allan Klein. (3rd year at ISPRA School) <br> My role : Music composition</p>
      </div>
      <div class='img_container'>
        <img loading="lazy"  src="https://static.wixstatic.com/media/2f8a00_a78052d49dbc412c8cca54ffe5486907~mv2.jpg/v1/fill/w_336,h_498,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Affiche%20Stayin%20Alive.jpg">
      </div>
    </section>`,
    `<section class="z_t no-border">
      <div class='container'>
        <div class="container-overlay container">
            <p  class="title">Zukirika Trailer
          </p>
          <div class="video_container">
            <iframe loading="lazy" src="${urls[4]}" title="${video_titles[4]}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>
      <p class="text">Trailer for a comic book by Lucas Limondin. <br> You can read it on the link below. <br> <a href='https://www.mangadraft.com/manga/zukirika' target="_blank">https://www.mangadraft.com/manga/zukirika</a> </p>
      </div>
    </section>`,
    `<section class="s_f no-border">
      <p class=title>Sang Froid</p>
      <div class='img_container'>
        <img loading="lazy" src="https://static.wixstatic.com/media/2f8a00_295f2de2caff422f8849c643df2902d0~mv2.jpg/v1/fill/w_336,h_498,al_c,lg_1,q_80,enc_auto/Poster_not_available.jpg">
        <p class='text'>Short student film by Maryline Solignac. (2nd year at ISPRA School) <br>My role : Sound editing, mix (5.1)</p>
      </div>
    </section>`
    
  ]



  let isMobile = ref(window.innerWidth <= 700);


  window.addEventListener('resize', () => {
    isMobile.value = window.innerWidth <= 700
  })

  


  let thumbnailUrls = urls.map((url) => {
    return returnThumbnailOfVideo(url)
  })

  thumbnailUrls.push('https://static.wixstatic.com/media/2f8a00_295f2de2caff422f8849c643df2902d0~mv2.jpg/v1/fill/w_336,h_498,al_c,lg_1,q_80,enc_auto/Poster_not_available.jpg')


  const names = [
    'Genopolys',
    'Au-Dessus de Nous',
    'Une Nuit en Rouge',
    "Stayin' Alive",
    "Zukirika Trailer",
    'Sang Froid'

  ]

  let overlayIsVisible = ref(false)
  let sectionToShow = ref('')

  const showOverlay = (index: number) => {

    sectionToShow.value = sections[index]
    
    overlayIsVisible.value = true
    document.body.style.overflow = 'hidden'
  }

  const closeOverlay = () => {
    overlayIsVisible.value = false
    document.body.style.overflow = 'initial'
  }

</script>

<style scoped lang="scss">
@import '../../style/works/linearAudio.scss';

</style>