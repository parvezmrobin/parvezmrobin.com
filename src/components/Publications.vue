<template>
  <CentralBox
    id="publications"
    title="Publications"
    :topMarginRatio="0"
    maxWidth="var(--bs-breakpoint-md)"
  >
    <Publication
      v-for="project in projects"
      :key="project.title"
      v-bind="project"
    />
  </CentralBox>
</template>

<script lang="ts" setup>
import CentralBox from "./CentralBox.vue";
import Publication, { IPublication } from "./Publication.vue";

const projects: IPublication[] = [
  {
    title:
      "Authorship Identification of Source Code Segments Written by Multiple Authors Using Stacking Ensemble Method",
    description:
      "_P. Mahbub_, N. Z. Oishie and S. M. Rafizul Haque, 2019 22nd International " +
      "Conference on Computer and Information Technology (ICCIT), 2019, " +
      "pp. 1-6, doi: [10.1109/ICCIT48885.2019.9038412](https://doi.org/10.1109/ICCIT48885.2019.9038412).",
    keywords: [
      "Source Code Authorship Identification",
      "Multiple Author",
      "Deep Neural Network",
      "Random Forest",
      "Support Vector Machine",
      "Stacking Ensemble",
    ],
  },
  {
    title:
      "Explaining Software Bugs Leveraging Code Structures in Neural Machine Translation",
    description:
      "_P. Mahbub_, O Shuvo and M. M. Rahman, 45th International " +
      "Conference on Software Engineering (ICSE), 2023",
    keywords: [
      "Software Bug",
      "Bug Explanation",
      "Software Engineering",
      "Software Maintenance",
      "Natural Language Processing",
      "Deep Learning",
      "Transformers",
    ],
  },
];
</script>
