<template>
  <div class="container">
    <Navbar />
    <Home />
    <Skills />
    <Experience />
    <Education />
    <Certifications />
    <Achievements />
    <Activities />
  </div>
</template>

<script setup lang="ts">
import Activities from "./components/Activities.vue";
import Education from "./components/Education.vue";
import Experience from "./components/Experience.vue";
import Home from "./components/Home.vue";
import Navbar from "./components/Navbar.vue";
import Skills from "./components/Skills.vue";
import Certifications from "./components/Certifications.vue";
import Achievements from "./components/Achievements.vue";
</script>

<style scoped></style>
