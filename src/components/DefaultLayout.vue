<template>
  <Navigation class="fixed-top" />
  <div class="main-content">
    <router-view />
  </div>
</template>

<script setup>
import Navigation from '@/components/Navigation.vue'
</script>

<style scoped>
.fixed-top {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
}

</style>