<template>
  <div id="education" class="pt-5 row justify-content-center vh-100">
    <div
      class="central-box flex-column"
      style="--central-box-margin-top-ratio: 0.075"
    >
      <Heading class="pb-4">Education</Heading>
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
    </div>
  </div>
</template>

<script lang="ts" setup>
import Heading from "./Heading.vue";

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
ul {
  a {
    color: var(--bs-cyan);
  }
}

.card {
  background-color: transparent;
  border: none;
  margin-right: -20px;

  .image-wrapper {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    img {
      max-height: 150px;
      background-color: white;
      padding: 5px;
      border-radius: 5px;
      z-index: 1;
    }
  }

  .card-subtitle {
    color: lightblue;
  }

  .card-body {
    position: relative;
    background-color: #0c3a4a;
    border-radius: 5px;
    left: -20px;
    padding-left: 30px;

    .card-title {
      color: var(--bs-pink);
    }
  }
}

.reverse.card {
  margin-left: -20px;

  .image-wrapper {
    justify-content: flex-start;
  }

  .card-body {
    left: 20px;
    padding-right: 30px;
  }
}
</style>
