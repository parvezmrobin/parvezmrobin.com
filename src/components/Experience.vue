<template>
  <CentralBox title="Experience" maxWidth="var(--bs-breakpoint-lg)">
    <div class="form-check form-switch">
      <input
        id="show-minor-employments"
        v-model="showMinorEmployments"
        class="form-check-input"
        type="checkbox"
        role="switch"
      />
      <label class="form-check-label" for="show-minor-employments"
        >Show Minor Employments</label
      >
    </div>
    <template
      v-for="(experienceDescription, experience) in experiences"
      :key="experience"
    >
      <Transition name="slide-fade">
        <div
          v-if="showMinorEmployments || !experienceDescription.isMinor"
          class="row pt-4 hover purple rounded"
        >
          <div class="d-md-none">
            <h5 class="fw-normal">
              <span class="text-pink">{{ experience }}</span>
            </h5>
            <h6 class="d-flex justify-content-between align-items-baseline">
              {{ experienceDescription.position }}
              <em class="small text-nowrap" style="text-align: right">{{
                experienceDescription.time
              }}</em>
            </h6>
            <hr class="mt-0" />
          </div>

          <div class="col col-3 d-none d-md-block">
            <h4 class="fw-normal text-pink">{{ experience }}</h4>
            <h6 class="fw-normal">{{ experienceDescription.position }}</h6>
            <p class="small">
              <em>{{ experienceDescription.time }}</em>
            </p>
          </div>
          <div class="col col-md-9">
            <ul class="triangle">
              <li
                v-for="(work, i) in experienceDescription.works"
                :key="i"
                v-html="formatString(work)"
              />
            </ul>
          </div>
        </div>
      </Transition>
    </template>
  </CentralBox>
</template>

<script lang="ts" setup>
import { onBeforeMount, reactive, ref } from "vue";
import { formatString } from "../util";
import CentralBox from "./CentralBox.vue";

const showMinorEmployments = ref(false);

interface IExperience {
  position: string;
  time: string;
  works: string[];
  isMinor?: true;
}

const experiences: Record<string, IExperience> = {
  Siemens: {
    position: "Software Developer",
    time: "March 2024 — Present",
    works: [
      `For
      [Analog FastSPICE](https://eda.sw.siemens.com/en-US/ic/analog-fastspice/)
      – the fasted nanometer circuit verification platform, developed a
      stamping algorithm that takes up to <em>4 times less</em> memory in
      multithreaded runs.`,

      `Jointly developed a Matrix-Vector multiplication algorithm specific to
      symmetric matrices that is <em>40% faster</em> than the general-purpose
      algorithm.`,

      `
      For
      [Siemens EDA AI](https://eda.sw.siemens.com/en-US/trending-technologies/eda-ai-page/),
      developed a sparse pipeline (using <code>ElasticSearch</code>), and hybrid
      rerank pipeline (<code>ElasticSearch</code> & <code>Milvus</code>) for
      searching relevant documents.`,
    ],
  },
  ElderBerry: {
    position: "Software Developer (Contract)",
    time: "December 2023 — January 2024",
    works: [
      `
      For [ElderBerry](https://elderberry.care) – a platform to connect
      caregivers with the elderly, developed the payment gateway integration
      with <code>Stripe</code> and <code>Node.JS</code> that reduced error
      rates compared to the existing solution by <em>90%</em>.
      `,
    ],
    isMinor: true,
  },
  Metabob: {
    position: "Research Intern",
    time: "May 2022 — April 2023",
    works: [
      "Worked on a research project aiming to automatically explain software " +
        "bugs in natural language using cutting-edge deep learning techniques. " +
        "A recent developer survey shows that our developed tool can provide 43% " +
        "more accurate and 40% concise explanations of bugs (see [Publications](#publications)).",
      "Developed a web application backed by state-of-the-art language model to " +
        "explain defective source code using Python, Flask, PyTorch, and Vue JS " +
        "(see [Demo](https://www.youtube.com/watch?v=xga-ScvULpk)).",
    ],
  },
  NerdDevs: {
    position: "Software Engineer",
    time: "March 2019 — July 2021",
    works: [
      `Led the architected and development of [Daency](https://daency.com/), an
       online platform to learn dancing interactively. The tech stack was
       <code>TypeScript</code>, <code>Express JS</code>, <code>Vue JS</code>,
       <code>Mongo DB</code>, and <code>Docker</code>. Also integrated and
       maintained [WebRTC](https://agora.io), [AWS](https://aws.amazon.com),
       [GCP](https://cloud.google.com/),
       [Push Notification](https://www.pubnub.com/),
       [Stripe](https://stripe.com/), [Task Queue](https://docs.bullmq.io/)
       (<code>redis</code>) and various other services. Collaborated with the
       stakeholders to engineer requirements and plan sprints in the agile
       process with a globally distributed team, while reducing requirement
       changes during sprints from ≈ 30% to < 5%.`,
      `In [Bikribatta](https://www.bikribatta.com/) inventory solution,
       *architected* accounts, reports, and employee management components.
       Written a stock management microservice using <code>Golang</code> that
       reduces the latency 10X. Further, built a desktop app for the Point of
       Sales component using [Electron](https://www.electronjs.org/), which also
       works in offline mode with an eventual consistency scheme.`,
      `Migrated the subscription backend of
       [Wonster Words](https://apps.apple.com/us/app/wonster-words-learning-games/id881119321)
       iOS app store game from <code>node.js</code> to <code>ASP.Net</code>
       using Microsoft Azure
       [FaaS](https://azure.microsoft.com/en-us/services/functions/),
       [Cosmos DB](https://azure.microsoft.com/en-us/services/cosmos-db/),
       and [Queue Storage](https://azure.microsoft.com/en-us/services/storage/queues/).`,
      "Contributed to several in-house [React Native](https://reactnative.dev/) " +
        "based mobile applications.",
      "Hosted two in-house workshops on ‘Modern Web Development with Vue JS’ " +
        "and ‘Sustainable Architecture with TypeScript’.",
    ],
  },

  "Festive.Rocks": reactive({
    position: "Co-founder and Tech Lead ",
    time: "January 2023 — Present",
    works: [
      "Created a low latency, high-performance website to run on slow internet " +
        "regions for the target market.",
      "Led a team of four developers to complete a fully featured web application " +
        "within three months while maintaining very high code quality and more " +
        "than 90% test coverage.",
    ],
  }),
  "Dalhousie University": {
    position: "Teaching Assistant",
    time: "September 2021 — December 2022",
    works: [
      "<span class='h6'>Process of Data Science</span> (graduate course): Providing hands-on learning experience in " +
        "cutting-edge data science technologies (e.g., geospatial data) in labs, holding office hours to resolve " +
        "difficulties for the students, and assisting the instructor during classes",
      "<span class='h6'>Intro to Software Project</span>: Taking classes on <code>Docker</code> and containerization, " +
        "directly mentoring, and evaluating four groups in the agile process and maintaining their <code>GCP</code> instances",
      "<span class='h6'>Software Development</span>: Taking labs and helping the students in resolving issues " +
        "regarding version controlling, test driven development, code smells, refactoring, and more",
    ],
    isMinor: true,
  },
};

onBeforeMount(async () => {
  try {
    const res = await fetch(
      `https://api.festive.rocks/api/feed/count?Verified=1&StartBefore=${new Date().toISOString()}`,
    );
    const resBody = await res.json();
    experiences["Festive.Rocks"].works.splice(
      1,
      0,
      `
      Seamlessly hosted
      [${resBody["Total"]} events](https://festive.rocks/feed/past?Verified=1)
      with great customer satisfaction.`,
    );
  } catch (e) {
    console.error(e);
  }
});
</script>

<style scoped lang="scss">
@import "~bootstrap/scss/functions";
@import "~bootstrap/scss/variables";

::v-deep(.h6) {
  color: var(--bs-cyan-200);
  font-weight: bold;
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
</style>
