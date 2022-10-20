<template>
  <div :id="computedId" class="pt-5 row justify-content-center page">
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
import { computed } from "vue";
import Heading from "./Heading.vue";
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    default: "",
  },
  topMarginRatio: {
    type: Number,
    default: 0.075,
  },
});

const computedId = computed(() => {
  return props.id || props.title.toLowerCase();
});
</script>

<style lang="scss" scoped>
:deep(.central-box) {
  max-width: var(--bs-breakpoint-lg);
}
</style>
