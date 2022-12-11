<template>
  <CentralBox id="projects" title="Personal Projects" :topMarginRatio="0">
    <Project
      v-for="project in projects"
      :key="project.title"
      v-bind="project"
    />
  </CentralBox>
</template>

<script lang="ts" setup>
import CentralBox from "./CentralBox.vue";
import Project, { IProject } from "./Project.vue";

const projects: IProject[] = [
  {
    title: "Jhijhi",
    description:
      "A react app backed by Express JS and Mongo DB to facilitate cricket scoring with " +
      "heavy customization support. It is hosted with Netlify (frontend), Amazon EC2 (backend), " +
      "MongoDB Atlas (database), and Circle CI (deployment).",
    tech: [
      "Node JS",
      "Express JS",
      "React",
      "JavaScript",
      "MongoDB",
      "Circle CI",
    ],
    frontend: "https://github.com/parvezmrobin/jhijhi-frontend",
    backend: "https://github.com/parvezmrobin/jhijhi-backend",
    web: "https://jhijhi.parvezmrobin.dev/",
    img: "/jhijhi.png",
  },
  {
    title: "Visually Explaining Bug Localization",
    description:
      "Developed a visualization system for a state-of-the-art bug localization tool " +
      "([LR+WE by Ye et al.](https://dl.acm.org/doi/abs/10.1145/2884781.2884862)). " +
      "It visually explains the localization process gradually at document-to-document, " +
      "document-to-word and finally word-to-word level.",
    tech: [
      "Vue JS",
      "D3",
      "TypeScript",
      "Flask",
      "scikit-learn",
      "Word Embedding",
      "NLTK",
      "Python",
    ],
    github: "https://github.com/parvezmrobin/visualize-lrwe",
    web: "https://lrwe.parvezmrobin.dev/",
    img: "/visualizing-bug-localization.png",
  },
  {
    title: "Bug Report Deduplication Using Siamese Cross-Encoder Network",
    description:
      "Replicated a state-of-the-art duplicate bug report detection technique based on a " +
      "siamese architecture. We showed that even a simpler version of the original work can " +
      "achieve comparable performance.",
    tech: ["MongoDB", "Docker", "TensorFlow", "scikit-learn"],
    github: "https://github.com/parvezmrobin/ml-br-deduplication",
    img: "/siamese-cross-encoder.png",
  },
  {
    title: "Official Website of CSE Discipline, Khulna University",
    description:
      "Led team to renovate the official website of the Compute Science and" +
      "Engineering Discipline, Khulna University, Bangladesh.",
    tech: ["PHP", "Bootstrap", "MySQL"],
    web: "https://new.cseku.ac.bd/",
    img: "/ku-website.png",
  },
];
</script>
