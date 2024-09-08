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
    time: "Apr 2024",
    text:
      "Presented on <span class='cursive'>The History and Evolution of " +
      "Generative Language Models</span> at [Impact The Future]" +
      "(https://gdg.community.dev/events/details/google-gdg-saskatoon-presents-iwd-2024-lets-build-with-ai-and-impactthefuture/) " +
      "symposium by [Google Developers Group – Saskatoon]" +
      "(https://gdg.community.dev/gdg-saskatoon/).",
  },
  {
    time: "May 2022 — Apr 2024",
    text:
      "As the <span class='h6'>Vice President External Advocacy</span> in " +
      "_Dalhousie Association of Graduate students (DAGS)_, maintained relations " +
      "with several external organizations and committees including _Department " +
      "of Advaced Eduation, Nova Scotia_.",
  },
  {
    time: "May 2022 — Apr 2023",
    text:
      "As the <span class='h6'>Graduate Student Representative</span> in " +
      "_Dalhousie Student Union (DSU) Council_, ensured the decisions and " +
      "policies passed in the DSU are in favor of the graduate students.",
  },
  {
    time: "May 2022 — Apr 2023",
    text:
      "As the <span class='h6'>Graduate Student Representative</span> in " +
      "_Faculty of Graduate Studies (FGS) Council_ of Dalhousie University, I " +
      "ensured the students<span class='font-monospace'>’</span> interest in " +
      "faculty policy.",
  },
  {
    time: "2017 — 2018",
    text:
      "Arranged a dozen sessions as the _Head of Promotion of Podium_, " +
      "Khulna University — an organization for improving public speaking skills.",
  },
  {
    time: "2018",
    text:
      "Served as the head of the souvenir committee in Khulna University " +
      "Central Rag 2018.",
  },
  {
    time: "2018",
    text:
      "Managed official website of CSE discipline, Khulna University, and " +
      "corresponding computer club — CLUSTER as the _IT secretary of CLUSTER_.",
  },
];
</script>
