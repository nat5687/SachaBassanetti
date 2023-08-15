<script setup lang="ts">
  import AppHeader from './components/header/AppHeader.vue';
  import AppFooter from './components/AppFooter.vue';
</script>

<template>
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
</template>