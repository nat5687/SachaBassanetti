<template>
    <div>
        <ul :style="`flex-direction: ${flexDirection}; font-size: ${fontSize}vmin`">
        <router-link @click.prevent="redirect"  to="/" href="#"><li>Home</li></router-link>
        <router-link @click.prevent="redirect"  to="/works" href="#"><li>Works</li></router-link>
        <router-link @click.prevent="redirect"  to="/about" href="#"><li>About</li></router-link>
        <router-link @click.prevent="redirect"  to="/contact" href="#"><li>Contact</li></router-link>
        </ul>
    </div>
</template>

<script setup lang="ts">

    const emit = defineEmits()
    const redirect = () => {
        emit('redirect')
    }

    const {flexDirection, fontSize} = defineProps({
        flexDirection: String,
        fontSize: String
    })

</script>

<style scoped lang="scss">
@import '../style/style.scss';
@import '../style/variables';
    ul{
        position: relative;
        list-style: none;
        font-size: 10vmin;
        display: flex;

        li{
            color: $callToAction;
            margin-top: 0.5em;

        }
    }
</style>