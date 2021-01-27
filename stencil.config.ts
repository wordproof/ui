import { Config } from '@stencil/core';
import { postcss } from '@stencil/postcss';
import autoprefixer from 'autoprefixer';

const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['./src/**/*.tsx', './src/**/*.css', './src/index.html'],
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [],
});

export const config: Config = {
  namespace: 'uikit',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  globalStyle: 'src/global/styles.css',
  plugins: [
    postcss({
      plugins: [
        require('tailwindcss')('./tailwind.config.js'),
        autoprefixer(),
        ...(process.env.NODE_ENV === 'production'
          ? [purgecss, require('cssnano')]
          : []),
      ],
    }),
  ],
};
