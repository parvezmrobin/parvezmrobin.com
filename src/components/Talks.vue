<template>
  <CentralBox
    id="talks"
    title="Talks & Presentations"
    :topMarginRatio="0.075"
    maxWidth="var(--bs-breakpoint-md)"
  >
    <ul class="triangle">
      <li v-for="(talk, i) in talks" v-once :key="i">
        <em class="text-secondary me-1">[{{ talk.time }}]</em>
        <span class="cursive text-info">{{ talk.title }}</span> on
        <a v-if="talk.eventLink" :href="talk.eventLink" target="_blank"
          ><span style="color: var(--bs-body-color)">{{ talk.event }}</span></a
        >
        <template v-else>{{ talk.event }}</template>
        <template v-if="talk.organizer">
          organized by
          <a
            v-if="talk.organizerLink"
            :href="talk.organizerLink"
            target="_blank"
            ><span style="color: var(--bs-body-color)">{{
              talk.organizer
            }}</span></a
          >
          <span v-else>{{ talk.organizer }}</span>
        </template>
        <template v-if="talk.location">
          held in <em>{{ talk.location }}</em></template
        >.&nbsp;&nbsp;<a
          v-if="talk.slide"
          :href="talk.slide"
          target="_blank"
          class="btn btn-outline-secondary d-inline"
          style="
            --bs-btn-padding-y: 0;
            --bs-border-radius: 0.25rem;
            --bs-btn-line-height: 1;
          "
          aria-label="View Slide"
          >View Slide</a
        >
      </li>
    </ul>
  </CentralBox>
</template>

<script lang="ts" setup>
import CentralBox from "./CentralBox.vue";

interface ITalk {
  time: string;
  title: string;
  event: string;
  eventLink?: string;
  organizer?: string;
  organizerLink?: string;
  location?: string;
  slide?: string;
}

const talks: ITalk[] = [
  {
    time: "October 2025",
    title: "Performance Efficient Fine-Tuning",
    event: "DevFest 2025",
    eventLink:
      "https://gdg.community.dev/events/details/google-gdg-saskatoon-presents-devfest-saskatoon-2025-code-connect-create/",
    organizer: "Google Developers Group – Saskatoon",
    organizerLink: "https://gdg.community.dev/gdg-saskatoon/",
    location: "University of Saskatchewan, Canada",
    slide:
      "https://docs.google.com/presentation/d/1Xnfq9wN8HXdeoNimrjPZbVjwFENOe9cz",
  },
  {
    time: "November 2024",
    title: "Retrieval-Augmented Generation (RAG)",
    event: "DevFest 2024",
    eventLink:
      "https://gdg.community.dev/events/details/google-gdg-saskatoon-presents-devfest-2024-gdg-saskatoon/",
    organizer: "Google Developers Group – Saskatoon",
    organizerLink: "https://gdg.community.dev/gdg-saskatoon/",
    location: "University of Saskatchewan, Canada",
    slide:
      "https://docs.google.com/presentation/d/10-77mPM3VtF0HfFuuuCqESdLAeORwMJl",
  },
  {
    time: "October 2024",
    title: "Containerization and Why Should I Care",
    event: "CMPT 370: Intermediate Software Engineering program",
    organizer: "Department of Computer Science and Dr. Zadia Codabux",
    location: "University of Saskatchewan, Canada",
    slide:
      "https://docs.google.com/presentation/d/1-ftOOS9yq6-ctNEsNzwMO4vhEgx34kYp",
  },
  {
    time: "October 2024",
    title: "Intelligent Software For Future Space",
    event: "2024 NASA International Space Apps Challenge",
    eventLink:
      "https://www.spaceappschallenge.org/nasa-space-apps-2024/2024-local-events/saskatoon/?tab=details",
    organizer: "NASA ft. The University of Saskatchewan Space Design Team",
    organizerLink: "https://www.spaceappschallenge.org/",
    slide:
      "https://docs.google.com/presentation/d/1cfSMEffdzqRV3TSVy61nrMFE9cdoBkEc",
  },
  {
    time: "April 2024",
    title: "The History and Evolution of Generative Language Models",
    event: "IWD 2024: Let's build with AI and #ImpactTheFuture",
    eventLink:
      "https://gdg.community.dev/events/details/google-gdg-saskatoon-presents-iwd-2024-lets-build-with-ai-and-impactthefuture",
    organizer: "Google Developers Group – Saskatoon",
    organizerLink: "https://gdg.community.dev/gdg-saskatoon",
    slide:
      "https://docs.google.com/presentation/d/1MbUaFKLrVV104JytnmzCNMuRakC3fYYS",
  },
  {
    time: "December 2023",
    title: "Introduction to Generative AI for Software Engineers",
    event:
      "Introduction to Generative AI: Under the hood of Large Language Models",
    eventLink:
      "https://festive.rocks/event/view/a6e88841-987e-4bbf-b88e-7866e5711724",
    organizer: "CodeConnect",
    organizerLink: "https://festive.rocks/feed/codeconnect",
  },
  {
    time: "May 2023",
    title: "Defectors: A Large, Diverse Python Dataset for Defect Prediction",
    event:
      "International Conference on Mining Software Repositories (MSR) 2023",
    eventLink: "https://conf.researchr.org/home/msr-2023",
    location: "Melbourne, Australia",
    slide:
      "https://docs.google.com/presentation/d/1Q9HoTP7wJM-g0uCoUnUfLqwY4-49Cmt8",
  },
  {
    time: "May 2023",
    title:
      "Bugsplainer: Explaining Software Bugs Leveraging Code Structures in Neural Machine Translation",
    event: "International Conference on Software Engineering (ICSE) 2023",
    eventLink: "https://conf.researchr.org/home/icse-2023",
    location: "Melbourne, Australia",
    slide:
      "https://docs.google.com/presentation/d/1Zxq5ljogHL7lbpIAKkCQFU7MqQixBiCB",
  },
  {
    time: "December 2019",
    title:
      "Author Identification of Source Code Segments Written by Multiple Authors Using Stacking Ensemble Method",
    event:
      "International Conference on Computer and Information Technology (ICCIT) 2019",
    eventLink: "https://iccit.org.bd/2019/",
    location: "Dhaka, Bangladesh",
    slide:
      "https://docs.google.com/presentation/d/1Om6nNTnU6y9VbMYe1N3Q66B-bBEyJXQr",
  },
];
</script>

<style scoped>
ul.triangle li {
  margin-bottom: 1rem;
}
</style>
