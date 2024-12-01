<template>
  <div>
    <Navbar />
    <router-view />
    <Footer />
    <Live2d />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import router from './router';
import Live2d from './components/Live2d.vue';
</script>
