<script setup lang="ts">
defineOptions({ name: 'SvgIcon' });
import { defineAsyncComponent } from 'vue';
import { type SvgIconProps } from './type';
const {
  color = '#ff8800',
  isExtendTheme = true,
  type,
} = defineProps<SvgIconProps>();
const getComponent = defineAsyncComponent(
  () => import(`./components/${type}.vue`),
);
</script>
<template>
  <getComponent
    :color="isExtendTheme ? 'var(--el-color-primary)' : color"
    :type="type"
  />
</template>

<style scoped lang="scss"></style>
