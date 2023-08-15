<template>
    <div>
        <navbar @redirect="redirect" :flex-direction="'column'"></navbar>
    </div>
</template>

<script setup lang="ts">
    import navbar from '../navbar.vue';

    const emit = defineEmits()
    const redirect = () => {
        emit('redirect')
    }

</script>


<style scoped lang="scss">
@import '../../style/variables';
    div{
        height: 100vh;
        width: 100vw;
        background-color: $inverted-bgColor;
        position: fixed;
        z-index: -1;
        z-index: 100;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    @media screen and (min-width: 700px){
        div{
            display: none
        }
    }
</style>