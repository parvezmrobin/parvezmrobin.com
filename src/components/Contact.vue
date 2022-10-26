<template>
  <CentralBox
    id="contact"
    title="Want to know more?"
    :topMarginRatio="0.2"
    maxWidth="var(--bs-breakpoint-md)"
  >
    <h4 class="fw-light mb-5">
      Why don’t you send an
      <a
        href="mailto:parvezmrobin@gmail.com"
        class="text-pink text-decoration-none"
        >email</a
      >
      and let’s talk.
      <img src="/thinking.gif" alt="I Wonder!" style="height: 40px" />
    </h4>
  </CentralBox>
</template>

<script lang="ts" setup>
import CentralBox from "./CentralBox.vue";
</script>
