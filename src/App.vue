<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 col-xl-2 col-xxl-1">
        <Navbar />
      </div>
      <div class="col-12 col-xl-10 col-xxl-11">
        <Home />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Certifications />
        <Achievements />
        <Activities />
        <Contact />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Achievements from "./components/Achievements.vue";
import Activities from "./components/Activities.vue";
import Certifications from "./components/Certifications.vue";
import Contact from "./components/Contact.vue";
import Education from "./components/Education.vue";
import Experience from "./components/Experience.vue";
import Home from "./components/Home.vue";
import Navbar from "./components/Navbar.vue";
import Projects from "./components/Projects.vue";
import Skills from "./components/Skills.vue";
</script>

<style scoped></style>
