<template>
  <el-button type="primary" @click="onTest" :loading="loading">测试</el-button>
</template>

<script setup lang="ts">
import { ElButton } from 'element-plus';
import { useLoading } from 'functional-helpers/hooks';
const { loading, setLoading } = useLoading();
const onTest = () => {
  setLoading(true);
  setTimeout(() => {
    setLoading(false);
  }, 1000);
};
</script>

<style scoped></style>
