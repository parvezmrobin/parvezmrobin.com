<template>
  <div id="skills" class="pt-5 row justify-content-center vh-100">
    <div class="central-box flex-column">
      <Heading class="pb-4">Skills</Heading>
      <ul class="nav">
        <li
          v-for="(_, tab) in tabContents"
          :key="tab"
          class="nav-item flex-grow-1"
        >
          <a
            class="nav-link underline"
            :class="tab === activeTab ? 'active text-info' : 'text-secondary'"
            role="button"
            @mouseover="activeTab = tab"
          >
            {{ tab }}
          </a>
        </li>
      </ul>
      <div id="skillset" class="d-flex pt-3">
        <div class="skill box left">
          <div>
            <ul
              class="triangle ul-grid"
              :style="{
                '--num-cols': Math.ceil(tabContent.skills.length / 10),
              }"
            >
              <li
                v-for="skill in tabContent.skills"
                :key="skill"
                class="font-monospace text-nowrap"
              >
                {{ skill }}
              </li>
            </ul>
          </div>
        </div>
        <div class="skill box right">
          <div>
            <p
              v-for="desc in tabContent.desc"
              :key="desc"
              v-html="formatString(desc)"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";
import { formatString } from "../util";
import Heading from "./Heading.vue";

const tabContents: Record<string, { skills: string[]; desc: string[] }> = {
  "Programming Languages": {
    skills: [
      "Python",
      "JavaScript (ES6+)",
      "TypeScript",
      "C#",
      "PHP",
      "Golang",
      "Java",
      "C++",
    ],
    desc: [
      "I have an extensive experience in of teaching and researching using Python. " +
        "I have also worked more than two years as a software developer mostly using " +
        "<code>JavaScript (ES6+)</code> and <code>TypeScript</code>.",
      "Apart from that I worked in several projects using <code>C#</code>, <code>PHP</code> " +
        "and golang both in academia and industry. I led a team for developing the official " +
        "[website](https://new.cseku.ac.bd/) of the CSE Department of Khulna University, " +
        "Bangladesh. My experience in <code>Java</code> and <code>C++</code> are mostly from " +
        "competitive programming.",
    ],
  },
  "Web Technology": {
    skills: [
      "Node JS",
      "Express JS",
      "Vue JS",
      "React",
      "GraphQL",
      "REST API",
      "Bootstrap",
      "CSS3",
      "D3",
      "Micro Service",
      "Webpack",
      "Vite",
      "Web Socket",
      "WebRTC",
      "Flask",
      "Laravel",
      "ASP.Net",
      "Next JS",
      "jQuery",
    ],
    desc: [
      "I have extensive work experience in <code>Node JS</code>, <code>Express JS</code> and " +
        "<code>Vue Js</code> (check Experience section). In nearly all the projects I worked, " +
        "I used <code>RESTful API</code> to communicate between client and server. I also worked " +
        "in developing several mobile applications using <code>React Native</code>.",
      "Alongside these most prominent technologies, I used <code>Web Socket</code> and " +
        "<code>WebRTC</code> to make a video calling service. I also developed a _novel_ " +
        "[visualization tool](http://129.173.67.225:8080/bug-localization) using <code>D3</code>. " +
        "In my research works, I used <code>Flask</code> to deploy machine learning models.",
    ],
  },
  "Database Systems": {
    skills: ["Mongo DB", "MySQL", "PostgreSQL", "Redis"],
    desc: [
      "During my job as a software engineer, <code>MongoDB</code> was the go to" +
        "database system. I also have used <code>redis</code> for caching in several" +
        "projects. Of course when performance is critical, I used <code>MySQL</code> " +
        "or <code>PostgreSQL</code> instead.",
    ],
  },
  "ML/DL/Data Science": {
    skills: [
      "Neural Networks",
      "Transformers",
      "Recurrent Neural Networks",
      "Transfer Learning",
      "Ensemble Learning",
      "Unsupervised Learning",
      "Decision Tree",
      "Regression Models",
      "Support Vector Machine",
      "Natural Language Processing",
    ],
    desc: [
      "I have a deep dive into machine learning and deep learning during my research " +
        "internship at [Metabob](https://metabob.com/). This internship is part of my " +
        "[Mitacs](https://www.mitacs.ca/en/programs/accelerate) scholarship which aims to " +
        "explain sotfwar bugs in natural language. The research domain includes software " +
        "engineering, deep learning and natural language processing. I further sharpen my " +
        "knowledge while teaching in the Process of Data Science course.",

      "One of the early recognition of my Data Science skill is placing among the top 15 teams " +
        "in Datathon Bangladesh, 2019 — the biggest data-centric competition in the country. " +
        "I have several relevant certification from Coursera (see [Certifications](#certificates)).",
    ],
  },
  "Tools & Platform": {
    skills: [
      "Docker",
      "Docker Compose",
      "Google Cloud Platform",
      "Amazon Web Service",
      "git",
      "nano",
      "Linux",
    ],
    desc: [
      "As a software engineer, in several cases I orchestrated my own cloud services as well. " +
        "I also taught <code>GCP</code> in the Intro to Software Developer course. I use " +
        `<code>git</code> for ${new Date().getFullYear() - 2015} years now.`,

      "I have _Coursera_ certification on [Google Cloud Fundamentals: Core Infrastructure]" +
        "(https://coursera.org/share/6d977fe14c15f5178dbee665b5f60482).",
    ],
  },
};
const urlParams = new URLSearchParams(window.location.search);
const activeTabValue = urlParams.get("activeSkillTab") ?? "ML/DL/Data Science";
const activeTab = ref<keyof typeof tabContents>(activeTabValue);
const tabContent = computed(() => {
  return tabContents[activeTab.value];
});
</script>

<style scoped lang="scss">
.central-box {
  max-width: var(--bs-breakpoint-lg);
}

.nav-link.underline {
  border-bottom: 3px solid rgb(var(--bs-secondary-rgb), 33%);

  &.active {
    border-color: var(--bs-info);
  }
}

.ul-grid {
  display: grid;
  column-gap: 2rem;
  grid-template-columns: repeat(var(--num-cols), 1fr);
  margin-bottom: 0;
}

.skill.box {
  display: flex;
  align-items: center;
  --bs-link-color: var(--bs-cyan-400);
  --bs-link-hover-color: var(--bs-cyan-600);
  &.left {
    > div {
      background: var(--bs-indigo-700);
      padding: 10px;
      border-radius: 5px;
      box-shadow: 0 1rem 3rem rgba(0, 0, 0, 50%);
      z-index: 1;
    }
  }

  &.right {
    display: flex;
    align-items: center;
    > div {
      background: var(--bs-purple-900);
      padding: 10px 10px 10px 30px;
      border-radius: 5px;
      margin-left: -10px;
      box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 25%);
    }
  }
}
</style>
