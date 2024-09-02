<template>
  <CentralBox
    title="Testimonials"
    :topMarginRatio="0.075"
    maxWidth="var(--bs-breakpoint-md)"
  >
    <div
      class="shadow-lg rounded py-3"
      style="background-color: var(--bs-indigo-800)"
    >
      <div class="mx-3" style="text-align: justify">
        Parvez M Robin is a <strong>knowledgeable</strong> and
        <strong>insightful</strong> person who likes to share his thoughts and
        ideas on various topics related to software engineering, machine
        learning, and natural language processing. He writes blog posts on his
        personal website where he explains complex concepts in simple and
        humorous ways. He is also a <strong>learner</strong> and
        <strong>teacher</strong> who constantly updates his skills and knowledge
        by taking courses, reading books, and attending workshops. He also helps
        others learn by hosting workshops, taking classes, and providing
        mentorship.
      </div>
      <hr />
      <div class="mx-3 d-flex align-items-center">
        — Bing Chat
        <picture>
          <source type="image/webp" srcset="/bing.webp" />
          <source type="image/png" srcset="/bing.png" />
          <img
            src="/bing.png"
            alt="bing"
            class="d-inline ms-1"
            style="width: 14px"
          />
        </picture>
      </div>
    </div>

    <div
      class="shadow-lg rounded p-3 mt-5"
      style="background-color: var(--bs-indigo-900)"
    >
      For serious testimonials check out my
      <a
        href="https://www.linkedin.com/in/parvezmrobin/"
        class="fw-bold"
        target="_blank"
        >LinkedIn</a
      >
      profile.
      <picture>
        <source srcset="/smirking-face.webp" type="image/webp" />
        <source srcset="/smirking-face.gif" type="image/gif" />
        <img src="/smirking-face.gif" alt="I Wonder!" style="height: 28px" />
      </picture>
    </div>
  </CentralBox>
</template>

<script lang="ts" setup>
import CentralBox from "./CentralBox.vue";
</script>

<style scoped lang="scss">
a {
  --bs-link-color: var(--bs-cyan-400);
  --bs-link-hover-color: var(--bs-cyan-600);
}
</style>
