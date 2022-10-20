<template>
  <div id="contact" class="pt-5 row justify-content-center page">
    <div class="central-box flex-column">
      <Heading class="pb-4">Want to know more?</Heading>
      <h4 class="fw-light">
        Why don’t send an
        <a
          href="mailto:parvezmrobin@gmail.com"
          class="text-pink text-decoration-none"
          >email</a
        >
        and let’s talk.
        <img src="/thinking.gif" alt="I Wonder!" style="height: 40px" />
      </h4>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Heading from "./Heading.vue";
</script>

<style lang="css">
#contact {
  --central-box-margin-top-ratio: 0.2;
}
</style>
