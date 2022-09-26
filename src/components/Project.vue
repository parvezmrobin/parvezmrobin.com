<template>
  <div v-once ref="rootEl" class="row project">
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
        <a v-if="props.github" :href="props.github" target="_blank">
          <i
            class="devicon-github-plain me-2"
            data-bs-toggle="popover"
            data-bs-content="Visit GitHub Repository"
          />
        </a>
        <a v-if="props.web" :href="props.web" target="_blank">
          <i
            class="devicon-firefox-plain"
            data-bs-toggle="popover"
            data-bs-content="Visit Live Website"
          />
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
import { Popover } from "bootstrap";
import { onMounted, ref } from "vue";
import { formatString } from "../util";

const props = defineProps<{
  title: string;
  description: string;
  tech: string[];
  github?: string;
  web?: string;
  img: string;
}>();

const rootEl = ref<HTMLDivElement | null>(null);
onMounted(() => {
  if (rootEl.value === null) {
    return;
  }
  const popoverEls = rootEl.value.querySelectorAll(
    '[data-bs-toggle="popover"]'
  );
  Array.from(popoverEls).forEach(
    (popoverEl) => new Popover(popoverEl, { trigger: "hover focus" })
  );
});
</script>
<style lang="scss">
.popover {
  --bs-popover-bg: var(--bs-cyan);
}

.project {
  align-items: center;
  margin-bottom: 2rem;

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

  code {
    color: var(--bs-body-bg);
  }

  .icons {
    a {
      text-decoration: none;
      color: var(--bs-body-bg);
    }

    i {
      font-size: 32px;
    }

    img {
      width: 32px;
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
        border-radius: 5px;
      }
    }
  }
}
</style>
