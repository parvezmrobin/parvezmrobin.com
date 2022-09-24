<template>
  <div id="activities" class="pt-5 row justify-content-center vh-100">
    <div
      class="central-box flex-column"
      style="--central-box-margin-top-ratio: 0.075"
    >
      <Heading class="pb-4">Activities</Heading>
      <ul class="triangle">
        <li
          v-for="activity in activities"
          v-once
          :key="activity"
          v-html="formatString(activity)"
        />
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Heading from "./Heading.vue";
import { formatString } from "../util";

const activities = [
  "<span style='color: var(--bs-pink); font-weight: bold'>Reviewer</span> in [Dalhousie Computer Science In-House (DCSI)](https://dcsi.cs.dal.ca/) Conference in 2021 and 2022.",
  "<span style='color: var(--bs-pink); font-weight: bold'>Vice President External Advocacy</span> in _Dalhousie Association of Graduate students (DAGS)_.",
  "<span style='color: var(--bs-pink); font-weight: bold'>Graduate Student Representative</span> in _Dalhousie Student Union (DSU) Council_.",
  "<span style='color: var(--bs-pink); font-weight: bold'>Graduate Student Representative</span> in _Faculty of Graduate Studies (FGS) Council_, Dalhousie University.",
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
