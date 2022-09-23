<template>
  <div id="home" class="vh-100">
    <div class="d-flex justify-content-center align-items-center h-100">
      <div class="d-none d-lg-block position-relative me-5">
        <img
          class="rounded-circle"
          style="width: 200px; z-index: 1"
          src="/propic.jpg"
          alt="It's me"
        />
        <div
          class="bg-circle position-absolute rounded-circle h-100 w-100"
          style="left: -5px; top: 5px"
        ></div>
      </div>
      <div style="max-width: 750px">
        <h4 class="fw-light">Hey! I am</h4>
        <div class="d-flex align-items-end">
          <div class="display-2">Parvez M Robin</div>
          <div class="h2 fw-light ms-2 pb-1">(He/Him)</div>
        </div>
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

        <div class="d-flex pt-3">
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

    <Transition name="slide-fade">
      <div
        v-if="showLeftLinks"
        class="d-none d-lg-block position-fixed"
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
    </Transition>
  </div>
</template>
<script lang="ts" setup>
import type { TypewriterState } from "typewriter-effect";
import Typewriter from "typewriter-effect/dist/core";
import { onBeforeUnmount, onMounted, ref } from "vue";
import Links from "./Links.vue";

const showLeftLinks = ref(false);
const scrollEventHandler = (event: Event) => {
  const mouseEvent = event as MouseEvent;
  showLeftLinks.value =
    (mouseEvent.relatedTarget as HTMLAnchorElement).hash !== "#home";
};
onMounted(() => {
  const scrollEl = document.getElementById("app") as HTMLDivElement;
  scrollEl.addEventListener("activate.bs.scrollspy", scrollEventHandler);
  const typewriter = new Typewriter("#title");
  typewriter
    .typeString("I make machines intelligent")
    .start()
    .callFunction(({ elements }: TypewriterState) => elements.cursor.remove());
});
onBeforeUnmount(() => {
  const scrollEl = document.getElementById("app") as HTMLDivElement;
  scrollEl.removeEventListener("activate.bs.scrollspy", scrollEventHandler);
});
</script>

<style lang="scss">
.rounded-circle {
  border: 10px solid #0c2a3a;
}

.bg-circle {
  transition: 500ms ease-in-out;
  &:hover {
    left: 5px !important;
    top: -5px !important;
  }
}

.slide-fade-enter-active {
  transition: all 1s ease-out;
}

.slide-fade-leave-active {
  transition: all 1s ease-in;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(350px);
}
</style>
