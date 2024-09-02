<template>
  <CentralBox title="Certifications" maxWidth="var(--bs-breakpoint-md)">
    <ul class="triangle">
      <li v-for="cert in certificates" v-once :key="cert.link">
        <em>{{ cert.from }}</em> certification on
        <span class="font-monospace">“</span
        ><a :href="cert.link">{{ cert.on }}</a
        ><span class="font-monospace">”</span>
      </li>
    </ul>
  </CentralBox>
</template>

<script lang="ts" setup>
import CentralBox from "./CentralBox.vue";

interface ICertificate {
  from: string;
  on: string;
  link: string;
}

const certificates: ICertificate[] = [
  {
    from: "Coursera",
    on: "Neural Networks and Deep Learning",
    link: "https://coursera.org/share/b918222ce19287ea3bc4ed115ba6ac7e",
  },
  {
    from: "Coursera",
    on: "Improving Deep Neural Networks: Hyperparameter tuning, Regularization and Optimization",
    link: "https://coursera.org/share/4c099d757b6f03bc4e2828d54abc4324",
  },
  {
    from: "Coursera",
    on: "Structuring Machine Learning Projects",
    link: "https://coursera.org/share/3ffe167d4177090397e063e1ec323044",
  },
  {
    from: "Coursera",
    on: "Sequence Models",
    link: "https://coursera.org/share/4200f189711858cf5c748c5f8f7f1912",
  },
  {
    from: "Coursera",
    on: "Natural Language Processing in TensorFlow",
    link: "https://coursera.org/share/28080534aac07996a11fc7280e295f40",
  },
  {
    from: "Coursera",
    on: "Introduction to Data Science in Python",
    link: "https://coursera.org/share/55e2d559c23b56de71c4aa614a75646a",
  },
  {
    from: "Google | Coursera",
    on: "Google Cloud Fundamentals: Core Infrastructure",
    link: "https://coursera.org/share/6d977fe14c15f5178dbee665b5f60482",
  },
  {
    from: "Cisco | Coursera",
    on: "Cisco: SD-WAN Cloud Hub with Google Cloud",
    link: "https://coursera.org/share/61d25d9c72d6ba1407c9976d1045c955",
  },
  {
    from: "Hacker Rank",
    on: "Rest API (Intermediate)",
    link: "https://www.hackerrank.com/certificates/9cc8998cd213",
  },
  {
    from: "Hacker Rank",
    on: "SQL (Intermediate)",
    link: "https://www.hackerrank.com/certificates/69f1d00084f7",
  },
  {
    from: "Hacker Rank",
    on: "Problem Solving (Intermediate)",
    link: "https://www.hackerrank.com/certificates/33808b1228f7",
  },
];
</script>

<style scoped lang="scss">
ul {
  li {
    margin-bottom: 0.5rem;
  }
}
</style>
