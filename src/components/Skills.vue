<template>
  <CentralBox title="Skills">
    <h5
      class="p-1 rounded fw-normal"
      style="background-color: var(--bs-pink-800)"
    >
      I can exit Vim. In addition to that, I am skilled in
    </h5>
    <div
      v-for="(tabContent, category) in tabContents"
      :key="category"
      class="row rounded purple hover py-2 mt-3"
    >
      <div>
        <h5
          class="text-pink underline d-flex align-items-baseline"
          :class="{ active: isExpanded[category] }"
        >
          <span>{{ category }}</span>

          <button
            class="btn btn-sm dropdown-toggle ms-auto"
            :class="
              isExpanded[category]
                ? 'btn-outline-warning'
                : 'btn-outline-success'
            "
            type="button"
            :aria-expanded="isExpanded[category]"
            :aria-controls="`#skill-${category}`"
            @click="isExpanded[category] = !isExpanded[category]"
          >
            {{ isExpanded[category] ? "Hide" : "Relevant" }} Experience
          </button>
        </h5>
      </div>

      <div>
        <div class="rounded">
          <div class="d-flex align-items-center flex-wrap">
            <div
              v-for="skill in tabContent.skills"
              :key="skill"
              class="font-monospace text-nowrap me-4"
            >
              {{ skill }}
            </div>
          </div>
        </div>

        <Transition>
          <div
            v-show="isExpanded[category]"
            :id="`#skill-${category}`"
            class="mt-3"
          >
            <div class="skill description">
              <p
                v-for="desc in tabContent.desc"
                :key="desc"
                v-html="formatString(desc)"
              />
            </div>
          </div>
        </Transition>
      </div>
    </div>
  </CentralBox>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { formatString } from "../util";
import CentralBox from "./CentralBox.vue";

const tabContents: Record<string, { skills: string[]; desc: string[] }> = {
  Languages: {
    skills: [
      "Python",
      "C++",
      "Go",
      "JavaScript (ES6+)",
      "TypeScript",
      "C#",
      "PHP",
    ],
    desc: [
      `I use C++ as my primary language at Siemens. I have an extensive
      experience in of teaching and researching using <code>Python</code>. I
      have also worked more than two years as a software developer mostly using
      <code>JavaScript (ES6+)</code> and <code>TypeScript</code>. Recently, I
      led a team of four developers to build
      [festive.rocks](https://festive.rocks) — a low latency, high-performance
      online event hosting platform. The backend of this platform is written in
      <code>Go</code>.`,
      `Apart from that I worked in several projects using <code>C#</code> and
      <code>PHP</code> both in academia and industry. I led a team for
      developing the official [website](https://new.cseku.ac.bd/) of the CSE
      Department of Khulna University, Bangladesh that is mostly written in
      <code>PHP</code>.`,
      `I strongly suggest checking my
      [<kbd>LeetCode</kbd>](https://leetcode.com/parvezmrobin) profile to glance
      my coding skill.`,
    ],
  },
  "Web Technology": {
    skills: [
      "Node JS",
      "Vue JS",
      "React",
      "REST API",
      "Bootstrap",
      "CSS3",
      "Flask",
      "FastAPI",
    ],
    desc: [
      "I have extensive work experience in <code>Node JS</code>, <code>Express JS</code> and " +
        "<code>Vue Js</code> (check [Experience](#experience) section). In nearly all the projects I worked, " +
        "I used <code>RESTful API</code> to communicate between client and server. I also worked " +
        "in developing several mobile applications using <code>React Native</code>.",
      "Alongside these most prominent technologies, I used <code>Web Socket</code> and " +
        "<code>WebRTC</code> to make a video calling service. I also developed a _novel_ " +
        "[visualization tool](https://lrwe.parvezmrobin.dev) using <code>D3</code>. " +
        "During my job at Metabob and Siemens, I used <code>Flask</code> and <code>FastAPI</code> " +
        "to deploy machine learning models.",
    ],
  },
  Database: {
    skills: ["Mongo DB", "MySQL", "PostgreSQL", "Redis"],
    desc: [
      "During my job as a software engineer, <code>MongoDB</code> was the go-to " +
        "database system. I also have used <code>redis</code> for caching in several " +
        "projects. In my recent venture, [festive.rocks](https://festive.rocks), I used " +
        "<code>PostgreSQL</code> as the database system. I have led a team to develop the " +
        "[official website](https://new.cseku.ac.bd/) of the CSE Department of Khulna University, " +
        "Bangladesh, which uses <code>MySQL</code> as the database system.",
    ],
  },
  "Machine Learning": {
    skills: [
      "Neural Networks",
      "Transformers",
      "Recurrent Neural Networks",
      "Transfer Learning",
      "Ensemble Learning",
      "Unsupervised Learning",
      "Natural Language Processing",
    ],
    desc: [
      "I have a deep dive into machine learning and deep learning during my research " +
        "internship at [Metabob](https://metabob.com/). This internship is part of my " +
        "[Mitacs](https://www.mitacs.ca/en/programs/accelerate) scholarship which aims to " +
        "explain software bugs in natural language. The research domain includes software " +
        "engineering, deep learning and natural language processing. I further sharpen my " +
        "knowledge while teaching in the _Process of Data_ Science course.",

      "One of the early recognition of my Data Science skill is placing among the top 15 teams " +
        "in Datathon Bangladesh, 2019 — the biggest data-centric competition in the country. " +
        "I have several relevant certification from Coursera (see [Certifications](#certifications)).",
    ],
  },
  "Tools & Platform": {
    skills: [
      "Docker",
      "Google Cloud Platform",
      "Amazon Web Service",
      "Microsoft Azure",
      "Linux",
    ],
    desc: [
      "As a software engineer, in several cases I orchestrated my own cloud services as well. " +
        "I designed the development environment [Daency](https://daency.com/) based on Docker and " +
        "Docker Compose. I have rewritten the subscription backend of " +
        "[Wonster Words](https://apps.apple.com/us/app/wonster-words-learning-games/id881119321) " +
        "iOS game using " +
        "Microsoft Azure [FaaS](https://azure.microsoft.com/en-us/services/functions/), " +
        "[Cosmos DB](https://azure.microsoft.com/en-us/services/cosmos-db/), and " +
        "[Queue Storage](https://azure.microsoft.com/en-us/services/storage/queues/). " +
        "I also taught <code>GCP</code> in the <em>Intro to Software Developement</em> course. " +
        `I use <code>git</code> for ${
          new Date().getFullYear() - 2015
        } years now.`,

      "I have _Coursera_ certification on [Google Cloud Fundamentals: Core Infrastructure]" +
        "(https://coursera.org/share/6d977fe14c15f5178dbee665b5f60482).",
    ],
  },
};

const isExpanded = ref<Record<string, boolean>>({});
</script>

<style scoped lang="scss">
.dropdown-toggle {
  &::after {
    vertical-align: 0.125rem;
  }
  &.btn-outline-warning::after {
    border-top: 0;
    border-bottom: 0.3rem solid;
  }
}

:deep(a) {
  color: var(--bs-teal);
}

.underline {
  border-bottom: 1px solid var(--bs-secondary);
  padding-bottom: 4px;
  --bs-nav-link-hover-color: var(--bs-teal);

  &.active {
    border-color: var(--bs-info);
  }

  > span {
    position: relative;
    top: 0;
    transition: top 500ms;
  }
}

.skill.description {
  background: var(--bs-purple-900);
  padding: 10px 10px 10px 30px;
  border-radius: 5px;
  box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 25%);
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
