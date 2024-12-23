<template>
  <CentralBox
    title="Education"
    :topMarginRatio="0.075"
    maxWidth="var(--bs-breakpoint-lg)"
  >
    <div class="form-check form-switch mb-3">
      <input
        id="show-schools"
        v-model="showSchools"
        class="form-check-input"
        type="checkbox"
        role="switch"
      />
      <label class="form-check-label" for="show-schools"> Show Schools </label>
    </div>

    <div
      v-for="(school, i) in schools"
      :key="i"
      class="card mb-3"
      :class="{ reverse: i % 2 }"
    >
      <Transition name="slide-fade">
        <div v-if="!school.isSchool || showSchools" class="row g-0">
          <div v-if="i % 2 === 0" class="col-md-3 image-wrapper">
            <picture class="img-fluid rounded-start">
              <source
                v-for="img in school.images"
                :key="img"
                :type="`image/${img.split('.').at(-1)}`"
                :srcset="img"
              />
              <img :src="school.images.at(-1)" alt="school image" />
            </picture>
          </div>
          <div class="col-md-9">
            <div class="card-body shadow-lg">
              <h5 class="card-title">
                {{ school.name }}
              </h5>
              <h6 class="card-subtitle mb-2">{{ school.institution }}</h6>
              <p class="mb-2">
                <small>{{ school.duration }}</small>
              </p>
              <p class="card-text">
                <template v-if="school.description">
                  <strong class="">Thesis</strong>:
                  {{ school.description }}
                </template>
                <template v-if="school.supervisor">
                  <br />
                  <strong class="">Supervisor</strong>:
                  <a :href="school.supervisorUrl" target="_blank">
                    {{ school.supervisor }}
                  </a>
                </template>
              </p>
            </div>
          </div>
          <div v-if="i % 2 === 1" class="col-md-3 image-wrapper">
            <picture class="img-fluid rounded-start">
              <source
                v-for="img in school.images"
                :key="img"
                :type="`image/${img.split('.').at(-1)}`"
                :srcset="img"
              />
              <img :src="school.images.at(-1)" alt="school image" />
            </picture>
          </div>
        </div>
      </Transition>
    </div>
  </CentralBox>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import CentralBox from "./CentralBox.vue";

const showSchools = ref(false);

interface ISchool {
  images: string[];
  name: string;
  institution: string;
  duration: string;
  description?: string;
  supervisor?: string;
  supervisorUrl?: string;
  isSchool?: true;
}

const schools: ISchool[] = [
  {
    images: ["/dalu.webp", "/dalu.png"],
    name: "Master of Science in Computer Science",
    institution: "Dalhousie University",
    duration: "September 2021 – August 2023",
    description:
      "Comprehending Software Bugs Leveraging Code Structure in Neural Language Modelling",
    supervisor: "Masud Rahman",
    supervisorUrl:
      "https://scholar.google.ca/citations?user=9SrqOewAAAAJ&hl=en",
  },
  {
    images: ["/ku.webp", "/ku.png"],
    name: "Bachelor of Science in Computer Science and Engineering",
    institution: "Khulna University",
    duration: "January 2015 – February 2019",
    description:
      "Authorship Identification of Source Code Segments Written by Multiple Authors Using Stacking Ensemble Method",
    supervisor: "S.M. Rafizul Haque",
  },
  {
    images: ["/nic.png"],
    name: "Higher Secondary School",
    institution: "National Ideal College",
    duration: "July 2012 – June 2014",
    isSchool: true,
  },
  {
    images: ["/nis.jpeg"],
    name: "Secondary School",
    institution: "National Ideal School",
    duration: "January 2010 – June 2012",
    isSchool: true,
  },
  {
    images: ["/cpi.jpeg"],
    name: "Lower Secondary School",
    institution: "Chittagong Police Institution",
    duration: "September 2007 – December 2009",
    isSchool: true,
  },
  {
    images: ["/school.png"],
    name: "Lower Secondary School",
    institution: "Baishrashi Shiva Sundori Academy",
    duration: "January 2007 – August 2009",
    isSchool: true,
  },
  {
    images: ["/school.png"],
    name: "Primary School",
    institution: "Nurullagonj Government Primary School",
    duration: "January 2006 – December 2006",
    isSchool: true,
  },
  {
    images: ["/school.png"],
    name: "Primary School",
    institution: "Galaxy Pre-Cadet School",
    duration: "August 2005 – December 2005",
    isSchool: true,
  },
  {
    images: ["/pkgs.png"],
    name: "Primary School",
    institution: "Police Kindergarten School",
    duration: "February 2001 – July 2005",
    isSchool: true,
  },
  {
    images: ["/school.png"],
    name: "Primary School",
    institution: "Maijdee PTI Government Primary School",
    duration: "January 2001 – January 2001",
    isSchool: true,
  },
];
</script>

<style scoped lang="scss">
@import "~bootstrap/scss/functions";
@import "~bootstrap/scss/variables";

ul {
  a {
    color: var(--bs-cyan);
  }
}

.card {
  background-color: transparent;
  border: none;
  .image-wrapper {
    position: relative;
    display: none;
    align-items: center;

    @media screen and (min-width: map-get($grid-breakpoints, md)) {
      display: flex;
    }
    img {
      position: absolute;
      max-height: 150px;
      max-width: 120px;
      background-color: white;
      padding: 5px;
      border-radius: 5px;
      z-index: 1;
      right: 55px;

      transition: all 1s ease-in-out;
      translate: 0 -50%;
    }
  }

  &:hover,
  &:focus,
  &:active {
    .image-wrapper img {
      right: -20px;
    }
  }

  .card-subtitle {
    color: lightblue;
  }

  .card-body {
    position: relative;
    background-color: var(--bs-purple-800);
    border-radius: 5px;
    @media screen and (min-width: map-get($grid-breakpoints, sm)) {
      padding-left: 30px;
      padding-right: 30px;
    }
    .card-title {
      color: var(--bs-pink);
    }
  }
}

.reverse.card {
  .image-wrapper img {
    left: 75px;
  }

  &:hover,
  &:focus,
  &:active {
    .image-wrapper img {
      left: -20px;
    }
  }
}
</style>
