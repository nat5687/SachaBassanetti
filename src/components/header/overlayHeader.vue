<template>
    <div>
        <ul>
            <a href="#"><li>Home</li></a>
            <a href="#"><li>Works</li></a>
            <a href="#"><li>About</li></a>
            <a href="#"><li>Contact</li></a>
        </ul>
    </div>
</template>

<style scoped lang="scss">
@import url(../../_variables.scss);
    div{
        height: 100vh;
        width: 100vw;
        background-color: rgb(88, 88, 69);
        position: fixed;
        z-index: -1;
        z-index: 100;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    ul{
        position: relative;
        list-style: none;
        font-size: 10vmin;
        li{
            color: rgb(47, 38, 22);
            margin-top: 0.5em;

        }
        a{
            text-decoration: none;

        }
    }
</style>