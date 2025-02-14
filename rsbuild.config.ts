import { defineConfig } from '@rsbuild/core';
import { pluginVue } from '@rsbuild/plugin-vue';
import pkg from './package.json';
export default defineConfig({
  plugins: [pluginVue()],
  tools: {
    rspack: {
      output: {
        publicPath: process.env.APP_REMOTE,
        uniqueName: 'remote',
      },
      plugins: [],
    },
  },
  server: {
    port: 3000,
    cors: true,
  },
  moduleFederation: {
    options: {
      name: 'remote',
      filename: 'remoteEntry.js',
      exposes: {
        './button': './src/components/EButton.vue',
      },
      shared: {
        ...pkg.dependencies,
      },
    },
  },
});
