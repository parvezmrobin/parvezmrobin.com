<template>
  <CentralBox title="Experience" maxWidth="var(--bs-breakpoint-lg)">
    <div class="d-flex flex-column flex-sm-row">
      <ul
        class="nav flex-sm-column justify-content-center justify-content-sm-start"
      >
        <li
          v-for="experience in Object.keys(experiences)"
          :key="experience"
          class="nav-item"
        >
          <a
            role="button"
            class="nav-link fw-bold"
            :class="experience === selectedExperience ? 'active' : 'text-white'"
            @mouseover="selectedExperience = experience"
          >
            <span>{{ experience }}</span>
          </a>
        </li>
      </ul>

      <div class="ps-3 pt-4 pt-sm-1">
        <h4>{{ experienceDescription.position }}</h4>
        <p>
          <em>{{ experienceDescription.time }}</em>
        </p>
        <ul class="triangle">
          <li
            v-for="(work, i) in experienceDescription.works"
            :key="i"
            v-html="formatString(work)"
          />
        </ul>
      </div>
    </div>
  </CentralBox>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";
import { formatString } from "../util";
import CentralBox from "./CentralBox.vue";

interface IExperience {
  position: string;
  time: string;
  works: string[];
}

const experiences: Record<string, IExperience> = {
  NerdDevs: {
    position: "Software Engineer",
    time: "March 2019 — July 2021",
    works: [
      "Architected and designed [Daency](https://daency.com/), an online platform to learn " +
        "dancing interactively. The tech stack was <code>TypeScript</code>, " +
        "<code>Express JS</code>, <code>Vue JS</code>, <code>Mongo DB</code>, and " +
        "<code>Docker</code>. Also integrated and maintained [WebRTC](https://agora.io), " +
        "[AWS](https://aws.amazon.com), [GCP](https://cloud.google.com/), [Push Notification]" +
        "(https://www.pubnub.com/), [Stripe](https://stripe.com/), " +
        "[Task Queue](https://docs.bullmq.io/) (redis) and various other services.",
      "In [Bikribatta](https://www.bikribatta.com/) inventory solution, *architected* accounts, " +
        "reports, and employee management components. " +
        "Written a stock management microservice using <code>Golang</code> that speeds up corresponding " +
        "API access time by more than 1000%. Further, built a desktop version of the " +
        "Point of Sales component of the same solution " +
        "using [Electron](https://www.electronjs.org/), which also " +
        "works in offline mode with eventual consistency scheme.",
      "Migrated the subscription backend of [Wonster Words](https://apps.apple.com/us/app/wonster-words-learning-games/id881119321) " +
        "iOS app store game from node.js to ASP.Net using Microsoft Azure " +
        "[FaaS](https://azure.microsoft.com/en-us/services/functions/), " +
        "[Cosmos DB](https://azure.microsoft.com/en-us/services/cosmos-db/), " +
        "and [Queue Storage](https://azure.microsoft.com/en-us/services/storage/queues/).",
      "Contributed to several in-house [React Native](https://reactnative.dev/) " +
        "based mobile applications.",
      "Hosted two in-house workshops on ‘Modern Web Development with Vue JS’ " +
        "and ‘Sustainable Architecture with TypeScript’.",
    ],
  },
  CoachSnap: {
    position: "Full Stack Developer",
    time: "December 2019 — February 2020",
    works: [
      "[CoachSnap](https://www.coachsnap.com/) is a digital platform to connect " +
        "coaches and their students together online. There my core responsibility " +
        "was to implement the payment service using <code>Stripe</code>. I futher " +
        "worked on several other exciting features including appointment management. " +
        "The tech-stack involves cutting edge technologies like " +
        "<code>GraphQL</code> (Apollo & Prisma), <code>React</code> (Ant Design), " +
        "query caching, CSS preprocessor (<code>less</code>), <code>Docker</code>, " +
        "and yarn workspace.",
    ],
  },
  Metabob: {
    position: "Research Intern",
    time: "May 2022 — April 2023",
    works: [
      "Working on a research project aiming to automatically explain software bugs in natural " +
        "language. The research domain includes software engineering, deep learning, and natural " +
        "language processing. A recent developer survey shows that our developed tool can provide " +
        "accurate and concise explanations of bugs compared to human-written explanations.",
    ],
  },
  "Dalhousie University": {
    position: "Teaching Assistant",
    time: "September 2021 — December 2022",
    works: [
      "<span class='h6'>Process of Data Science</span> (graduate course): Providing hands-on learning experience in " +
        "cutting-edge data science technologies in labs, holding office hours to resolve " +
        "difficulties for the students, and assisting the instructor during classes",
      "<span class='h6'>Intro to Software Project</span>: Taking classes on Docker and containerization, " +
        "directly mentoring, and evaluating four groups in the agile process and maintaining their GCP instances",
      "<span class='h6'>Software Development</span>: Taking labs and helping the students in resolving issues " +
        "regarding version controlling, test driven development, code smells, refactoring, and more",
    ],
  },
};
const selectedExperience = ref("NerdDevs");
const experienceDescription = computed(() => {
  return experiences[selectedExperience.value];
});
</script>

<style scoped lang="scss">
$sm: 576px;

.nav {
  --bs-link-color: var(--bs-teal-600);
  --bs-link-hover-color: var(--bs-teal-400);
}

.nav-link {
  border-left: 3px solid white;
  white-space: nowrap;

  @media screen and (max-width: $sm) {
    --bs-nav-link-padding-x: 0.5rem;
    border-left: none;
    border-bottom: 3px solid white;
  }
  &.active {
    border-left: 3px solid var(--bs-success);
    @media screen and (max-width: $sm) {
      border-left: none;
      border-bottom: 3px solid var(--bs-teal);
    }
  }

  > span {
    position: relative;
    left: 0;
    transition: left 500ms;
  }

  &:hover > span {
    left: 5px;
  }
}
</style>
