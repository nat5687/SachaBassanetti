<template>
    <router-link class="goback" to="/works">
        <p>Go Back</p>
        <svg  xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="currentColor" d="M9.575 13L12 17.25q.2.35-.075.613t-.625.062L3.325 12.85q-.475-.3-.475-.85t.475-.85L11.3 6.075q.35-.2.625.063T12 6.75L9.575 11H21q.425 0 .713.288T22 12q0 .425-.288.713T21 13H9.575Z"/></svg>
    </router-link>
</template>

<style scoped lang="scss">
@import '../style/_variables';

    .goback{
        position: fixed;
        bottom: 0;
        left: 0;
        z-index: 100;
        background-color: $primary-color;
        display: flex;
        align-items: center;
        padding: 0.4em;
        margin: 0 0 10vh 5vmin;
    }
    svg{
        color: white;
        height: 5vmin;
        width: 5vmin;
    }
    p{
        color: $font-color;
        margin-right: 0.5em;
        line-height: 0;
        font-size: 4vmin;
    }
</style>