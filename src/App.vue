<script setup lang="ts">
import Btn from './components/button/index.vue';
import SvgIcon from './components/svgIcon/index.vue';
import radioForCheck from './components/radioForCheck/index.vue';
</script>
<template>
  <div class="content">
    <Btn />
    <SvgIcon type="checkmark" />
    <radioForCheck title="标题" border style="width: 120px" />
  </div>
</template>

<style scoped></style>
