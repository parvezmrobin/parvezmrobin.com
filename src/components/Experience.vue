<template>
  <div
    id="experience"
    class="vh-100 d-flex justify-content-center"
    style="padding-top: 3rem"
  >
    <div class="experience">
      <div class="d-flex align-items-center pb-5">
        <div class="display-6">Experience</div>
        <div class="flex-grow-1 border-bottom border-2 ms-3 pt-2"></div>
      </div>
      <div class="d-flex">
        <ul class="nav flex-column">
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
              @click="selectedExperience = experience"
            >
              {{ experience }}
            </a>
          </li>
        </ul>

        <div class="ps-3 pt-1">
          <h4>{{ experienceDescription.position }}</h4>
          <p>
            <em>{{ experienceDescription.time }}</em>
          </p>
          <ul class="works">
            <li
              v-for="(work, i) in experienceDescription.works"
              :key="i"
              v-html="formatWork(work)"
            />
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";

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

const linkRegex = /\[(.*?)]\((.*?)\)/g;
const emRegex = /_(.*?)_/g;
function formatWork(work: string) {
  return work
    .replaceAll(linkRegex, '<a href="$2" target="_blank">$1</a>')
    .replaceAll(emRegex, "<em>$1</em>");
}
</script>

<style scoped lang="scss">
$grid-breakpoints: (
  xs: 0,
  sm: 576px,
  md: 768px,
  lg: 992px,
  xl: 1200px,
  xxl: 1400px,
);

.experience {
  max-width: map-get($grid-breakpoints, md);
}

@each $breakpoint, $thresh in $grid-breakpoints {
  @media screen and (min-width: $thresh) {
    .experience {
      margin-top: calc($thresh / 10);
    }
  }
}

.nav-link {
  border-left: 3px solid rgb(var(--bs-secondary-rgb), 50%);
  white-space: nowrap;

  &.active {
    border-left: 3px solid var(--bs-info);
  }
}

ul.works {
  padding-left: 1rem;
  li::marker {
    content: "▹";
  }

  li {
    padding-left: 1rem;
  }
}
</style>
