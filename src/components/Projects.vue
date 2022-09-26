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
  web?: string;
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
  {
    title: "Official Website of CSE Discipline, Khulna University",
    description:
      "Led team to renovate the official website of the Compute Science and" +
      "Engineering Discipline, Khulna University, Bangladesh.",
    tech: ["PHP", "Bootstrap", "MySQL"],
    web: "https://new.cseku.ac.bd/",
    img: "/public/ku-website.png",
  },
  {
    title: "Jhijhi",
    description:
      "A react app backed by Express JS and Mongo DB to facilitate cricket scoring with " +
      "customizable team size, match format and both single batsman and double batsmen " +
      "support.",
    tech: ["Node JS", "Express JS", "React", "TypeScript", "MongoDB"],
    github: "https://github.com/parvezmrobin/jhijhi-frontend",
    web: "https://jhijhi.netlify.app/",
    img: "/public/jhijhi.png",
  },
];
</script>
