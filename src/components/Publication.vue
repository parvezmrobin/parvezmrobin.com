<template>
  <div v-once class="row project">
    <div class="col">
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
            <code v-for="(kw, i) in keywords" :key="kw" class="me-3"
              >{{ kw }}{{ i < keywords.length - 1 ? "," : "" }}</code
            >
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

export type IPublication = {
  title: string;
  description: string;
  keywords: string[];
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
$sm: 576px;
$md: 768px;
$lg: 992px;

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

    @media screen and (min-width: calc($lg + 1px)) {
      padding: 1.5rem;
    }
  }

  code {
    color: var(--bs-body-bg);
    display: inline-flex;
  }

  a {
    color: var(--bs-pink);
  }
}
</style>
