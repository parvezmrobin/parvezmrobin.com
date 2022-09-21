<template>
  <div id="home" class="vh-100">
    <div class="d-flex justify-content-center align-items-center h-100">
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
        <a href="mailto:parvezmrobin@gmail.com" style="color: var(--bs-pink)">
          parvezmrobin@gmail.com
        </a>
        <div class="mt-4" style="text-align: justify">
          I am a polyglot machine learning engineer with extensive experience in
          web application and deep learning. I worked as a software engineer for
          more than two years with hands-on experience in
          <code>node.js</code>, <code>Vue JS</code>, <code>TypeScript</code> and
          <code>Mongo DB</code>. Currently, as a part of pursuing my Master's in
          Computer Science degree at Dalhousie University, I am working as a
          <em>Research Intern</em> at
          <a href="https://metabob.com/">Metabob</a>. My research domain
          includes <em>Software Engineering</em>, <em>Deep Learning</em> and
          <em>Natural Language Processing</em>.
        </div>

        <div class="d-flex d-lg-none pt-3">
          <div
            class="border"
            style="
              width: 7.5rem;
              height: 0;
              margin-top: 1.25rem;
              margin-right: 1rem;
            "
          />
          <Links />
        </div>
      </div>
    </div>

    <div
      class="d-none d-lg-block position-absolute"
      style="left: 1rem; bottom: 0"
    >
      <div class="d-flex flex-column align-items-center">
        <Links />
        <div
          class="border"
          style="height: 7.5rem; width: 0; margin-right: 1rem"
        />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import Typewriter from "typewriter-effect/dist/core";
import { onMounted } from "vue";
import Links from "./Links.vue";

onMounted(() => {
  new Typewriter("#title").typeString("I make machines intelligent").start();
});
</script>
