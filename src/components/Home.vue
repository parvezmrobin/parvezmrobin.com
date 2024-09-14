<template>
  <div id="home">
    <div
      class="d-flex flex-column flex-lg-row justify-content-center align-items-center"
      style="min-height: 100vh"
    >
      <div class="d-none d-md-block position-relative me-5">
        <picture>
          <source type="image/webp" srcset="/propic.webp" />
          <source type="image/jpeg" srcset="/propic.jpg" />
          <img
            src="/propic.jpg"
            alt="It's me"
            class="rounded-circle"
            style="width: 200px"
          />
        </picture>
        <div
          class="bg-circle position-absolute rounded-circle h-100 w-100"
          style="left: -5px; top: 5px"
        />
      </div>
      <div style="max-width: 750px">
        <div class="d-flex align-items-center">
          <div style="min-width: 200px">
            <h4 class="d-none d-sm-block fw-light">Hey! I am</h4>
            <h4 class="d-sm-none fw-light">Hey! I am</h4>
            <div class="row flex-column flex-sm-row align-items-sm-end">
              <div class="col-auto">
                <div class="d-none d-sm-block display-2">Parvez M Robin</div>
                <div class="d-sm-none display-5">Parvez M Robin</div>
              </div>
              <div class="col-md-auto">
                <h2 class="d-none d-md-block ms-2">(He/Him)</h2>
                <h5 class="d-md-none">(He/Him)</h5>
              </div>
            </div>
            <h2 id="title" class="d-none d-sm-block fw-light"></h2>
            <h5 id="titleMobile" class="d-sm-none fw-light"></h5>
          </div>
          <div class="d-block d-md-none mt-3">
            <picture>
              <source type="image/webp" srcset="/propic.webp" />
              <source type="image/jpeg" srcset="/propic.jpg" />
              <img
                src="/propic.jpg"
                alt="It's me"
                class="rounded-circle"
                style="width: 100%; max-width: 200px"
              />
            </picture>
          </div>
        </div>
        <p class="font-monospace mt-3">
          parvezmrobin<span class="text-muted">[at]</span>gmail<span
            class="text-muted"
            >[dot]</span
          >com
        </p>

        <div class="mt-3" style="text-align: justify">
          <p>
            As a polyglot software engineer with a strong background in software
            development and machine learning, my experience includes firsthand
            work with <code>C++</code>, <code>Go</code>, <code>Python</code>,
            and <code>TypeScript</code> for over three years.
          </p>
          <p>
            Currently, I am a machine learning engineer at
            <a
              href="https://eda.sw.siemens.com/en-US/trending-technologies/eda-ai-page/"
              target="_blank"
              >Siemens EDA AI</a
            >
            – creating next generation AI platform for Electronic Design
            Automation (EDA).
          </p>
        </div>

        <div
          v-show="false"
          class="mt-4"
          style="word-spacing: -0.05rem; color: var(--bs-yellow)"
        >
          Discover what I can bring to the table —
          <a
            class="fst-italic"
            style="color: currentColor"
            href="https://drive.google.com/file/d/14RiWaMnAW_yYGa54Mf-wfLQ5J4hOsGIC/view?usp=sharing"
            target="_blank"
            >Take a look at my Résumé</a
          >.
        </div>

        <div class="d-flex pt-3">
          <div class="border horizontal" />
          <Links />
        </div>
      </div>
    </div>

    <Transition name="slide-fade">
      <div
        v-if="!inHomePage"
        class="side-links-wrapper position-fixed"
        style="left: 2rem; bottom: 0"
      >
        <div class="d-flex flex-column align-items-center">
          <Links />
          <div class="link-extension" />
        </div>
      </div>
    </Transition>

    <Transition name="slide-fade">
      <div
        v-if="!inHomePage"
        class="floating-email position-fixed"
        style="right: 1rem; bottom: 0.5rem"
      >
        <div class="d-flex align-items-center">
          <div class="me-2">
            <span class="font-monospace"
              >parvezmrobin<span class="text-muted">[at]</span>gmail<span
                class="text-muted"
                >[dot]</span
              >com</span
            >
          </div>
          <div
            class="border"
            style="width: 7.5rem; height: 0; margin-right: 1rem"
          />
        </div>
      </div>
    </Transition>
  </div>
</template>
<script lang="ts" setup>
import type { TypewriterState } from "typewriter-effect";
import Typewriter from "typewriter-effect/dist/core";
import { onBeforeUnmount, onMounted } from "vue";
import { inHomePage } from "../util";
import Links from "./Links.vue";

const scrollEventHandler = (event: Event) => {
  const mouseEvent = event as MouseEvent;
  inHomePage.value =
    (mouseEvent.relatedTarget as HTMLAnchorElement).hash === "#home";
};

onMounted(() => {
  const scrollEl = document.getElementById("app") as HTMLDivElement;
  scrollEl.addEventListener("activate.bs.scrollspy", scrollEventHandler);

  const typewriters = [
    new Typewriter("#title"),
    new Typewriter("#titleMobile"),
  ];
  for (const typewriter of typewriters) {
    typewriter
      .typeString("I make machines intelligent")
      .start()
      .callFunction(({ elements }: TypewriterState) =>
        elements.cursor.remove(),
      );
  }
});

onBeforeUnmount(() => {
  const scrollEl = document.getElementById("app") as HTMLDivElement;
  scrollEl.removeEventListener("activate.bs.scrollspy", scrollEventHandler);
});
</script>

<style lang="scss">
a {
  color: var(--bs-teal);
}

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

.border.horizontal {
  flex-grow: 1;
  max-width: 7.5rem;
  height: 0;
  margin-top: calc(1rem + 1px);
  margin-right: 1rem;
}

.floating-email {
  display: none;
  @media screen and (min-width: 1850px) {
    display: block;
  }

  a {
    text-decoration: none;

    &:hover,
    &:focus,
    &:active {
      text-decoration: underline;
    }
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

  &.floating-email {
    transform: translateX(350px);
  }
}

.side-links-wrapper {
  display: none;

  @media screen and (min-width: 1150px) {
    display: block;
  }
}

.link-extension {
  border: var(--bs-border-width) var(--bs-border-style) var(--bs-border-color);
  width: 0;
  margin-right: 1rem;
  // making sure links doesn't overlap with navbar
  height: min(7.5rem, calc(100vh - 625px));
}
</style>
