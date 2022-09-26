<template>
  <div
    :id="props.title.toLowerCase()"
    class="pt-5 row justify-content-center page"
  >
    <div
      class="central-box flex-column"
      :style="{ '--central-box-margin-top-ratio': props.topMarginRatio }"
    >
      <Heading class="pb-4">{{ props.title }}</Heading>
      <slot />
    </div>
  </div>
</template>
<script lang="ts" setup>
import Heading from "./Heading.vue";
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  topMarginRatio: {
    type: Number,
    default: 0.075,
  },
});
</script>

<style lang="scss" scoped>
:deep(.central-box) {
  max-width: var(--bs-breakpoint-lg);
}
</style>
