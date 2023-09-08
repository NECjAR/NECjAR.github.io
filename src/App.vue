<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Footer from './components/Footer.vue'
import Navigation from './components/Navigation.vue'
</script>

<template>
  <header>
  </header>

  <footer>
    <Navigation />
    
    <div class="wrapper">
      <Footer msg="Out ambition is unlimited." />
    </div>
  </footer>

  <RouterView />
</template>

<style scoped>
header,
footer {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}
</style>
