<template>
    <div class='overlay_container'>
        <div class='overlay_scroling'>
            <svg @click.prevent='close' class='close' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59L7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12L5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"/></svg>
            <slot></slot>
        </div>
    </div>
</template>



<script setup lang='ts'>

    const emit = defineEmits()

    const close = () => {
        emit('close')
    }

</script>



<style scoped lang='scss'>
@import '../style/_variables.scss';

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


    //  linearAudio

section, main{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

section{
    border-bottom: solid 2px $inverted-bgColor;
    padding: 1em;
}

.text{
    text-align: center;
    margin: 2em auto 1em auto;
    font-size: 4vmin;
}

.container{
    width: 100%;
}
a{
    color:$font-color;
}

.title{
    font-size: 7vmin;
    margin: 2em auto 1em auto;
}

.img_container{
    width: clamp(0px, 90%, $max-width);
    display: flex;
    flex-direction: column;
    align-items: center;

    img{
        width: 100%;
        margin-bottom: 0.5em;
        object-fit: contain;
        max-height: $max-height;
    }
}


.mosaique-container{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: calc(100vw * 0.19) calc(100vw * 0.19);

    img{
        width: 100%;
        object-fit: cover;
        transition: filter .5s ease,opacity .5s ease,-webkit-filter .5s ease;
        transform-origin: center center; /* Centre de l'image */
    }
    
    .img-container:nth-child(1){
        
        img{
            transform: scale(1.5);
        }
    }
    .img-container:nth-child(2){
        
        img{
            transform: scale(1.8);
            transform-origin: left center; 
        }
    }
    
    .img-container:nth-child(3){
        
        img{
            transform: scale(1.7);
        }
    }
    
    .img-container:nth-child(4){

        img{
            transform: scale(1.7);
            transform-origin: left center; 
        }
    }

    .img-container:nth-child(5){

        img{
            transform: scale(1.5);
        }
    }
    
    


    .img-container{
        position: relative;
        display: flex;
        overflow: hidden;
        grid-column: span 2

        
    }
    .overlay{
        position: absolute;
        opacity: 0;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba($color: #000000, $alpha: 0.75);
        display: flex;
        align-items: center;
        justify-content: center;
        transition: filter .5s ease,opacity .5s ease,-webkit-filter .5s ease;
        cursor: pointer;

        h2{
            color: white;
            position: relative;
            font-size: 5vmin;
            
        }
    
        &:hover{
            opacity: 1;
        }
    }
}

.desktop{
    width: 100%;
}


@media screen and (min-width: 420px) {
    .img_container1{
        display: grid;
        grid-template-columns: 1fr 1fr ;
        margin-top: 4vmax;

        img:first-child{
            grid-row: 1 / 3;
            align-self: baseline;
            justify-self: end;
        }

        img{
            align-self: baseline;
            margin-bottom: 0;
            max-height: $max-height;
        }
    }
}



</style>