<template>
    <main>
      <above-scroll :textProp="message"></above-scroll>
      <h1>
        Contact me
      </h1>
      <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
        <input type="hidden" name="form-name" value="contact" />
        <div class='grid'>
        <input name="Nom" type="text" placeholder="Name" required>
        <input name="Email" type="text" placeholder="Email" required>
          <textarea name="Message" id="" cols="30" rows="10" placeholder="Your message" required></textarea>
        </div>
        <button>Send</button>
      </form>

    </main>
  </template>
  
  
  <script setup lang="ts">
    import aboveScroll from '../components/aboveScroll.vue'
    const message = 'Contact'
  </script>


<style scoped lang="scss">
  @import '../style/contact.scss';

</style>