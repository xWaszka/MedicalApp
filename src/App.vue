<template>
  <Navigation class="fixed-top" />
  <div class="main-content">
    <router-view />
  </div>
  <FlashMessage />
</template>

<script setup>
import Navigation from '@/components/Navigation.vue'
import FlashMessage from '@/components/FlashMessage.vue'
</script>

<style scoped>
.fixed-top {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
}

.main-content {
  padding-top: 56px;
}
</style>
