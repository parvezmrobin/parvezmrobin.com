<template>
  <CentralBox title="Experience" maxWidth="var(--bs-breakpoint-lg)">
    <div
      v-for="(experienceDescription, experience) in experiences"
      :key="experience"
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
  </CentralBox>
</template>

<script lang="ts" setup>
import { formatString } from "../util";
import CentralBox from "./CentralBox.vue";

interface IExperience {
  position: string;
  time: string;
  works: string[];
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
      developed an integration test framework
      that can deploy the necessary containers (as a service) during the test
      and tear them down after the test session is completed. This framework
      reduced the <em>amortized</em> test setup time by <em>50%</em>.
      `,
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

  "Festive.Rocks": {
    position: "Co-founder and Tech Lead ",
    time: "January 2023 — Present",
    works: [
      "Created a low latency, high-performance website to run on slow internet " +
        "regions for the target market.",
      "Seamlessly hosted two full-sold events with great customer satisfaction, " +
        "which resulted in getting 3 more big events in the coming months.",
      "Led a team of four developers to complete a fully featured web application " +
        "within three months while maintaining very high code quality and more " +
        "than 90% test coverage.",
    ],
  },
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
  },
};
</script>

<style scoped lang="scss">
@import "~bootstrap/scss/functions";
@import "~bootstrap/scss/variables";

::v-deep(.h6) {
  color: var(--bs-cyan-200);
  font-weight: bold;
}
</style>
