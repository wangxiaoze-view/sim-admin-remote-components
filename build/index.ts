import { ModuleFederationConfig } from '@rsbuild/core';
type Shared = ModuleFederationConfig['options']['shared'];
type Exposes = ModuleFederationConfig['options']['exposes'];
export const exposes: Exposes = {
  "./button": "./src/components/button/index.vue",
  "./radioForCheck": "./src/components/radioForCheck/index.vue",
  "./svgIcon": "./src/components/svgIcon/index.vue"
};
export const shared: Shared = {
  "element-plus": {
    "singleton": true,
    "eager": true,
    "requiredVersion": "^2.9.4"
  },
  "vue": {
    "singleton": true,
    "eager": true,
    "requiredVersion": "^3.5.13"
  }
};