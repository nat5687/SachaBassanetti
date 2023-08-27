<template>
    <main>


        <above-scroll :textProp="message"></above-scroll>
        <div class="mobile" v-if='isMobile'>
            <section class="cnr">
                <div class="cnr_img"></div>
                <div ref="carousel_container" class="carousel_container">
                    <img src="https://static.wixstatic.com/media/2f8a00_1b0c003a0c0e414a9f912f21be67fa0a~mv2.png/v1/fit/w_776,h_230,q_90/2f8a00_1b0c003a0c0e414a9f912f21be67fa0a~mv2.png" alt="">
                    <img src="https://static.wixstatic.com/media/2f8a00_dae1a8a56c804660bc1ed4bf928ffc4a~mv2.png/v1/fit/w_776,h_230,q_90/2f8a00_dae1a8a56c804660bc1ed4bf928ffc4a~mv2.png" alt="">
                    <img src="https://static.wixstatic.com/media/2f8a00_87ea3fe0873c4b6598fc65c618b62e96~mv2.gif/v1/fit/w_710,h_230,q_90/2f8a00_87ea3fe0873c4b6598fc65c618b62e96~mv2.gif" alt="">
                    <img src="https://static.wixstatic.com/media/2f8a00_caab17aa806e4eb08fc0f1f30355ce58~mv2.png/v1/fit/w_776,h_230,q_90/2f8a00_caab17aa806e4eb08fc0f1f30355ce58~mv2.png" alt="">
                    <img src="https://static.wixstatic.com/media/2f8a00_5eb1781887fa4e6ba5c22cb9fb63dfa1~mv2.png/v1/fit/w_776,h_230,q_90/2f8a00_5eb1781887fa4e6ba5c22cb9fb63dfa1~mv2.png" alt="">
                    <img src="https://static.wixstatic.com/media/2f8a00_b5a2bd0b955e4d8d96cc48a9704fbc81~mv2.png/v1/fit/w_776,h_230,q_90/2f8a00_b5a2bd0b955e4d8d96cc48a9704fbc81~mv2.png" alt="">
                </div>
                <app-video :url="urls[0]" :video_title="video_titles[0]"></app-video>
                <p>IIM 4th Year student game.<br>"Cook'n'Rogue" is an adventure roguelike game where you can cook your weapon to defeat enemies.<br>On this project, I did all the asset and music creation as well as the integration using Wwise and Unity. <br>You can download this game on the link below<br><a href="https://elecktro-punch.itch.io/cook">https://elecktro-punch.itch.io/cook</a></p>
                <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1638378745&color=%234d4d4d&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/zenisound" title="Zeni" target="_blank" style="color: #cccccc; text-decoration: none;">Zeni</a> · <a href="https://soundcloud.com/zenisound/sets/cooknrogue-ost" title="Cook&#x27;n&#x27;Rogue - OST" target="_blank" style="color: #cccccc; text-decoration: none;">Cook&#x27;n&#x27;Rogue - OST</a></div>
            </section>
            <section class="folgore">
                <p class=title>Folgore</p>
                <div ref="carousel_container2" class="carousel_container2">
                    <img src="https://static.wixstatic.com/media/2f8a00_ae8f14518e4640a691ba1fd7fbf4f6dc~mv2.png/v1/fit/w_776,h_230,q_90/2f8a00_ae8f14518e4640a691ba1fd7fbf4f6dc~mv2.png">
                    <img src="https://static.wixstatic.com/media/2f8a00_2dcb93c5e0354e6fb5750041e4471b3a~mv2.jpg/v1/fit/w_776,h_230,q_90/2f8a00_2dcb93c5e0354e6fb5750041e4471b3a~mv2.jpg">
                    <img src="https://static.wixstatic.com/media/2f8a00_5ac75db4d499422e96d4da167cc94036~mv2.png/v1/fit/w_776,h_230,q_90/2f8a00_5ac75db4d499422e96d4da167cc94036~mv2.png">
                    <img src="https://static.wixstatic.com/media/2f8a00_9252b90b56ad484a9e6379c0d167af6e~mv2.jpg/v1/fit/w_776,h_230,q_90/2f8a00_9252b90b56ad484a9e6379c0d167af6e~mv2.jpg">
                    <img src="https://static.wixstatic.com/media/2f8a00_a60d0d7950f44d16b684c0128604c62a~mv2.jpg/v1/fit/w_776,h_230,q_90/2f8a00_a60d0d7950f44d16b684c0128604c62a~mv2.jpg">
                    <img src="https://static.wixstatic.com/media/2f8a00_33510f13ca0d429d954b22fd0504aa42~mv2.png/v1/fit/w_776,h_230,q_90/2f8a00_33510f13ca0d429d954b22fd0504aa42~mv2.png">
                </div>
                <p>ETPA student game. <br>"Folgore" is a top view fighting game inspired by dark comics and late 60s Italy. <br>On this project, I did all the asset and music creation as well as the integration using Wwise and Unity. <br>You can download this game on the link below <br> <a  href=" https://edouard-mordant.itch.io/folgore" target="_blank"> https://edouard-mordant.itch.io/folgore</a></p>
            </section>
            <section class="raiders">
                <app-video :url="urls[1]" :video_title="video_titles[1]">Raiders</app-video>
                <p>Art FX 5th year student game.<br>"Raiders" competitive fast-FPS with parkour oriented movements.<br>On this project, I did the asset creation and the Audio Implementation using Unreal Engine 5 audio engine.<br>You can download this game on the link below <br> <a href="https://artfx-school.itch.io/raiders" target="_blank" rel="noopener noreferrer">https://artfx-school.itch.io/raiders</a></p>
            </section>
            <section class="coulise">
                <app-video :url="urls[2]" :video_title="video_titles[2]">Coulisses</app-video>
                <p>Art FX 4th year student game. <br>"Coulisses" is a mobile puzzle game made in collaboration with "le domaine d'O", a theater in Montpellier, France. <br> On this project, I only did the sound assets.</p>
                <a href="https://play.google.com/store/apps/details?id=com.Coulisses.Coulisses&hl=fr&gl=US">Click here to play the game</a>
            </section>
            <section class="redplane">
                <app-video :url="urls[3]" :video_title="video_titles[3]">Temanava - RedPlane Studio</app-video>
                <p>IIM Paris 5th year student game under the name of "redplane studio" <br>On this project, I only did the sound assets. <br>You can try this adventure/exploration game for free on steam.</p>
                <a href="https://store.steampowered.com/app/2226000/Temanava/" target="blank">
                    <svg  xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16"><g fill="currentColor" class="steam"><path d="M.329 10.333A8.01 8.01 0 0 0 7.99 16C12.414 16 16 12.418 16 8s-3.586-8-8.009-8A8.006 8.006 0 0 0 0 7.468l.003.006l4.304 1.769A2.198 2.198 0 0 1 5.62 8.88l1.96-2.844l-.001-.04a3.046 3.046 0 0 1 3.042-3.043a3.046 3.046 0 0 1 3.042 3.043a3.047 3.047 0 0 1-3.111 3.044l-2.804 2a2.223 2.223 0 0 1-3.075 2.11a2.217 2.217 0 0 1-1.312-1.568L.33 10.333Z"/><path d="M4.868 12.683a1.715 1.715 0 0 0 1.318-3.165a1.705 1.705 0 0 0-1.263-.02l1.023.424a1.261 1.261 0 1 1-.97 2.33l-.99-.41a1.7 1.7 0 0 0 .882.84Zm3.726-6.687a2.03 2.03 0 0 0 2.027 2.029a2.03 2.03 0 0 0 2.027-2.029a2.03 2.03 0 0 0-2.027-2.027a2.03 2.03 0 0 0-2.027 2.027Zm2.03-1.527a1.524 1.524 0 1 1-.002 3.048a1.524 1.524 0 0 1 .002-3.048Z"/></g></svg>
                </a>
            </section>
            <section class="s_f">
                <app-video :url="urls[4]" :video_title="video_titles[4]">Sp'eat Fighter</app-video>
                <p>IIM Paris 3rd year student couch game. <br>On this project, I only did the sound assets. <br>You can play this game on the link below : <br> <a href="https://stephane-murca.itch.io/speat-fighter" target="_blank" rel="noopener noreferrer">https://stephane-murca.itch.io/speat-fighter</a> </p>

            </section>
        </div>

        <div class='desktop' v-if='!isMobile'>
          <div class="mosaique-container">
            <div class="img-container" v-for="(url, index) in thumbnailUrls" :key="index">
              <img :src='url' >
              <div @click.prevent='showOverlay(index)' class='overlay'>
                <h2 >{{names[index]}}</h2>
              </div>
            </div>
            
          </div>
        </div>
        <!-- <overlay v-if='overlayIsVisible' @close='closeOverlay' :index='videoIndex'><section class='no-border' v-if="sectionToShow" v-html="sectionToShow"></section></overlay> -->
        <div class='overlay_container' v-if='overlayIsVisible'>
        <div class='overlay_scroling'>
            <svg @click.prevent='closeOverlay' class='close' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59L7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12L5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"/></svg>
            <div class='no-border' v-if="sectionToShow" v-html="sectionToShow"></div>
        </div>
        </div>


        <back-arrow></back-arrow>
    </main>
</template>

<script setup lang="ts">
import aboveScroll from '../../components/aboveScroll.vue'
import backArrow from '../../components/backArrow.vue' 
import appVideo from '../../components/appVideo.vue'
import {Carousel} from '../../components/carousel/carousel.ts'
import {returnThumbnailOfVideo} from '../../thumbnail.ts'
import {onMounted, ref , Ref} from 'vue'

const sections =[
    `<section class="cnr">
        <div class="cnr_img"></div>
        <div ref="carousel_container" class="carousel_container">
            <img src="https://static.wixstatic.com/media/2f8a00_1b0c003a0c0e414a9f912f21be67fa0a~mv2.png/v1/fit/w_776,h_230,q_90/2f8a00_1b0c003a0c0e414a9f912f21be67fa0a~mv2.png" alt="">
            <img src="https://static.wixstatic.com/media/2f8a00_dae1a8a56c804660bc1ed4bf928ffc4a~mv2.png/v1/fit/w_776,h_230,q_90/2f8a00_dae1a8a56c804660bc1ed4bf928ffc4a~mv2.png" alt="">
            <img src="https://static.wixstatic.com/media/2f8a00_87ea3fe0873c4b6598fc65c618b62e96~mv2.gif/v1/fit/w_710,h_230,q_90/2f8a00_87ea3fe0873c4b6598fc65c618b62e96~mv2.gif" alt="">
            <img src="https://static.wixstatic.com/media/2f8a00_caab17aa806e4eb08fc0f1f30355ce58~mv2.png/v1/fit/w_776,h_230,q_90/2f8a00_caab17aa806e4eb08fc0f1f30355ce58~mv2.png" alt="">
            <img src="https://static.wixstatic.com/media/2f8a00_5eb1781887fa4e6ba5c22cb9fb63dfa1~mv2.png/v1/fit/w_776,h_230,q_90/2f8a00_5eb1781887fa4e6ba5c22cb9fb63dfa1~mv2.png" alt="">
            <img src="https://static.wixstatic.com/media/2f8a00_b5a2bd0b955e4d8d96cc48a9704fbc81~mv2.png/v1/fit/w_776,h_230,q_90/2f8a00_b5a2bd0b955e4d8d96cc48a9704fbc81~mv2.png" alt="">
        </div>
        <div class="container">
            <p class="title"><slot>
        </slot></p>
        <div class="video_container">
            <iframe loading="lazy" src="https://www.youtube.com/embed/vMG46UG_lqE" title="Cook&#39;n Rogue - Teaser" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        </div>
        <p>IIM 4th Year student game.<br>"Cook'n'Rogue" is an adventure roguelike game where you can cook your weapon to defeat enemies.<br>On this project, I did all the asset and music creation as well as the integration using Wwise and Unity. <br>You can download this game on the link below<br><a href="https://elecktro-punch.itch.io/cook">https://elecktro-punch.itch.io/cook</a></p>
        <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1638378745&color=%234d4d4d&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/zenisound" title="Zeni" target="_blank" style="color: #cccccc; text-decoration: none;">Zeni</a> · <a href="https://soundcloud.com/zenisound/sets/cooknrogue-ost" title="Cook&#x27;n&#x27;Rogue - OST" target="_blank" style="color: #cccccc; text-decoration: none;">Cook&#x27;n&#x27;Rogue - OST</a></div>
    </section>`,
    `<section class="folgore">
        <p class=title>Folgore</p>
        <div ref="carousel_container2" class="carousel_container2">
            <img src="https://static.wixstatic.com/media/2f8a00_ae8f14518e4640a691ba1fd7fbf4f6dc~mv2.png/v1/fit/w_776,h_230,q_90/2f8a00_ae8f14518e4640a691ba1fd7fbf4f6dc~mv2.png">
            <img src="https://static.wixstatic.com/media/2f8a00_2dcb93c5e0354e6fb5750041e4471b3a~mv2.jpg/v1/fit/w_776,h_230,q_90/2f8a00_2dcb93c5e0354e6fb5750041e4471b3a~mv2.jpg">
            <img src="https://static.wixstatic.com/media/2f8a00_5ac75db4d499422e96d4da167cc94036~mv2.png/v1/fit/w_776,h_230,q_90/2f8a00_5ac75db4d499422e96d4da167cc94036~mv2.png">
            <img src="https://static.wixstatic.com/media/2f8a00_9252b90b56ad484a9e6379c0d167af6e~mv2.jpg/v1/fit/w_776,h_230,q_90/2f8a00_9252b90b56ad484a9e6379c0d167af6e~mv2.jpg">
            <img src="https://static.wixstatic.com/media/2f8a00_a60d0d7950f44d16b684c0128604c62a~mv2.jpg/v1/fit/w_776,h_230,q_90/2f8a00_a60d0d7950f44d16b684c0128604c62a~mv2.jpg">
            <img src="https://static.wixstatic.com/media/2f8a00_33510f13ca0d429d954b22fd0504aa42~mv2.png/v1/fit/w_776,h_230,q_90/2f8a00_33510f13ca0d429d954b22fd0504aa42~mv2.png">
        </div>
        <p>ETPA student game. <br>"Folgore" is a top view fighting game inspired by dark comics and late 60s Italy. <br>On this project, I did all the asset and music creation as well as the integration using Wwise and Unity. <br>You can download this game on the link below <br> <a  href=" https://edouard-mordant.itch.io/folgore" target="_blank"> https://edouard-mordant.itch.io/folgore</a></p>
    </section>`,
    `<section class="raiders">
        <div class="container">
            <p  class="title">Raiders</p>
            <div class="video_container">
                <iframe loading="lazy" src="https://www.youtube.com/embed/bOLAoTgXRiU" title="Raiders Gameplay" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
        <p>Art FX 5th year student game.<br>"Raiders" competitive fast-FPS with parkour oriented movements.<br>On this project, I did the asset creation and the Audio Implementation using Unreal Engine 5 audio engine.<br>You can download this game on the link below <br> <a href="https://artfx-school.itch.io/raiders" target="_blank" rel="noopener noreferrer">https://artfx-school.itch.io/raiders</a></p>
    </section>`,
    `<section class="coulise">
        <div class="container">
        <p  class="title">Coulisses</p>
        <div class="video_container">
            <iframe loading="lazy" src="https://www.youtube.com/embed/bqEP5J3XuAM" title="Coulisses - Le jeu vidéo qui vous fait plonger dans les coulisses du théâtre" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        </div>
        <p>Art FX 4th year student game. <br>"Coulisses" is a mobile puzzle game made in collaboration with "le domaine d'O", a theater in Montpellier, France. <br> On this project, I only did the sound assets.</p>
        <a href="https://play.google.com/store/apps/details?id=com.Coulisses.Coulisses&hl=fr&gl=US">Click here to play the game</a>
    </section>`,
    `<section class="redplane">
        <div class="container">
        <p  class="title">RedPlane</p>
        <div class="video_container">
            <iframe loading="lazy" src="https://www.youtube.com/embed/_C52LerEw_M" title="Temanava - Demo Gameplay Trailer - Redplane Studio" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        </div>
        <p>IIM Paris 5th year student game under the name of "redplane studio" <br>On this project, I only did the sound assets. <br>You can try this adventure/exploration game for free on steam.</p>
        <a href="https://store.steampowered.com/app/2226000/Temanava/" target="blank">
            <svg  xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16"><g fill="currentColor" class="steam"><path d="M.329 10.333A8.01 8.01 0 0 0 7.99 16C12.414 16 16 12.418 16 8s-3.586-8-8.009-8A8.006 8.006 0 0 0 0 7.468l.003.006l4.304 1.769A2.198 2.198 0 0 1 5.62 8.88l1.96-2.844l-.001-.04a3.046 3.046 0 0 1 3.042-3.043a3.046 3.046 0 0 1 3.042 3.043a3.047 3.047 0 0 1-3.111 3.044l-2.804 2a2.223 2.223 0 0 1-3.075 2.11a2.217 2.217 0 0 1-1.312-1.568L.33 10.333Z"/><path d="M4.868 12.683a1.715 1.715 0 0 0 1.318-3.165a1.705 1.705 0 0 0-1.263-.02l1.023.424a1.261 1.261 0 1 1-.97 2.33l-.99-.41a1.7 1.7 0 0 0 .882.84Zm3.726-6.687a2.03 2.03 0 0 0 2.027 2.029a2.03 2.03 0 0 0 2.027-2.029a2.03 2.03 0 0 0-2.027-2.027a2.03 2.03 0 0 0-2.027 2.027Zm2.03-1.527a1.524 1.524 0 1 1-.002 3.048a1.524 1.524 0 0 1 .002-3.048Z"/></g></svg>
        </a>
    </section>`,
    `<section class="s_f">
        <div class="container">
        <p  class="title">Speat't fighter</p>
        <div class="video_container">
            <iframe loading="lazy" src="https://www.youtube.com/embed/NB882oCJtz0" title="Sp&#39;eat fighter - Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        </div>
        <p>IIM Paris 3rd year student couch game. <br>On this project, I only did the sound assets. <br>You can play this game on the link below : <br> <a href="https://stephane-murca.itch.io/speat-fighter" target="_blank" rel="noopener noreferrer">https://stephane-murca.itch.io/speat-fighter</a> </p>

    </section>`

]



    const message = 'Game Audio'
    const urls =[
        'https://www.youtube.com/embed/vMG46UG_lqE',
        `https://www.youtube.com/embed/bOLAoTgXRiU`,
        `https://www.youtube.com/embed/bqEP5J3XuAM`,
        'https://www.youtube.com/embed/_C52LerEw_M',
        'https://www.youtube.com/embed/NB882oCJtz0'
    ]
    const video_titles =[
        'Cook&#39;n Rogue - Teaser',
        'Raiders Gameplay',
        'Coulisses - Le jeu vidéo qui vous fait plonger dans les coulisses du théâtre',
       'Temanava - Demo Gameplay Trailer - Redplane Studio',
       'Sp&#39;eat fighter - Trailer'
    ]

    
    
    let carouselContainer 
    let carouselContainer2

    onMounted(() => {
        setTimeout(() => {
        carouselContainer = document.querySelector('.carousel_container') as HTMLElement
        carouselContainer2 = document.querySelector('.carousel_container2') as HTMLElement
        if (carouselContainer) {
            new Carousel(carouselContainer, {
                slidesToScroll: 3,
                slidesVisible: 3,
                loop:true
            }) 
        }
        if (carouselContainer2) {
            new Carousel(carouselContainer2, {
                slidesToScroll: 2,
                slidesVisible: 2,
                loop:true

            }) 
        }
        }, 100)
    })

    let isMobile = ref(window.innerWidth <= 700)
    
    let thumbnailUrls: Ref<(string)[]> = ref([])
    thumbnailUrls.value.push('https://static.wixstatic.com/media/2f8a00_1b0c003a0c0e414a9f912f21be67fa0a~mv2.png/v1/fit/w_776,h_230,q_90/2f8a00_1b0c003a0c0e414a9f912f21be67fa0a~mv2.png')
    thumbnailUrls.value.push('https://static.wixstatic.com/media/2f8a00_ae8f14518e4640a691ba1fd7fbf4f6dc~mv2.png/v1/fit/w_776,h_230,q_90/2f8a00_ae8f14518e4640a691ba1fd7fbf4f6dc~mv2.png')
    thumbnailUrls.value.push(returnThumbnailOfVideo('https://www.youtube.com/embed/bOLAoTgXRiU'))
    thumbnailUrls.value.push(returnThumbnailOfVideo('https://www.youtube.com/embed/bqEP5J3XuAM'))
    thumbnailUrls.value.push(returnThumbnailOfVideo('https://www.youtube.com/embed/_C52LerEw_M'))
    thumbnailUrls.value.push(returnThumbnailOfVideo('https://www.youtube.com/embed/NB882oCJtz0'))

    window.addEventListener('resize', () => {
        isMobile.value = window.innerWidth <= 700
    })

    const names = [
    "Cook'n Rogue",
    'Folgore',
    'Raiders',
    "Coulisses",
    "Temanava - RedPlane Studio",
    "Sp'eat Fighter"
  ]

  let overlayIsVisible = ref(false)
  let sectionToShow = ref('')

  let scrollPosition = 0

  const showOverlay = (index: number) => {
    scrollPosition = window.scrollY

    sectionToShow.value = sections[index]

    overlayIsVisible.value = true
    document.body.style.overflow = 'hidden'
    // carousel
    setTimeout(() => {
        carouselContainer = document.querySelector('.carousel_container') as HTMLElement
     carouselContainer2 = document.querySelector('.carousel_container2') as HTMLElement
    if (carouselContainer) {
        new Carousel(carouselContainer, {
            slidesToScroll: 3,
            slidesVisible: 3,
            loop:true
        }) 
    }
    if (carouselContainer2) {
        new Carousel(carouselContainer2, {
            slidesToScroll: 2,
            slidesVisible: 2,
            loop:true

        }) 
    }
    }, 100);
    }
    

    const closeOverlay = () => {
    overlayIsVisible.value = false
    document.body.style.overflow = ''
    window.scrollTo(0, scrollPosition)
    }

</script>


<style scoped lang="scss">
@import '../../style/works/gameAudio.scss';


// overlay

    .overlay_container{
        background-color : rgba(0, 0, 0, .9);
        position: fixed;
        top:0;
        bottom:0;
        left:0;
        right:0;
        z-index: 10000;
        color: white;
        height: 100000px
    }

    .overlay_scroling{
        max-height: 100vh;
        padding-top: 3.5rem;
        padding-bottom: 3.5rem;
        overflow-y: auto;

    }

    .close{
        cursor: pointer;
        position: fixed;
        right: 10vmin;
        height: 8vmin;
        width: 8vmin;
    }
</style>