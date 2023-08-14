<template>
    <main>
        <above-scroll :textProp="message"></above-scroll>
      <h1>
        Contact me
      </h1>
      <back-arrow></back-arrow>

    </main>
</template>

<script setup lang="ts">
import aboveScroll from '../../components/aboveScroll.vue'
import backArrow from '../../components/backArrow.vue' 

const message = 'Re Sound Design'
</script>