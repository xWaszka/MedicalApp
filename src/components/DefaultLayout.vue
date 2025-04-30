<template>
  <Navigation />
  <main>
    <router-view />
  </main>
  <FlashMessage />

  <Footer />
</template>


<script setup>
  import Navigation from '@/components/Navigation.vue'
  import FlashMessage from '@/components/FlashMessage.vue'
  import Footer from '@/components/Footer.vue'
</script>