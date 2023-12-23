<template>
  <CentralBox
    id="publications"
    title="Publications"
    :topMarginRatio="0"
    maxWidth="var(--bs-breakpoint-lg)"
  >
    <div>
      <Publication
        v-for="publication in publications"
        :key="publication.title"
        v-bind="publication"
        @show:abstract="showAbstract(publication)"
      />
    </div>
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
      "(ICSE), 2023, pp. 640-652, Melbourne, Australia, May 2023",
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
    demo: "https://www.youtube.com/watch?v=xga-ScvULpk",
    prototype: "https://bugsplainer.research.cs.dal.ca/",
    abstract:
      `Software bugs claim ≈50% of development time and cost the global economy billions of dollars.
      Once a bug is reported, the assigned developer attempts to identify and understand the source
      code responsible for the bug and then corrects the code. Over the last five decades, there has
      been significant research on automatically finding or correcting software bugs. However, there
      has been little research on automatically explaining the bugs to the developers, which is
      essential but a highly challenging task. In this paper, we propose Bugsplainer, a
      transformer-based generative model, that generates natural language explanations for software
      bugs by learning from a large corpus of bug-fix commits. Bugsplainer can leverage structural
      information and buggy patterns from the source code to generate an explanation for a bug. Our
      evaluation using three performance metrics shows that Bugsplainer can generate understandable
      and good explanations according to Google's standard, and can outperform multiple baselines
      from the literature. We also conduct a developer study involving 20 participants where the
      explanations from Bugsplainer were found to be more accurate, more precise, more concise and
      more useful than the baselines.`,
  },
  {
    title:
      "Predicting Line-Level Defects by Capturing Code Contexts with Hierarchical Transformers",
    description:
      "*Parvez Mahbub* and M. Masudur Rahman, In Proceeding " +
      "of The 31<sup>st</sup> IEEE International Conference on Software Analysis, Evolution and " +
      "Reengineering (SANER), 2024, pp. 12, Rovaniemi, Finland, March 2024 (to appear)",
    keywords: [
      "Software Quality Assurance",
      "Line Level Defect Prediction",
      "Code Context",
      "Code Structure",
      "Software Engineering",
      "Software Maintenance",
      "Deep Learning",
      "Transformers",
    ],
    prePrint: "https://arxiv.org/abs/2312.11889",
    abstract:
      `Software defects consume 40% of the total budget in software development and cost the global
      economy billions of dollars every year. Unfortunately, despite the use of many software
      quality assurance (SQA) practices in software development (e.g., code review, continuous
      integration), defects may still exist in the official release of a software product.
      Therefore, prioritizing SQA efforts for the vulnerable areas of the codebase is essential to
      ensure the high quality of a software release. Predicting software defects at the line level
      could help prioritize the SQA effort but is a highly challenging task given that only ≈3% of
      lines of a codebase could be defective. Existing works on line-level defect prediction often
      fall short and cannot fully leverage the line-level defect information. In this paper, we
      propose Bugsplorer, a novel deep-learning technique for line-level defect prediction. It
      leverages a hierarchical structure of transformer models to represent two types of code
      elements: code tokens and code lines. Unlike the existing techniques that are optimized for
      file-level defect prediction, Bugsplorer is optimized for a line-level defect prediction
      objective. Our evaluation with five performance metrics shows that Bugsplorer has a promising
      capability of predicting defective lines with 26–72% better accuracy than that of the
      state-of-the-art technique. It can rank the first 20% defective lines within the top 1–3%
      suspicious lines. Thus, Bugsplorer has the potential to significantly reduce SQA costs by
      ranking defective lines higher.`,
  },
  {
    title: "Defectors: A Large, Diverse Python Dataset for Defect Prediction",
    description:
      "*Parvez Mahbub*, Ohiduzzaman Shuvo and M. Masudur Rahman, In Proceeding " +
      "of The 20<sup>th</sup> Mining Software Repositories " +
      "(MSR), 2023, pp. 393-397, Melbourne, Australia, May 2023",
    keywords: [
      "Defect Prediction",
      "Just-in-Time",
      "Dataset",
      "Software Engineering",
      "Software Maintenance",
    ],
    prePrint: "https://arxiv.org/abs/2303.04738",
    abstract:
      "Defect prediction has been a popular research topic where " +
      "machine learning (ML) and deep learning (DL) have found numerous " +
      "applications. However, these ML/DL-based defect prediction models " +
      "are often limited by the quality and size of their datasets. " +
      "In this paper, we present Defectors, a large dataset for just-in-time " +
      "and line-level defect prediction. Defectors consists of ≈ 213K source " +
      "code files (≈ 93K defective and ≈ 120K defect-free) that span across " +
      "24 popular Python projects. These projects come from 18 different " +
      "domains, including machine learning, automation, and internet-of-things. " +
      "Such a scale and diversity make Defectors a suitable dataset for training " +
      "ML/DL models, especially transformer models that require large and diverse " +
      "datasets. We also foresee several application areas of our dataset " +
      "including defect prediction and defect explanation. " +
      "Dataset Link: https://doi.org/10.5281/zenodo.7708984",
  },
  {
    title:
      "Bugsplainer: Leveraging Code Structures to Explain Software Bugs with Neural Machine Translation",
    description:
      "*Parvez Mahbub*, M. Masudur Rahman, Ohiduzzaman Shuvo and Avinash Gopal, In Proceeding " +
      "of The 39<sup>th</sup> IEEE International Conference on Software Maintenance and Evolution " +
      "(ICSME 2023), 2023, pp. 6, Bogota, Colombia, October 2023",
    keywords: [
      "Software Bug",
      "Bug Explanation",
      "Software Engineering",
      "Software Maintenance",
      "Natural Language Processing",
      "Deep Learning",
      "Neural Text Generation",
    ],
    demo: "https://youtu.be/xga-ScvULpk",
    prePrint: "https://arxiv.org/abs/2308.12267",
    abstract:
      `Software bugs cost the global economy billions of dollars each year and take up ≈50% of the development time.
Once a bug is reported, the assigned developer attempts to identify and understand the source code responsible for the bug and then corrects the code.
Over the last five decades, there has been significant research on automatically finding or correcting software bugs.
However, there has been little research on automatically explaining the bugs to the developers, which is essential but a highly challenging task.
In this paper, we propose Bugsplainer, a novel web-based debugging solution, that generates natural language explanations for software bugs by learning from a large corpus of bug-fix commits.
Bugsplainer leverages code structures to reason about a bug and employs the fine-tuned version of a text generation model -- CodeT5 -- to generate the explanations.` +
      "Tool video: https://youtu.be/xga-ScvULpk",
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
  {
    title:
      "Recommending Code Reviews Leveraging Code Changes with Structured Information Retrieval",
    description:
      "Ohiduzzaman Shuvo, *Parvez Mahbub* and M. Masudur Rahman, In Proceeding " +
      "of The 39<sup>th</sup> International Conference on Software Maintenance and Evolution " +
      "(ICSME), 2023, pp. 12, Bogotá, Colombia, October 2023 (To appear)",
    keywords: [
      "Software Engineering",
      "Code Reviews",
      "Code Changes",
      "Information Retrieval",
      "Software Maintenance",
    ],
    prePrint: "https://arxiv.org/abs/2303.04738",
    abstract: `Review comments are one of the main building
    blocks of modern code reviews. Manually writing code review
    comments could be time-consuming and technically challenging.
    Recently, an information retrieval (IR) based approach
    has been proposed to automatically recommend relevant code
    review comments for method-level code changes. However, this
    technique overlooks the structured items (e.g., class name, library
    information) from the source code and is applicable only for
    method-level changes. In this paper, we propose a novel technique
    for relevant review comments recommendation – RevCom – that
    leverages various code-level changes using structured information
    retrieval. RevCom uses different structured items from source
    code and can recommend relevant reviews for all types of changes
    (e.g., method-level and non-method-level). Our evaluation using
    three performance metrics show that RevCom outperforms both
    IR-based and DL-based baselines by up to 49.45% and 23.57%
    margins in BLEU score in recommending review comments.
    We find that RevCom can recommend review comments with
    an average BLEU score of ≈ 26.63%. According to Google’s
    AutoML Translation documentation, such a BLEU score indicates
    that the review comments can capture the original intent of
    the reviewers. All these findings suggest that RevCom can
    recommend relevant code reviews and has the potential to reduce
    the cognitive effort of human code reviewers`,
  },
];
</script>
