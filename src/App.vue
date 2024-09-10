<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 col-xl-2 col-xxl-1">
        <Navbar :navs="Object.keys(components)" />
      </div>
      <div class="col-12 col-xl-10 col-xxl-11">
        <!--suppress JSValidateTypes -->
        <Component
          :is="component_"
          v-for="(component_, componentName) in components"
          :key="componentName"
        />
        <Testimonials />
        <Contact />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Achievements from "./components/Achievements.vue";
import Activities from "./components/Activities.vue";
import Talks from "./components/Talks.vue";
import Certifications from "./components/Certifications.vue";
import Contact from "./components/Contact.vue";
import Education from "./components/Education.vue";
import Experience from "./components/Experience.vue";
import Home from "./components/Home.vue";
import Navbar from "./components/Navbar.vue";
import Projects from "./components/Projects.vue";
import Publications from "./components/Publications.vue";
import Skills from "./components/Skills.vue";
import Testimonials from "./components/Testimonials.vue";

const components = {
  Home,
  Skills,
  Experience,
  Publications,
  Activities,
  Talks,
  Education,
  Projects,
  Achievements,
  Certifications,
};
</script>
