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
      <label class="form-check-label" for="show-minor-employments">
        Show Minor Employments
      </label>
    </div>

    <template
      v-for="(experienceDescription, experience) in experiences"
      :key="experience"
    >
      <Transition name="slide-fade">
        <div
          v-show="showMinorEmployments || !experienceDescription.isMinor"
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
              <template
                v-for="(work, i) in experienceDescription.works"
                :key="i"
              >
                <li
                  v-if="typeof work === 'string'"
                  v-html="formatString(work)"
                />
                <Transition v-else-if="'activity' in work" name="slide-fade">
                  <p
                    v-show="showMinorEmployments || !work.isMinor"
                    v-html="formatString(work.activity)"
                  />
                </Transition>
                <div v-else v-show="showMinorEmployments || !work.isMinor">
                  <span v-html="formatString(work.header)" />
                  <ul>
                    <template
                      v-for="activity in work.activities"
                      :key="activity"
                    >
                      <li
                        v-if="typeof activity === 'string'"
                        v-html="formatString(activity)"
                      />
                      <Transition
                        v-else-if="'activity' in activity"
                        name="slide-fade"
                      >
                        <li
                          v-show="showMinorEmployments || !activity.isMinor"
                          v-html="formatString(activity.activity)"
                        />
                      </Transition>
                      <li v-else style="color: red">TOO NESTED</li>
                    </template>
                  </ul>
                </div>
              </template>
            </ul>
          </div>
        </div>
      </Transition>
    </template>
  </CentralBox>
</template>

<script lang="ts" setup>
import { onBeforeMount, ref } from "vue";
import { formatString } from "../util";
import CentralBox from "./CentralBox.vue";

const showMinorEmployments = ref(false);

type RecursiveWork =
  | string
  | {
      isMinor?: true;
      activity: string;
    }
  | {
      isMinor?: true;
      header: string;
      activities: RecursiveWork[];
    };

interface IExperience {
  position: string;
  time: string;
  works: RecursiveWork[];
  isMinor?: true;
}

const experiences: Record<string, IExperience> = {
  Siemens: {
    position: "Software Developer",
    time: "March 2024 — Present",
    works: [
      {
        header: `
      For
      [Analog FastSPICE](https://eda.sw.siemens.com/en-US/ic/analog-fastspice/)
      – the fastest nanometer circuit verification platform:
      `,

        activities: [
          `
      Developed an
          [!element stamping algorithm](https://onlinelibrary.wiley.com/doi/pdf/10.1002/9781119078388.app2)
          that takes up to <em>4 times less</em> memory in multithreaded runs.
      `,
        ],
      },
      {
        header: `
        For
        [Siemens EDA AI](https://eda.sw.siemens.com/en-US/trending-technologies/eda-ai-page/):
        `,
        activities: [
          `
          Developed a hybrid rerank
          [!RAG](https://aws.amazon.com/what-is/retrieval-augmented-generation/)
          pipeline for searching relevant documents using both semantic and
          keyword-based search (<code>OpenSearch</code> & <code>Milvus</code>).
          `,
          `
          Architected and jointly developed an Auth service that facilitates multiple
          authentication backends (e.g., OAuth, LDAP) and multiple authorization
          schemes (RBAC, ABAC).
          `,
          `
          Developed an [!MCP tool](https://modelcontextprotocol.io/specification/2025-11-25/server/tools)
          to search all existing tools, which reduces hallucination during MCP
          tool calls by ≈&nbsp;90% when the number of available tools is more
          than 20.
          `,
          {
            isMinor: true,
            activity: `
              Jointly architected and developed an on-premise LLM fine-tuning
              platform based on <code>PyTorch</code>, <code>transformers</code>,
              and <code>PEFT</code> libraries supporting several fine-tuning
              methods (e.g., [!LoRA](https://arxiv.org/abs/2106.09685),
              [!QLoRA](https://arxiv.org/abs/2305.14314)) and task types (e.g.,
              sequence classification, [!causal LM](https://huggingface.co/docs/transformers/en/tasks/language_modeling#causal-language-modeling), question answering).
              `,
          },
          {
            isMinor: true,
            activity: `
              Developed a CI/CD pipeline with automated unit tests, static
              analysis, four different deployments based on Podman, Docker,
              Kubernetes & Helm, and nightly stress and performance
              benchmarking.
              `,
          },
        ],
      },
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
      {
        isMinor: true,
        activity:
          "Developed a web application backed by state-of-the-art language model to " +
          "explain defective source code using Python, Flask, PyTorch, and Vue JS " +
          "(see [Demo](https://www.youtube.com/watch?v=xga-ScvULpk)).",
      },
    ],
  },
  NerdDevs: {
    position: "Software Engineer",
    time: "March 2019 — July 2021",
    works: [
      {
        header: `
        In [Daency](https://www.crunchbase.com/organization/daency), an
        online platform to learn dancing interactively:
        `,
        activities: [
          `
          Led the architecture and development where used
          <code>TypeScript</code>, <code>Express JS</code>, <code>Vue JS</code>,
          <code>Mongo DB</code>, and <code>Docker</code> as the tech stack.
          `,
          `
          Integrated and maintained [!WebRTC](https://agora.io),
          [!AWS](https://aws.amazon.com) (S3 + Cloudflare),
          [!GCP](https://cloud.google.com/) (Authentication),
          [!Push Notification](https://www.pubnub.com/),
          [!Stripe](https://stripe.com/), [!Task Queue](https://docs.bullmq.io/)
          (<code>redis</code>) and various other services.
          `,
          `
          Collaborated with the stakeholders to engineer requirements and plan
          sprints in the agile process with a globally distributed team, while
          reducing requirement changes during sprints from ≈&nbsp;30% to <&nbsp;5%.
          `,
        ],
      },
      {
        isMinor: true,
        header: `
        In [Bikribatta](https://www.bikribatta.com/) inventory solution:
        `,
        activities: [
          `*Architected* accounts, reports, and employee management components.`,
          `Written a stock management microservice using <code>Golang</code> that
          reduces the latency 10X.`,
          `Built a desktop app for the Point of
          Sales component using [!Electron](https://www.electronjs.org/), which also
       works in offline mode with an eventual consistency scheme.`,
        ],
      },
      {
        header: `
          Migrated the subscription backend of
          [!Wonster Words](https://apps.apple.com/us/app/wonster-words-learning-games/id881119321)
          iOS app store game from <code>node.js</code> to <code>ASP.Net</code>
          `,
        activities: [
          `Used a [!Queue Storage](https://azure.microsoft.com/en-us/services/storage/queues/)
          and Azure
          [!FaaS](https://azure.microsoft.com/en-us/services/functions/) to
          handle event streams from the iOS app to analyze user behaviour and
          handle subscription jobs, storing the results in a
          [!Cosmos DB](https://azure.microsoft.com/en-us/services/cosmos-db/).
          `,
          `Reduced the failure rate by ≈ 10% and overall system latency by 
          ≈&nbsp;30%.
          `,
        ],
      },
      {
        isMinor: true,
        activity:
          "Contributed to several in-house [React Native](https://reactnative.dev/) " +
          "based mobile applications.",
      },
      {
        isMinor: true,
        activity:
          "Hosted two in-house workshops on ‘Modern Web Development with Vue JS’ " +
          "and ‘Sustainable Architecture with TypeScript’.",
      },
    ],
  },

  "Festive.Rocks": {
    position: "Co-founder and Tech Lead ",
    time: "January 2023 — Present",
    works: [
      "Created a low latency, high-performance website to run on slow internet " +
        "regions for the target market.",
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

::v-deep(ul) ul {
  padding-left: 1rem;
  li::marker {
    content: "–";
  }
}
</style>
