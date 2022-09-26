<template>
  <div v-once class="row project">
    <div class="col-6">
      <h4 class="fw-normal">
        {{ props.title }}
      </h4>
      <div class="description mt-2">
        <div v-html="formatString(props.description)"></div>
      </div>

      <div class="mt-2">
        <code v-for="t in props.tech" :key="t" class="me-3">{{ t }}</code>
      </div>

      <div class="icons mt-2">
        <a :href="props.github" target="_blank">
          <i class="devicon-github-plain"></i>
        </a>
      </div>
    </div>
    <div class="col-6">
      <div>
        <img :src="props.img" :alt="props.title" />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { formatString } from "../util";

const props = defineProps<{
  title: string;
  description: string;
  tech: string[];
  github?: string;
  img: string;
}>();
</script>
<style lang="scss">
.project {
  align-items: center;
  h4 {
    font-weight: normal;
    color: var(--bs-pink);
  }
  .description {
    background-color: var(--bs-indigo-700);
    padding: 1.5rem;
    border-radius: 2px;
    box-shadow: 0 1rem 3rem rgba(0, 0, 0, 50%);

    position: relative;
    z-index: 1;
    top: 0;
    left: 0;
    transition: left 0.5s ease-in-out;

    &:hover {
      left: 15px;
    }
  }

  .icons {
    a {
      text-decoration: none;
      color: var(--bs-body-bg);
    }

    i {
      font-size: 32px;
    }
  }

  .col-6:last-child {
    //width: 63.33333333%;

    div {
      margin-left: -10%;
      position: relative;
      transition: margin-left 1s ease-in-out;

      &:hover {
        z-index: 2;
        margin-left: -33%;
      }
      img {
        width: 100%;
      }
    }
  }
}
</style>
