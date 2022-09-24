<template>
  <div
    id="experience"
    class="page d-flex justify-content-center"
    style="padding-top: 3rem"
  >
    <div class="central-box">
      <Heading class="pb-5">Experience</Heading>
      <div class="d-flex flex-column flex-sm-row">
        <ul
          class="nav flex-sm-column justify-content-center justify-content-sm-start"
        >
          <li
            v-for="(_, experience) in experiences"
            :key="experience"
            class="nav-item"
          >
            <a
              role="button"
              class="nav-link"
              :class="
                experience === selectedExperience
                  ? 'active text-info'
                  : 'text-secondary'
              "
              @mouseover="selectedExperience = experience"
            >
              {{ experience }}
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
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";
import { formatString } from "../util";
import Heading from "./Heading.vue";

const experiences = {
  NerdDevs: {
    position: "Software Engineer",
    time: "March 2019 — July 2021",
    works: [
      "Architected and designed [daency.com](https://daency.com/), an online platform to learn " +
        "dancing interactively. The tech stack was TypeScript, Express JS, Vue JS, Mongo DB, and " +
        "Docker. Also integrated and maintained [WebRTC](https://agora.io), " +
        "[AWS](https://aws.amazon.com), [GCP](https://cloud.google.com/), [Push Notification]" +
        "(https://www.pubnub.com/), [Stripe](https://stripe.com/) and various other services.",
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
      "_Process of Data Science (graduate course)_: Providing hands-on learning experience in " +
        "cutting-edge data science technologies in labs, holding office hours to resolve " +
        "difficulties for the students, and assisting the instructor during classes",
      "_Intro to Software Project_: Taking classes on Docker and containerization, " +
        "directly mentoring, and evaluating four groups in the agile process",
      "_Software Development_: Taking labs and helping the students in resolving issues",
    ],
  },
};
const selectedExperience = ref<keyof typeof experiences>("NerdDevs");
const experienceDescription = computed(() => {
  return experiences[selectedExperience.value];
});
</script>

<style scoped lang="scss">
$sm: 576px;

.nav-link {
  border-left: 3px solid rgb(var(--bs-secondary-rgb), 33%);
  white-space: nowrap;

  @media screen and (max-width: $sm) {
    --bs-nav-link-padding-x: 0.5rem;
    border-left: none;
    border-bottom: 3px solid rgb(var(--bs-secondary-rgb), 33%);
  }
  &.active {
    border-left: 3px solid var(--bs-info);
    @media screen and (max-width: $sm) {
      border-left: none;
      border-bottom: 3px solid var(--bs-info);
    }
  }
}
</style>
