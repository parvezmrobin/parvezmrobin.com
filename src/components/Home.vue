<template>
  <div class="container">
    <Navbar />
    <div class="col-sm"></div>
    <div
      id="home"
      class="d-flex justify-content-center align-items-center vh-100"
    >
      <div class="d-none d-lg-block me-5">
        <img
          class="border border-5"
          style="width: 200px; border-radius: 50%"
          src="/propic.jpg"
          alt="It's me"
        />
      </div>
      <div style="max-width: 750px">
        <h4 class="fw-light">Hey! I am</h4>
        <div class="display-2">Parvez M Robin</div>
        <h2 id="title" class="fw-light">Software Engineer</h2>
        <div class="mt-4" style="text-align: justify">
          I am a polyglot machine learning engineer with extensive experience in
          web application and deep learning. I worked as a software engineer for
          more than two years with hands-on experience in <code>node.js</code>,
          <code>Vue JS</code>, <code>TypeScript</code> and
          <code>Mongo DB</code>. Currently, as a part of pursuing my Master's in
          Computer Science degree at Dalhousie University, I am working as a
          <em>Research Intern</em> at
          <a href="https://metabob.com/">Metabob</a>. My research domain
          includes <em>Software Engineering</em>, <em>Deep Learning</em> and
          <em>Natural Language Processing</em>.
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Typewriter from "typewriter-effect/dist/core";
import { onMounted } from "vue";
import Navbar from "./Navbar.vue";

onMounted(() => {
  new Typewriter("#title").typeString("I make machines intelligent").start();
});
</script>
