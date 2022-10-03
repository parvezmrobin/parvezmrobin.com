<template>
  <div v-for="link in links" :key="link.icon" class="link-icon">
    <a :href="link.link" :title="link.title" target="_blank">
      <i v-if="link.icon.startsWith('devicon')" :class="link.icon"></i>
      <img v-else :src="link.icon" :alt="link.title" />
    </a>
  </div>
</template>
<script setup lang="ts">
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
    icon: "/medium.png",
    title: "Medium",
    link: "https://medium.com/@parvezmrobin",
  },
];
</script>
<style lang="scss" scoped>
.link-icon {
  padding: 0 1rem 1rem 0;
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
