<template>
  <div v-for="link in links" ref="rootEls" :key="link.icon" class="link-icon">
    <a
      :href="link.link"
      target="_blank"
      data-bs-toggle="popover"
      :data-bs-content="link.title"
      :aria-label="link.title"
    >
      <i
        v-if="link.icon.startsWith('devicon')"
        :class="link.icon"
        style="font-size: 2rem"
      />
      <img v-else :src="link.icon" :alt="link.title" style="width: 2rem" />
    </a>
  </div>
</template>

<script setup lang="ts">
import { Popover } from "bootstrap";
import { onMounted, ref } from "vue";

const links = [
  {
    icon: "devicon-github-original",
    title: "GitHub",
    link: "https://github.com/parvezmrobin",
  },
  {
    icon: "devicon-linkedin-plain",
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/parvezmrobin/",
  },
  {
    icon: "https://leetcode.com/_next/static/images/logo-dark-c96c407d175e36c81e236fcfdd682a0b.png",
    title: "LeetCode",
    link: "https://leetcode.com/parvezmrobin/",
  },
  {
    icon: "https://scholar.google.com/favicon.ico",
    title: "Google Scholar",
    link: "https://scholar.google.com/citations?user=ZfEcKyYAAAAJ",
  },
];

const rootEls = ref<HTMLDivElement[]>([]);
onMounted(() => {
  for (const el of rootEls.value) {
    new Popover(
      el.querySelector('[data-bs-toggle="popover"]') as HTMLAnchorElement,
      { trigger: "hover focus" },
    );
  }
});
</script>

<style lang="scss" scoped>
.link-icon {
  padding: 0 1rem 1rem 0;
  position: relative;
  bottom: 0;

  transition: bottom 0.25s ease-in-out;
  &:hover {
    bottom: 0.25rem;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
  i {
    font-size: 2.5rem;
  }

  img {
    width: 2.5rem;

    &[alt="LeetCode"] {
      width: 2.25rem;
    }
  }
}
</style>
