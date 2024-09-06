<template>
  <div v-once class="row publication purple hover">
    <div class="col">
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
  },
  emits: ["show:abstract"],
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
    color: var(--bs-pink);
  }

  .description {
    background-color: var(--bs-indigo-700);
    padding: 1rem;
    border-radius: 2px;
    box-shadow: 0 1rem 3rem rgba(0, 0, 0, 50%);

    @media screen and (min-width: map-get($grid-breakpoints, lg)) {
      padding: 1.5rem;
    }
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
