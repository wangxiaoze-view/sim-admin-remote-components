<script setup lang="ts">
import { ElRadio, type RadioProps } from 'element-plus';
import svgIcon from '../svgIcon/index.vue';
const props = defineProps<
  Partial<RadioProps> & {
    isIcon?: boolean;
  }
>();
</script>

<template>
  <div class="radio-content">
    <el-radio class="radio" v-bind="{ ...props }">
      <slot name="default"></slot>
      <svgIcon class="icon" type="checkmark" v-if="isIcon" />
    </el-radio>
  </div>
</template>

<style scoped lang="scss">
.radio-content {
  margin-right: 14px;
  position: relative;

  .radio {
    min-width: 100px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
    overflow: hidden;
    :deep() {
      .check-icon {
        position: absolute;
        right: -1px;
        bottom: -1px;
        opacity: 0;
      }
    }

    &.is-checked {
      :deep() {
        .check-icon {
          opacity: 1;
        }
      }
    }

    :deep() {
      .el-radio__input {
        display: none;
      }
    }
  }
}
</style>
