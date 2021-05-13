import { Config } from '@stencil/core';
import { postcss } from '@stencil/postcss';
import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';

const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['./src/**/*.tsx', './src/**/*.css', './src/index.html'],
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [],
});

export const config: Config = {
  namespace: 'uikit',
  buildEs5: 'prod',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      copy: [
        {
          src: '**/*.i18n.*.json',
          dest: 'i18n',
        },
        {
          src: 'global/fonts',
          dest: 'fonts',
        },
      ],
    },
    {
      type: 'dist-custom-elements-bundle',
      copy: [
        {
          src: '**/*.i18n.*.json',
          dest: 'i18n',
        },
        {
          src: 'global/fonts',
          dest: 'fonts',
        },
      ],
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
      copy: [
        {
          src: '**/*.i18n.*.json',
          dest: 'i18n',
        },
        {
          src: 'global/fonts',
          dest: 'fonts',
        },
      ],
    },
  ],
  globalStyle: 'src/global/styles.css',
  plugins: [
    postcss({
      plugins: [
        tailwindcss('./tailwind.config.js'),
        autoprefixer(),
        purgecss,
        require('cssnano'),
      ],
    }),
  ],
  devServer: {
    reloadStrategy: 'pageReload',
    openBrowser: false,
  },
};
