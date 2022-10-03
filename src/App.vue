<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 col-xl-2">
        <Navbar />
      </div>
      <div class="col-12 col-xl-10">
        <Home />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Certifications />
        <Achievements />
        <Activities />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Activities from "./components/Activities.vue";
import Education from "./components/Education.vue";
import Experience from "./components/Experience.vue";
import Home from "./components/Home.vue";
import Navbar from "./components/Navbar.vue";
import Projects from "./components/Projects.vue";
import Skills from "./components/Skills.vue";
import Certifications from "./components/Certifications.vue";
import Achievements from "./components/Achievements.vue";
</script>

<style scoped></style>
