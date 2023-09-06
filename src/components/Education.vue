<template>
  <CentralBox
    title="Education"
    :topMarginRatio="0.075"
    maxWidth="var(--bs-breakpoint-md)"
  >
    <div
      v-for="(school, i) in schools"
      :key="i"
      class="card mb-3"
      :class="{ reverse: i % 2 }"
    >
      <div class="row g-0">
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
            <h6 class="card-subtitle mb-2">{{ school.duration }}</h6>
            <p class="card-text">
              <span class="text-info"><em>Thesis</em>:</span>
              {{ school.description }}
            </p>
            <p class="card-text"><strong>CGPA:</strong> {{ school.cgpa }}</p>
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
    </div>
  </CentralBox>
</template>

<script lang="ts" setup>
import CentralBox from "./CentralBox.vue";

interface ISchool {
  images: string[];
  name: string;
  duration: string;
  description: string;
  cgpa: string;
}

const schools: ISchool[] = [
  {
    images: ["/dalu.webp", "/dalu.png"],
    name: "Dalhousie University – Master’s in Computer Science",
    duration: "September 2021 – August 2023",
    description:
      "Comprehending Software Bugs Leveraging Code Structure in Neural Language Modelling",
    cgpa: "4.30/4.30",
  },
  {
    images: ["/ku.webp", "/ku.png"],
    name: "Khulna University – Bachelor of Science in Computer Science and Engineering",
    duration: "December 2014 – February 2019",
    description:
      "Authorship Identification of Source Code Segments Written by Multiple Authors Using Stacking Ensemble Method",
    cgpa: "3.61/4.00",
  },
];
</script>

<style scoped lang="scss">
$sm: 576px;

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
    display: flex;
    align-items: center;

    @media screen and (max-width: $sm - 1) {
      display: none;
    }
    img {
      position: absolute;
      max-height: 150px;
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
    @media screen and (min-width: $sm) {
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
