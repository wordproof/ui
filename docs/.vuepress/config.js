const certificateData = require('./certificate-data.json');

module.exports = {
  title: 'WordProof UI Kit',
  head: [
    [
      'script',
      {
        type: 'module',
        src:
          process.env.NODE_ENV === 'production'
            ? `https://unpkg.com/@wordproof/uikit/dist/uikit/uikit.esm.js`
            : `http://localhost:3333/build/uikit.esm.js`,
      },
    ],
    [
      'script',
      {
        src:
          process.env.NODE_ENV === 'production'
            ? `https://unpkg.com/@wordproof/uikit/dist/uikit/uikit.js`
            : `http://localhost:3333/build/uikit.js`,
        nomodule: true,
      },
    ],
    [
      'script',
      {
        'type': 'application/ld+json',
        'data-json-ld-for-pagemetadata': true,
        'class': 'wordproof-schema',
      },
      JSON.stringify(certificateData),
    ],
    [
      'style',
      { type: 'text/css' },
      `@font-face {
        font-family: "Sohne-Buch";
        src: url("/Söhne-Buch.otf");
      }

      @font-face {
        font-family: "Sohne-Dreiviertelfett";
        src: url("/Söhne-Dreiviertelfett.otf");
      }

      @font-face {
        font-family: "Sohne-Halbfett";
        src: url("/Söhne-Halbfett.otf");
      }

      @font-face {
        font-family: "Sohne-Kraftig";
        src: url("/Sohne-Kraftig.otf");
      }`,
    ],
  ],
  markdown: {
    extendMarkdown: md => {
      md.use(require('markdown-it-include'));
    },
  },
  plugins: ['vuepress-plugin-mermaidjs'],
  themeConfig: {
    sidebar: [
      '/pages/installation',
      '/pages/w-button',
      '/pages/w-input-text',
      '/pages/w-input-select',
      '/pages/w-modal',
      '/pages/w-certificate',
      '/pages/w-serp-certificate',
      '/pages/w-certificate-button',
      '/pages/w-card',
    ],
  },
};
