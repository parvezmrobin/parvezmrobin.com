<template>
  <CentralBox
    title="Testimonials"
    :topMarginRatio="0.075"
    maxWidth="var(--bs-breakpoint-md)"
  >
    <div
      class="shadow-lg rounded py-3"
      style="background-color: var(--bs-purple-900)"
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

        <button
          type="button"
          class="btn ms-auto d-flex align-items-center"
          data-bs-toggle="modal"
          data-bs-target="#deno"
        >
          <i class="devicon-denojs-original fs-3"></i>
        </button>
      </div>
    </div>

    <div
      id="deno"
      class="modal fade"
      tabindex="-1"
      aria-labelledby="denoModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div
          class="modal-content"
          style="background-color: var(--bs-purple-800)"
        >
          <div class="modal-header">
            <h1 id="denoModalLabel" class="modal-title fs-5">
              Sad Story of A Dino
            </h1>
            <button
              type="button"
              class="btn-close btn-close-white"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <p style="text-align: justify">
              One of my friends, dino, volunteered to rearrange the contents of
              this site. As she is a dino with a prehistoric sense of humour,
              she didn’t catch the sarcasm in the <em>Testimonials</em> section.
              So, she rewrote the whole thing which was really better (compared
              to AI).
            </p>
            <p>Let’s keep a minute of silence for that pure little dino.</p>
          </div>
        </div>
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
      profile
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
