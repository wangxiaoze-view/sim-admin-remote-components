<script setup lang="ts">
import { ElRadio, type RadioProps } from 'element-plus';
import svgIcon from '../svgIcon/index.vue';
import { SvgIconType } from '../svgIcon/type';
const props = defineProps<
  Partial<Omit<RadioProps, 'isIcon' | 'isHideInput' | 'iconType'>> & {
    isIcon?: boolean;
    isHideInput?: boolean;
    iconType?: SvgIconType;
  }
>();
</script>

<template>
  <el-radio
    class="radio radio-content"
    :class="{ 'is-hide-input': isHideInput }"
    v-bind="{ ...props }"
  >
    <slot name="default"></slot>
    <svgIcon class="icon" :type="iconType || 'checkmark'" v-if="isIcon" />
  </el-radio>
</template>

<style scoped lang="scss">
.radio {
  margin-right: 14px;
  position: relative;
  min-width: 100px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  overflow: hidden;
  :deep() {
    .icon {
      position: absolute;
      right: -1px;
      bottom: -1px;
      opacity: 0;
    }
  }

  &.is-checked {
    :deep() {
      .icon {
        opacity: 1;
      }
    }
  }

  &.is-hide-input {
    :deep() {
      .el-radio__input {
        display: none;
      }
    }
  }
}
</style>
