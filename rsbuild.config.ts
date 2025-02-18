import { defineConfig } from '@rsbuild/core';
import { pluginVue } from '@rsbuild/plugin-vue';
import { pluginSass } from '@rsbuild/plugin-sass';
import { shared, exposes } from './build/index';
import CompressionPlugin from 'compression-webpack-plugin';

const isProduction = process.env.NODE_ENV === 'production';
export default defineConfig({
  plugins: [pluginVue(), pluginSass()],
  tools: {
    rspack: {
      output: {
        publicPath: process.env.APP_REMOTE,
        uniqueName: 'remote',
      },
      plugins: [new CompressionPlugin()],
    },
  },

  dev: {
    lazyCompilation: true,
  },
  performance: {
    buildCache: !isProduction,
    chunkSplit: {
      strategy: 'split-by-experience',
    },
    removeConsole: true,
  },
  server: {
    port: 3000,
    cors: true,
  },
  moduleFederation: {
    options: {
      name: 'remote',
      filename: 'remoteEntry.js',
      exposes,
      shared,
    },
  },
});
