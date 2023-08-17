<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav>
    <RouterLink class="links" to="/"> Home</RouterLink>
    <RouterLink class="links" to="/columns"> Columns</RouterLink>
    <RouterLink class="links" to="/administration"> Administration</RouterLink>
    <RouterLink class="links" to="/modal"> Modal</RouterLink>
    <RouterLink class="links" to="/modalTS"> modalTS</RouterLink>
    <RouterLink class="links" to="/signin"> Sign In</RouterLink>
  </nav>

  <main>
    <RouterView />
  </main>
</template>

<style scoped>
.links {
  margin-left: 20px;
  color: white;
}
</style>
