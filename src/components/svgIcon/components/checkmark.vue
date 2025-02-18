<script setup lang="ts">
defineOptions({ name: 'CheckmarkIcon' });
import { SvgIconProps } from '../type';
const { color = '#ff8800' } = defineProps<SvgIconProps>();
</script>

<template>
  <svg
    v-if="type === 'checkmark'"
    class="icon check-icon"
    height="16"
    p-id="15644"
    t="1731636585664"
    version="1.1"
    viewBox="0 0 1024 1024"
    width="16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.68 1008.924444h990.208V18.773333L7.68 1008.924444z m876.088889-441.685333l-253.952 298.097778s-18.432 25.827556-44.202667 0l-110.421333-147.171556s-14.734222-18.432 3.697778-33.166222c7.395556-3.697778 18.375111-11.036444 33.109333 3.697778l99.384889 77.312 242.915555-224.540445s14.791111-14.791111 29.468445-3.697777c7.395556 3.697778 11.036444 14.734222 0 29.468444z"
      :fill="color"
      p-id="15645"
    />
  </svg>
</template>

<style scoped lang="scss"></style>
