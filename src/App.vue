<script setup lang="ts">
  import AppHeader from './components/header/appHeader.vue';
  import appFooter from './components/appFooter.vue';
</script>

<template>
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
</template>