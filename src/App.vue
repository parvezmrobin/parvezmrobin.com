<template>
  <div class="container">
    <Navbar />
    <Home />
    <Skills />
    <Experience />
    <Certifications />
  </div>
</template>

<script setup lang="ts">
import Experience from "./components/Experience.vue";
import Home from "./components/Home.vue";
import Navbar from "./components/Navbar.vue";
import Skills from "./components/Skills.vue";
import Certifications from "./components/Certifications.vue";
</script>

<style scoped></style>
