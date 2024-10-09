<template>
  <div
    v-once
    class="row publication mb-4"
    style="background-color: var(--bs-purple-800)"
  >
    <div class="col px-md-4">
      <h4 class="fw-normal">
        {{ title }}
      </h4>
      <div class="row">
        <div class="col-12">
          <div class="description mt-2">
            <div v-html="formatString(description)" />
          </div>
        </div>
        <div class="col-12">
          <div class="row align-items-center justify-content-between">
            <div class="mt-2 keywords">
              <code v-for="(kw, i) in keywords" :key="kw" class="me-3">
                {{ kw }}{{ i < keywords.length - 1 ? "," : "" }}
              </code>
            </div>
            <div class="col-auto">
              <div class="btn-group" role="group">
                <a
                  v-if="googleScholar"
                  class="btn btn-outline-primary"
                  :href="googleScholar"
                  target="_blank"
                  data-bs-toggle="popover"
                  data-bs-content="Google Scholar"
                  aria-label="Google Scholar"
                  style="
                    white-space: nowrap;
                    text-transform: capitalize;
                    --bs-btn-border-radius: 3px;
                  "
                >
                  <img
                    src="https://scholar.google.com/favicon.ico"
                    alt="Google Scholar"
                    style="height: 1.5rem; width: auto"
                  />
                </a>
                <template v-for="attr in ['prePrint', 'demo', 'prototype']">
                  <a
                    v-if="$attrs[attr]"
                    :key="attr"
                    class="btn btn-primary"
                    :href="$attrs[attr] + ''"
                    target="_blank"
                    style="
                      white-space: nowrap;
                      text-transform: capitalize;
                      --bs-btn-border-radius: 3px;
                    "
                  >
                    {{ kebabCase(attr) }}
                  </a>
                </template>
                <button
                  type="button"
                  class="btn btn-info"
                  style="--bs-btn-border-radius: 3px"
                  @click="$emit('show:abstract', $event)"
                >
                  Abstract
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Popover } from "bootstrap";
import { defineComponent, PropType } from "vue";
import { formatString } from "../util";
import kebabCase from "lodash.kebabcase";

export type IPublication = {
  title: string;
  description: string;
  keywords: string[];
  prePrint?: string;
  demo?: string;
  prototype?: string;
  abstract: string;
  googleScholar?: string;
};

export default defineComponent({
  name: "Publication",
  props: {
    title: {
      required: true,
      type: String,
    },
    description: {
      required: true,
      type: String,
    },
    keywords: {
      required: true,
      type: Array as PropType<string[]>,
    },
    googleScholar: {
      default: undefined,
      type: String,
    },
  },
  emits: ["show:abstract"],
  mounted() {
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
    kebabCase,
  },
});
</script>

<style lang="scss">
@import "~bootstrap/scss/functions";
@import "~bootstrap/scss/variables";

.publication {
  align-items: center;
  padding: 1em 0;
  border-radius: 4px;

  &:first-child {
    margin-top: -1em;
  }

  h4 {
    font-weight: normal;
    color: var(--bs-cyan);
  }

  code {
    color: var(--bs-body-bg);
    display: inline-flex;
  }

  .keywords {
    @media screen and (min-width: map-get($grid-breakpoints, md)) {
      flex: 1 1 0;
    }
  }
}
</style>
