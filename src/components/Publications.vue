<template>
  <CentralBox
    id="publications"
    title="Publications"
    :topMarginRatio="0"
    maxWidth="var(--bs-breakpoint-md)"
  >
    <Publication
      v-for="publication in publications"
      :key="publication.title"
      v-bind="publication"
      @show:abstract="showAbstract(publication)"
    />
  </CentralBox>

  <div
    ref="abstractModalEl"
    class="modal fade"
    tabindex="-1"
    style="--bs-modal-bg: var(--bs-purple-800)"
  >
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title text-pink">
            {{ selectedPublication?.title }}
          </h5>
          <button
            type="button"
            class="btn-close btn-close-white d-inline-block d-md-none"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div class="modal-body" style="text-align: justify">
          <p>
            <strong>Abstract:</strong>
            {{ selectedPublication?.abstract }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Modal } from "bootstrap";
import { onMounted, ref } from "vue";
import CentralBox from "./CentralBox.vue";
import Publication, { IPublication } from "./Publication.vue";

const abstractModalEl = ref<HTMLDivElement | null>(null);
let abstractModal: Modal;
onMounted(() => {
  if (!abstractModalEl.value) {
    throw new Error();
  }
  abstractModal = new Modal(abstractModalEl.value);
});

const selectedPublication = ref<IPublication | null>(null);
function showAbstract(publication: IPublication) {
  selectedPublication.value = publication;
  abstractModal.show();
}

const publications: IPublication[] = [
  {
    title:
      "Explaining Software Bugs Leveraging Code Structures in Neural Machine Translation",
    description:
      "*Parvez Mahbub*, Ohiduzzaman Shuvo and M. Masudur Rahman, In Proceeding " +
      "of The 45<sup>th</sup> IEEE/ACM International Conference on Software Engineering " +
      "(ICSE), 2023, pp. 12, Melbourne, Australia, May 2023 (To appear)",
    keywords: [
      "Software Bug",
      "Bug Explanation",
      "Software Engineering",
      "Software Maintenance",
      "Natural Language Processing",
      "Deep Learning",
      "Transformers",
    ],
    prePrint: "https://arxiv.org/abs/2212.04584",
    abstract:
      "Software bugs claim ≈50% of development time and cost the global economy billions of dollars. Once a bug is reported, the assigned developer attempts to identify and understand the source code responsible for the bug and then corrects the code. Over the last five decades, there has been significant research on automatically finding or correcting software bugs. However, there has been little research on automatically explaining the bugs to the developers, which is essential but a highly challenging task. In this paper, we propose Bugsplainer, a transformer-based generative model, that generates natural language explanations for software bugs by learning from a large corpus of bug-fix commits. Bugsplainer can leverage structural information and buggy patterns from the source code to generate an explanation for a bug. Our evaluation using three performance metrics shows that Bugsplainer can generate understandable and good explanations according to Google's standard, and can outperform multiple baselines from the literature. We also conduct a developer study involving 20 participants where the explanations from Bugsplainer were found to be more accurate, more precise, more concise and more useful than the baselines.",
  },
  {
    title:
      "Authorship Identification of Source Code Segments Written by Multiple Authors Using Stacking Ensemble Method",
    description:
      "*Parvez Mahbub*, Naz Zarreen Oishie and S. M. Rafizul Haque, In Proceeding " +
      "of the 22<sup>nd</sup> International Conference on Computer and Information " +
      "Technology (ICCIT), 2019, pp. 1-6",
    keywords: [
      "Source Code Authorship Identification",
      "Deep Neural Network",
      "Random Forest",
      "Support Vector Machine",
      "Stacking Ensemble",
    ],
    prePrint: "https://arxiv.org/abs/2212.05610",
    abstract:
      "Source code segment authorship identification is the task of identifying the author of a source code segment through supervised learning. It has vast importance in plagiarism detection, digital forensics, and several other law enforcement issues. However, when a source code segment is written by multiple authors, typical author identification methods no longer work. Here, an author identification technique, capable of predicting the authorship of source code segments, even in case of multiple authors, has been proposed which uses stacking ensemble classifier. This proposed technique is built upon several deep neural networks, random forests and support vector machine classifiers. It has been shown that for identifying the authorgroup, a single classification technique is no longer sufficient and using a deep neural network based stacking ensemble method can enhance the accuracy significantly. Performance of the proposed technique has been compared with some existing methods which only deal with the source code segments written exactly by a single author. Despite the harder task of authorship identification for source code segments written by multiple authors, our proposed technique has achieved promising results evident by the identification accuracy, compared to the related works which only deal with code segments written by a single author.",
  },
];
</script>
