export type SvgIconType = 'checkmark' | 'doneAll' | 'locak' | 'naturalMode';
export type SvgIconProps = {
  // svg文件名
  type: SvgIconType;
  // 是否继承主题色
  isExtendTheme?: boolean;
  // 图标的颜色
  color?: string;
};
