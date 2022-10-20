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
          <img
            :src="school.img"
            class="img-fluid rounded-start"
            alt="school image"
          />
        </div>
        <div class="col-md-9">
          <div class="card-body shadow-lg">
            <h5 class="card-title">
              {{ school.name }}
            </h5>
            <h6 class="card-subtitle mb-2">{{ school.duration }}</h6>
            <p class="card-text">
              {{ school.description }}
            </p>
            <p class="card-text"><strong>CGPA:</strong> {{ school.cgpa }}</p>
          </div>
        </div>
        <div v-if="i % 2 === 1" class="col-md-3 image-wrapper">
          <img
            :src="school.img"
            class="img-fluid rounded-start"
            alt="school image"
          />
        </div>
      </div>
    </div>
  </CentralBox>
</template>

<script lang="ts" setup>
import CentralBox from "./CentralBox.vue";

interface ISchool {
  img: string;
  name: string;
  duration: string;
  description: string;
  cgpa: string;
}

const schools: ISchool[] = [
  {
    img: "/dalu.png",
    name: "Dalhousie University – Master’s in Computer Science",
    duration: "September 2021 – ongoing",
    description:
      "Courses include Advanced Topics in NLP and Machine Learning for Big Data.",
    cgpa: "4.3 out of 4.3",
  },
  {
    img: "/ku.png",
    name: "Khulna University – Bachelor of Science in Computer Science and Engineering",
    duration: "December 2014 – February 2019",
    description:
      "Courses include Artificial Intelligence, Data Warehousing and Mining, Computer Networking, and Information Security",
    cgpa: "3.61 out of 4",
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
    background-color: #0c3a4a;
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
