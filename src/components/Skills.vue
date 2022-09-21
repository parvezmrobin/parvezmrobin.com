<template>
  <div id="skills" class="pt-5 d-flex justify-content-center vh-100">
    <div class="d-flex flex-column align-items-center mt-5">
      <ul class="nav nav-pills">
        <li v-for="tab in tabs" :key="tab" class="nav-item">
          <a
            class="nav-link"
            :class="{ active: tab === activeTab }"
            role="button"
            @click="activeTab = tab"
            >{{ tab }}</a
          >
        </li>
      </ul>
      <div id="skillset" class="d-flex align-items-center">
        <div v-for="(skill, i) in tabContent" :key="i">
          <i v-if="skill.startsWith('devicon')" :class="skill"></i>
          <img v-else :src="skill" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";

const tabs = [
  "Programming Languages",
  "Web Technology",
  "ML/DL",
  "Cloud",
] as const;
const activeTab = ref(tabs[0]);
const tabContents: Record<typeof tabs[number], string[]> = {
  "Programming Languages": [
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg",
    "devicon-javascript-plain colored",
    "devicon-typescript-plain colored",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    "devicon-go-original-wordmark colored",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg",
  ],
  "Web Technology": [],
  "ML/DL": [],
  Cloud: [],
};
const tabContent = computed(() => {
  return tabContents[activeTab.value];
});
</script>

<style scoped lang="scss">
.nav-pills {
  --bs-nav-pills-link-active-bg: var(--bs-indigo);
}

#skillset {
  & > div {
    margin: 1rem 1rem 0 0;

    &:last-child {
      margin-right: 0;
    }
  }
  i {
    font-size: 3.5rem;
  }

  img {
    width: 3.5rem;
  }
}
</style>
