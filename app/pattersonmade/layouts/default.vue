<template>
  <div class="page-container">
    <Navbar />
    <slot />
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
// Generic Nuxt layout: renders the current page
</script>

<style scoped>
.page-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
