<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
//import Navigation from './components/Navigation.vue'
import Framework from './components/Framework.vue'
</script>

<template>
  <main id="﹟main">
    <Header />

    <!--<Navigation />-->
    <div id="﹟content" class="♹ ♹♺ ◬">
      <article id="﹟article">
        <RouterView />
        <Footer msg="Out ambition is unlimited." />
        <!--<Framework />-->
        <line x2="100%" y2="100%" stroke="orange" stroke-dasharray="20%" stroke-width="150%"></line>
      </article>
    </div>
  </main>
</template>