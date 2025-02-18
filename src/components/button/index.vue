<template>
  <el-button @click="onTest" v-bind="{ ...props, loading }">
    <template #default>
      <slot v-if="$slots.default"></slot>
    </template>
    <template #icon v-if="$slots.icon">
      <slot name="icon"></slot>
    </template>
    <template #loading v-if="$slots.loading">
      <slot name="loading"></slot>
    </template>
  </el-button>
</template>

<script setup lang="ts">
import { ButtonProps, ElButton } from 'element-plus';
import { useLoading } from 'functional-helpers/hooks';
const { loading, setLoading } = useLoading();
const props = defineProps<Partial<ButtonProps>>();
const onTest = () => {
  setLoading(true);
  setTimeout(() => {
    setLoading(false);
  }, 1000);
};
</script>

<style scoped></style>
