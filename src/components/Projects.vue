<template>
  <CentralBox title="Projects" :topMarginRatio="0">
    <Project
      v-for="project in projects"
      :key="project.title"
      v-bind="project"
    />
  </CentralBox>
</template>

<script lang="ts" setup>
import CentralBox from "./CentralBox.vue";
import Project from "./Project.vue";

interface IProject {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  img: string;
}

const projects: IProject[] = [
  {
    title: "Bug Report Deduplication Using Siamese Cross-Encoder Network",
    description:
      "Replicated a state-of-the-art duplicate bug report detection technique based on a " +
      "siamese architecture. " +
      "We showed that even a simpler version of the original work can achieve comparable performance.",
    tech: ["MongoDB", "Docker", "TensorFlow", "scikit-learn"],
    github: "https://github.com/parvezmrobin/ml-br-deduplication",
    img: "/public/siamese-cross-encoder.png",
  },
];
</script>
