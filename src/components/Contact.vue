<template>
  <CentralBox
    id="contact"
    title="Want to know more?"
    :topMarginRatio="0.2"
    maxWidth="var(--bs-breakpoint-md)"
  >
    <p class="fw-light mb-5">
      Why don’t you send an email to
      <span class="font-monospace fs-6"
        >parvezmrobin<span class="text-muted">[at]</span>gmail<span
          class="text-muted"
          >[dot]</span
        >com</span
      >
      and let’s talk.
      <picture>
        <source srcset="/thinking.webp" type="image/webp" />
        <source srcset="/thinking.gif" type="image/gif" />
        <img src="/thinking.gif" alt="I Wonder!" style="height: 35px" />
      </picture>
    </p>
  </CentralBox>
  <div class="text-center mb-2">
    <small>
      This website is built with
      <a href="https://v3.vuejs.org/" target="_blank" rel="noopener noreferrer"
        >Vue 3</a
      >,
      <a
        href="https://getbootstrap.com/"
        target="_blank"
        rel="noopener noreferrer"
        >Bootstrap 5</a
      >,
      <a
        href="https://www.typescriptlang.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        TypeScript
      </a>
      and
      <a href="https://vitejs.dev/" target="_blank" rel="noopener noreferrer"
        >Vite</a
      >. It is hosted on
      <a
        href="https://www.netlify.com/"
        target="_blank"
        rel="noopener noreferrer"
        >Netlify</a
      >. The source code is available on
      <a
        href="https://github.com/parvezmrobin/parvezmrobin.com"
        target="_blank"
        rel="noopener noreferrer"
        >GitHub</a
      >.
    </small>
  </div>
</template>

<script lang="ts" setup>
import CentralBox from "./CentralBox.vue";
</script>

<style scoped lang="scss">
p {
  font-size: 1.25rem;
  font-weight: lighter;
}

a {
  text-decoration: none;
  color: var(--bs-pink);
}
</style>
