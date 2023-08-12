<template>
    <div>
      <above-scroll :textProp="message"></above-scroll>
    </div>
  </template>
  
  
  <script setup lang="ts">
    import aboveScroll from '../components/aboveScroll.vue'
    const message = 'Works'
  </script>