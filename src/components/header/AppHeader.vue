<template>
    <header>
        <div class="header_top">
            <img src="../../assets/logo-removebg-preview.png" alt="">
            <div class="burger">
                <a @click.prevent="showMenu" v-if="menuIsHidden" href="#" class="menu-burger"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="black" d="M3 18v-2h18v2H3Zm0-5v-2h18v2H3Zm0-5V6h18v2H3Z"/></svg></a>
            <a @click.prevent="hideMenu" v-if="!menuIsHidden" href="#" class="menu-burger"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="black" d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z"/></svg></a>
            </div>
            <div class='navbar'>
                <ul >
                <router-link @click.prevent="hideMenu"  to="/" href="#"><li>Home</li></router-link>
                <router-link @click.prevent="hideMenu"  to="/works" href="#"><li>Works</li></router-link>
                <router-link @click.prevent="hideMenu"  to="/about" href="#"><li>About</li></router-link>
                <router-link @click.prevent="hideMenu"  to="/contact" href="#"><li>Contact</li></router-link>
                </ul>
            </div>
        </div>
        <overlay-header @redirect='hideMenu' v-if="!menuIsHidden"></overlay-header>
    </header>
</template>

<script setup lang="ts">
    import overlayHeader from './overlayHeader.vue';
    import {ref} from 'vue'

    const menuIsHidden = ref(true)


    const html = document.querySelector('html')

        const showMenu = () => {
        html?.classList.add('u-no-scroll')
        menuIsHidden.value = false

        }
        const hideMenu = () => {
            html?.classList.remove('u-no-scroll')
            menuIsHidden.value = true
        }
    
    
</script>



<style scoped lang="scss">
@import '../../style/variables';
header{
    font-family: $first-font;
}

    .header_top{
        position: fixed;
        background-color: $primary-color;
        width: 100vw;
        top: 0;

        display: flex;
        align-items: center;
        justify-content:space-between ;
        z-index: 1000;
    }


    img{
        height: 12vmin;
        min-height: 70px;
        margin-left:20px;
        padding: 5px 0;
    }

    .menu-burger{
        float: right;
        margin: 0 30px 0 0;
    }

    ul{
        position: relative;
        list-style: none;
        font-size: 5vmin;
        display: flex;

        li{
            color: $font-color;
            margin-left: 1em;

        }
    }
    

    @media screen and (min-width: 700px){
        .burger{
            display:none;
        }

        .header_top{
            justify-content: space-around;
        }
    }

    @media screen and (max-width: 700px){
        .navbar{
            display:none;
        }
    }


</style>