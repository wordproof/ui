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
    [
      'script',
      {
        src: `https://unpkg.com/@wordproof/uikit/dist/uikit/uikit.js`,
        nomodule: true,
      },
    ],
    [
      'script',
      {
        'type': 'application/ld+json',
        'data-json-ld-for-pagemetadata': true,
      },
      '{"@context": "http://schema.org", "@type": "NewsArticle", "headline": "Rechtspraak niet beter na hervorming", "description": "De vermindering van het aantal rechtbanken, parketten van het Openbaar Ministerie en gerechtshoven in 2013 heeft de rechtspraak niet aanwijsbaar verbeterd. Dat concluderen vier hoogleraren en een burgemeester (van Gouda) na twee jaar onderzoek naar deze zogenoemde \u2018herziening van de gerechtelijke kaart\u2019. Zij leverden hun evaluatie maandag in bij minister Dekker (Rechtsbescherming, VVD). In totaal\u2026", "dateCreated": "2017-12-18T19:48:52+02:00", "datePublished": "2017-12-18T19:48:52+02:00", "dateModified": "2017-12-18T19:48:52+02:00", "url": "https://www.nrc.nl/nieuws/2017/12/18/evaluatie-rechtspraak-niet-beter-na-hervorming-a1585427", "mainEntityOfPage": "https://www.nrc.nl/nieuws/2017/12/18/evaluatie-rechtspraak-niet-beter-na-hervorming-a1585427", "author": [{"@type": "Person", "name": "Victor Pak"}], "publisher": {"@type": "Organization", "name": "NRC", "logo": {"@type": "ImageObject", "url": "https://www.nrc.nl/static/front/img/nrc-organization-logo.png", "width": 183, "height": 60}}, "articleSection": null, "keywords": ["leeuwarden", "politie, recht en criminaliteit", "type:nieuwsbericht", "personeel", "vvd", "herziening", "economie", "utrecht", "de gelderlander", "winkels", "rechtbanken"], "isAccessibleForFree": false, "isPartOf": {"@type": ["CreativeWork", "Product"], "name": "NRC", "productID": "nrc.nl:basic"}, "hasPart": [{"@type": "WebPageElement", "isAccessibleForFree": false, "cssSelector": ".article__content"}], "creator": ["Victor Pak"], "timestamp": {"@type": "BlockchainTransaction", "identifier": "f2a26d7d02a4a078cf0b4dd9f1cf42ac45ab89d445e66dd72e4a781496e55020", "hash": "d5d9a958ee822617c3f8ab43fac8afefc4bcb9420878819f22df985e973355ec", "hashLink": "https://www.nrc.nl/api/wordproof/hashinput?id=1689373", "recordedIn": {"@type": "Blockchain", "name": "eosio_main"}}}',
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
      '/pages/w-text-input',
      '/pages/w-modal',
      '/pages/w-certificate',
      '/pages/w-certificate-v4',
    ],
  },
};
