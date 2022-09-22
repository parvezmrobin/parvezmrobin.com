<template>
  <div id="achievements" class="pt-5 row justify-content-center vh-100">
    <div class="central-box flex-column">
      <Heading class="pb-4">Achievements</Heading>
      <ul class="triangle">
        <li v-for="(achievement, i) in achievements" v-once :key="i">
          <em class="text-secondary">
            [{{ achievement.from
            }}{{ achievement.to ? ` — ${achievement.to}` : "" }}]
          </em>
          <strong v-if="achievement.title" class="text-info">
            {{ achievement.title }}:
          </strong>
          <span v-html="achievement.text" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Heading from "./Heading.vue";

interface IAchievement {
  from: string;
  to?: string;
  title?: string;
  text: string;
}

const achievements: IAchievement[] = [
  {
    from: "Sep 2021",
    to: "Aug 2023",
    title: "Dalhousie University Scholarship",
    text: "Awarded by the Faculty of Graduate Studies and the Faculty of Computer Science for academic results and research excellence.",
  },
  {
    from: "May 2022",
    to: "Apr 2023",
    title: "Mitacs Accelerate Scholarship",
    text: "Awarded by Mitacs to research in explaining software bugs using artificial intelligence.",
  },
  {
    from: "Apr 2019",
    text: "Placed among the top 15 teams in Datathon Bangladesh, 2019 by Robi Axiata Group",
  },
  {
    from: "Oct 2017",
    text: "Champion in the programming contest in CSE Fest 2017, Khulna University, Bangladesh",
  },
  {
    from: "May 2017",
    text: "2<sup>nd</sup> runner-up in DIU App Contest, 2017 arranged by Daffodil International University, Dhaka, Bangladesh",
  },
  {
    from: "May 2015",
    text: "Runner-up in the programming contest in CSE Fest 2017, Khulna University, Bangladesh",
  },
  {
    from: "Jan 2015",
    to: "Dec 2016, 2018",
    title: "Khulna University Scholarship",
    text: "Awarded by the Computer Science and Engineering Discipline and Khulna University scholarship committee based on academic excellence.",
  },
];
</script>

<style scoped lang="scss">
ul {
  li {
    margin-bottom: 0.5rem;
  }
  a {
    color: var(--bs-cyan);
  }
}
</style>
