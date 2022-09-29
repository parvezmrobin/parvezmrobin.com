<template>
  <div v-once class="row project">
    <div class="col col-sm-6">
      <h4 class="fw-normal">
        {{ title }}
      </h4>
      <div class="description mt-2">
        <div v-html="formatString(description)"></div>
      </div>

      <div class="mt-2">
        <code v-for="t in tech" :key="t" class="me-3">{{ t }}</code>
      </div>

      <div class="icons mt-2">
        <a v-if="github" :href="github" target="_blank">
          <i
            class="devicon-github-plain me-2"
            data-bs-toggle="popover"
            data-bs-content="Visit GitHub Repository"
          />
        </a>
        <a v-if="frontend" :href="frontend" target="_blank">
          <i
            class="devicon-webpack-plain me-2"
            data-bs-toggle="popover"
            data-bs-content="Visit Frontend Repository"
          />
        </a>
        <a v-if="backend" :href="backend" target="_blank">
          <i
            class="devicon-linux-plain me-2"
            data-bs-toggle="popover"
            data-bs-content="Visit Backend Repository"
          />
        </a>
        <a v-if="web" :href="web" target="_blank">
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
        <img :src="img" :alt="title" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Popover } from "bootstrap";
import { defineComponent, PropType } from "vue";
import { formatString } from "../util";

export type IProject = {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  web?: string;
  img: string;
} & ({ frontend?: string; backend?: string } | never);

export default defineComponent({
  name: "Project",
  props: {
    title: {
      required: true,
      type: String,
    },
    description: {
      required: true,
      type: String,
    },
    tech: {
      required: true,
      type: Array as PropType<string[]>,
    },
    github: {
      type: String,
      default: undefined,
    },
    web: {
      type: String,
      default: undefined,
    },
    frontend: {
      type: String,
      default: undefined,
    },
    backend: {
      type: String,
      default: undefined,
    },
    img: {
      required: true,
      type: String,
    },
  },
  mounted(): void {
    if (this.$el === null) {
      return;
    }
    const popoverEls: HTMLCollection = this.$el.querySelectorAll(
      '[data-bs-toggle="popover"]'
    );
    Array.from(popoverEls).forEach(
      (popoverEl) => new Popover(popoverEl, { trigger: "hover focus" })
    );
  },
  methods: {
    formatString,
  },
});
</script>
<style lang="scss">
.popover {
  --bs-popover-bg: var(--bs-purple-700);
}

$sm: 576px;

.project {
  align-items: center;
  margin-bottom: 2rem;

  h4 {
    font-weight: normal;
    color: var(--bs-pink);
  }
  .description {
    background-color: var(--bs-indigo-700);
    padding: 1rem;
    border-radius: 2px;
    box-shadow: 0 1rem 3rem rgba(0, 0, 0, 50%);

    @media screen and (min-width: calc($sm + 1px)) {
      padding: 1.5rem;
      position: relative;
      z-index: 1;
      top: 0;
      left: 0;
      transition: left 0.5s ease-in-out;

      &:hover {
        left: 15px;
      }
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
    @media screen and (max-width: $sm) {
      display: none;
    }

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
