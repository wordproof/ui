module.exports = {
  title: 'WordProof UI Kit',
  head: [
    [
      'script',
      {
        type: 'module',
        src: `https://unpkg.com/@wordproof/uikit/dist/uikit/uikit.esm.js`,
      },
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
      '/pages/w-text-input',
      '/pages/w-modal',
      '/pages/w-certificate',
    ],
  },
};
