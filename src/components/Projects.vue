<template>
  <CentralBox id="projects" title="Personal Projects" :topMarginRatio="0">
    <div>
      <Project
        v-for="project in projects"
        :key="project.title"
        v-bind="project"
      />

      <div
        v-if="totalProjects !== undefined"
        class="d-flex justify-content-center mt-4"
      >
        <a
          target="_blank"
          class="btn btn-info d-flex align-items-center"
          href="https://github.com/parvezmrobin?tab=repositories"
        >
          <i class="devicon-github-plain me-2 mb-1 fs-5" />
          See {{ totalProjects - projects.length }} more projects on GitHub
        </a>
      </div>
    </div>
  </CentralBox>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import CentralBox from "./CentralBox.vue";
import Project, { IProject } from "./Project.vue";

const projects: IProject[] = [
  {
    title: "Jhijhi",
    description:
      "A react app backed by Express JS and Mongo DB to facilitate cricket scoring with " +
      "heavy customization support. It is hosted with Netlify (frontend), Amazon EC2 (backend), " +
      "MongoDB Atlas (database), and Circle CI (deployment).",
    tech: ["NodeJS", "Express", "React", "JavaScript", "MongoDB"],
    frontend: "https://github.com/parvezmrobin/jhijhi-frontend",
    backend: "https://github.com/parvezmrobin/jhijhi-backend",
    web: "https://jhijhi.parvezmrobin.dev/",
    images: ["/jhijhi.webp", "/jhijhi.png"],
  },
  {
    title: "Visually Explaining Bug Localization",
    description:
      "Developed a visualization system for a state-of-the-art bug localization tool " +
      "([LR+WE by Ye et al.](https://dl.acm.org/doi/abs/10.1145/2884781.2884862)). " +
      "It visually explains the localization process gradually at document-to-document, " +
      "document-to-word and finally word-to-word level.",
    tech: [
      "Python",
      "VueJS",
      "D3JS",
      "TypeScript",
      "Flask",
      "scikit-learn",
      "Word Embedding",
      "NLTK",
    ],
    github: "https://github.com/parvezmrobin/visualize-lrwe",
    web: "https://lrwe.parvezmrobin.dev/",
    images: [
      "/visualizing-bug-localization.webp",
      "/visualizing-bug-localization.png",
    ],
  },
  {
    title: "Bug Report Deduplication Using Siamese Cross-Encoder Network",
    description:
      "Replicated a state-of-the-art duplicate bug report detection technique based on a " +
      "siamese architecture. We showed that even a simpler version of the original work can " +
      "achieve comparable performance.",
    tech: ["MongoDB", "Docker", "TensorFlow", "scikit-learn"],
    github: "https://github.com/parvezmrobin/ml-br-deduplication",
    images: ["/siamese-cross-encoder.webp", "/siamese-cross-encoder.png"],
  },
  {
    title: "Official Website of CSE Discipline, Khulna University",
    description:
      "Led team to renovate the official website of the Compute Science and " +
      "Engineering Discipline, Khulna University, Bangladesh.",
    tech: ["PHP", "Bootstrap", "MySQL"],
    web: "https://cseku.ac.bd/",
    images: ["/ku-website.webp", "/ku-website.png"],
  },
];

const totalProjects = ref<number>();

fetch("https://api.github.com/users/parvezmrobin/repos?per_page=100")
  .then((res) => res.json())
  .then((data) => {
    totalProjects.value = data.length;
  });
</script>
