<template>
    <main>
      <above-scroll :textProp="message"></above-scroll>
      <h1>
        Contact me
      </h1>
      <form action="">
        <input type="text" placeholder="fullname">
        <input type="text" placeholder="Email">
        <textarea name="" id="" cols="30" rows="10" placeholder="Your message"></textarea>
      </form>
      <button>Send</button>
    </main>
  </template>
  
  
  <script setup lang="ts">
    import aboveScroll from '../components/aboveScroll.vue'
    const message = 'Contact'
  </script>


<style scoped lang="scss">
  @import '../style/contact.scss';
</style>