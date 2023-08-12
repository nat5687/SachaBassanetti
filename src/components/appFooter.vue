<script setup lang="ts">
import socialMedias from './socialMedias.vue';
</script>

<template>
    <footer>
        <div>
            <ul>
                <router-link to="/" href="#"><li>Home</li></router-link>
                <router-link to="/works" href="#"><li>Works</li></router-link>
                <router-link to="/about" href="#"><li>About</li></router-link>
                <router-link to="/contact" href="#"><li>Contact</li></router-link>
            </ul>
        </div>
        <social-medias></social-medias>
        <div class="contact_him">
            <div>Email: <a  class="callToAction" href="" target="_blank" rel="noopener noreferrer">bassanetti.sacha.pro@gmail.com</a></div>
            <div>Phone: <a  class="callToAction" href="" target="_blank" rel="noopener noreferrer">07.78.55.21.18</a></div>
        </div>
        <div class="contact_me">Created and designe by <span class="callToAction" >Nathan Basanetti</span></div>
        <div class="contact_me">Email :<span class="callToAction" > nt.bassanetti@gmail.com</span></div>
    </footer>
</template>

<style scoped lang="scss">
@import  '../style/variables';
@import '../style/variables';
    footer{
        width: 100%;
        background-color: $inverted-bgColor;
        padding: 1em 0 3em 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 3em;
        color: white;
        text-align: center;
    }

    .navbar_container{
        font-size: 5vmin;
    }

    ul{
        position: relative;
        list-style: none;
        font-size: 5vmin;
        display: flex;
        flex-direction: row;

        li{
            color: $callToAction;
            margin-top: 0.5em;
            margin-right: 1em;

        }
    }

    .callToAction {
        color: $callToAction;
    }

    .contact_him{
        margin: 1em;
    }
    
    .contact_me{
        font-size: 3vmin;
    }
   
</style>