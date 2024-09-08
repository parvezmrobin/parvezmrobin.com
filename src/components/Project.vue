<template>
  <div v-once class="row project purple hover">
    <div class="col col-lg-6">
      <h4 class="fw-normal">
        {{ title }}
      </h4>
      <div class="row">
        <div class="col-12 col-md-8 col-lg-12">
          <div class="description mt-2">
            <div v-html="formatString(description)"></div>
          </div>
        </div>
        <div class="col-12 col-md-4 col-lg-12">
          <div class="mt-2">
            <code v-for="t in tech" :key="t" class="me-3">{{ t }}</code>
          </div>

          <div class="icons mt-2">
            <a
              v-if="github"
              :href="github"
              target="_blank"
              aria-label="Visit GitHub Repository"
            >
              <i
                class="devicon-github-plain me-2"
                data-bs-toggle="popover"
                data-bs-content="Visit GitHub Repository"
              />
            </a>
            <a
              v-if="frontend"
              :href="frontend"
              target="_blank"
              aria-label="Visit Frontend Repository"
            >
              <i
                class="devicon-github-plain me-2"
                data-bs-toggle="popover"
                data-bs-content="Visit Frontend Repository"
              />
            </a>
            <a
              v-if="backend"
              :href="backend"
              target="_blank"
              style="position: relative"
              aria-label="Visit Backend Repository"
            >
              <i
                class="devicon-github-plain me-2"
                data-bs-toggle="popover"
                data-bs-content="Visit Backend Repository"
              />
              <i
                class="devicon-scala-plain fs-4"
                style="
                  color: var(--bs-green);
                  position: absolute;
                  right: 2px;
                  bottom: -5px;
                  pointer-events: none;
                "
              />
            </a>
            <a
              v-if="web"
              :href="web"
              target="_blank"
              aria-label="Visit Live Website"
            >
              <i
                class="devicon-firefox-plain"
                data-bs-toggle="popover"
                data-bs-content="Visit Live Website"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="col-6">
      <div>
        <a :href="images[0]" target="_blank">
          <picture>
            <source
              v-for="img in images"
              :key="img"
              :type="`image/${img.split('.').at(-1)}`"
              :srcset="img"
            />
            <img :src="images.at(-1)" :alt="title" />
          </picture>
        </a>
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
  images: string[];
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
    images: {
      required: true,
      type: Array as PropType<string[]>,
    },
  },
  mounted(): void {
    if (this.$el === null) {
      return;
    }
    const popoverEls: HTMLCollection = this.$el.querySelectorAll(
      '[data-bs-toggle="popover"]',
    );
    Array.from(popoverEls).forEach(
      (popoverEl) => new Popover(popoverEl, { trigger: "hover focus" }),
    );
  },
  methods: {
    formatString,
  },
});
</script>

<style lang="scss">
@import "~bootstrap/scss/functions";
@import "~bootstrap/scss/variables";

.project {
  align-items: center;
  padding: 1em 0;
  border-radius: 4px;

  &:first-child {
    margin-top: -1em;
  }

  h4 {
    font-weight: normal;
    color: var(--bs-pink);
  }

  .description {
    background-color: var(--bs-purple-800);
    padding: 1rem;
    border-radius: 2px;
    box-shadow: 0 1rem 3rem rgba(0, 0, 0, 50%);

    @media screen and (min-width: map-get($grid-breakpoints, lg)) {
      padding: 1.5rem;
      position: relative;
      z-index: 1;
      top: 0;
      left: 0;
      transition: left 0.5s ease-in-out;
    }
  }

  code {
    color: var(--bs-body-bg);
    display: inline-flex;
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
    display: none;
    @media screen and (min-width: map-get($grid-breakpoints, lg)) {
      display: block;
    }

    div {
      margin-left: -10%;
      position: relative;
      transition: margin-left 1s ease-in-out;

      &:hover {
        z-index: 2;
        margin-left: -50%;
      }

      img {
        width: 100%;
        border-radius: 5px;
      }
    }
  }
}
</style>
