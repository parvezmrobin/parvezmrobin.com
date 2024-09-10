<template>
  <CentralBox
    title="Activities"
    :topMarginRatio="0.075"
    maxWidth="var(--bs-breakpoint-md)"
  >
    <ul class="triangle">
      <li v-for="(activity, i) in activities" v-once :key="i">
        <em class="text-secondary me-1">[{{ activity.time }}]</em>
        <span v-html="formatString(activity.text)" />
      </li>
    </ul>
  </CentralBox>
</template>

<script lang="ts" setup>
import CentralBox from "./CentralBox.vue";
import { formatString } from "../util";

interface IActivity {
  time: string;
  text: string;
}

const activities: IActivity[] = [
  {
    time: "May 2022 — Apr 2024",
    text:
      "As the *Vice President External Advocacy* in " +
      "_Dalhousie Association of Graduate students (DAGS)_, maintained relations " +
      "with several external organizations and committees including _Department " +
      "of Advanced Education, Nova Scotia_",
  },
  {
    time: "May 2022 — Apr 2023",
    text:
      "As the *Graduate Student Representative* in " +
      "_Dalhousie Student Union (DSU) Council_, ensured the decisions and " +
      "policies passed in the DSU are in favor of the graduate students",
  },
  {
    time: "May 2022 — Apr 2023",
    text:
      "As the *Graduate Student Representative* in " +
      "_Faculty of Graduate Studies (FGS) Council_ of Dalhousie University, I " +
      "ensured the students’ interest in faculty policy",
  },
  {
    time: "2017 — 2018",
    text:
      "As the *Head of Promotion of Podium*, arranged a dozen sessions " +
      "Khulna University — an organization for improving public speaking skills",
  },
  {
    time: "2018",
    text:
      "Served as the head of the souvenir committee in Khulna University " +
      "Central Rag, 2018",
  },
  {
    time: "2018",
    text:
      "Managed official website of CSE discipline, Khulna University, and " +
      "corresponding computer club — CLUSTER as the _IT secretary of CLUSTER_.",
  },
];
</script>

<style scoped>
::v-deep(strong) {
  color: var(--bs-info);
}
</style>
