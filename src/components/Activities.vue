<template>
  <CentralBox
    title="Activities"
    :topMarginRatio="0.075"
    maxWidth="var(--bs-breakpoint-md)"
  >
    <ul class="triangle">
      <li
        v-for="activity in activities"
        v-once
        :key="activity"
        v-html="formatString(activity)"
      />
    </ul>
  </CentralBox>
</template>

<script lang="ts" setup>
import CentralBox from "./CentralBox.vue";
import { formatString } from "../util";

const activities = [
  "<span class='h6'>Reviewer</span> in [Dalhousie Computer Science In-House (DCSI)](https://dcsi.cs.dal.ca/) Conference in 2021 and 2022.",
  "As the <span class='h6'>Vice President External Advocacy</span> in _Dalhousie Association of Graduate students (DAGS)_, " +
    "Mainted relations with several external organizations and committees including _Department of Advaced " +
    "Eduation, Nova Scotia_.",
  "As the <span class='h6'>Graduate Student Representative</span> in _Dalhousie Student Union (DSU) Council_, " +
    "I ensured the decisions and policies passed in the DSU are in favor of the graduate students.",
  "As the <span class='h6'>Graduate Student Representative</span> in _Faculty of Graduate Studies (FGS) Council_ of " +
    "Dalhousie University, I ensured the students<span class='font-monospace'>’</span> interest in faculty policy.",
  "Arranged a dozen sessions as the _Head of Promotion of Podium_, Khulna University — an organization for improving public speaking skills.",
  "Served as the head of the souvenir committee in Khulna University Central Rag 2018.",
  "Managed official website of CSE discipline, Khulna University, and corresponding computer club — CLUSTER as the _IT secretary of CLUSTER_.",
];
</script>

<style scoped lang="scss">
ul.triangle {
  --bs-link-color: var(--bs-cyan-400);
  --bs-link-hover-color: var(--bs-cyan-600);
  li {
    margin-bottom: 0.5rem;
  }
}
</style>
