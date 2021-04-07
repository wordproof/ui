import { newSpecPage } from '@stencil/core/testing';
import { parsePage } from '.';
import { WPRevision } from '.';

export const scriptTagContent = {
  '@context': { '@type': 'ArticleTimestamp', '@version': '0.2.0' },
  'blockchain': 'eos',
  'transactionId':
    '4cbf491c3d0d28e3b0ad2848f0fa5769afb31fc609390ae5fe06893e4730c018',
  'hash': 'd169573a394fb7db7b2024cc82318a0d6dc82f35d7c1eda0afa688a6150988fc',
  'title':
    "3-minute WordProof Pitch at European Commission's 'Blockchains for Social Good' 🇪🇺",
  'content':
    '<!-- wp:paragraph -->\n<p><strong>WordProof is one of the 23 finalists selected out of the 178 applications received for the 5 x €1.000.000&nbsp;<a rel="noreferrer noopener" href="https://ec.europa.eu/programmes/horizon2020/what-horizon-2020" target="_blank">EIC&nbsp;Horizon Prize on ‘Blockchains for Social Good’</a>. Monday, February 10th, was Finalists’ Day. 23 initiatives gave a pitch and demo. Here\'s the full transcript of WordProof\'s pitch, presenting the impact of our solutions on social good aspects and the underlying economic model.</strong></p>\n<!-- /wp:paragraph -->\n\n<!-- wp:core-embed/youtube {"url":"https://www.youtube.com/watch?v=8vlDczYQtsg","type":"video","providerNameSlug":"youtube","className":"wp-embed-aspect-16-9 wp-has-aspect-ratio"} -->\n<figure class="wp-block-embed-youtube wp-block-embed is-type-video is-provider-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\nhttps://www.youtube.com/watch?v=8vlDczYQtsg\n</div></figure>\n<!-- /wp:core-embed/youtube -->\n\n<!-- wp:more -->\n<!--more-->\n<!-- /wp:more -->\n\n<!-- wp:heading -->\n<h2>Problem Outline / WordProof\'s Mission</h2>\n<!-- /wp:heading -->\n\n<!-- wp:image {"align":"right","id":955,"width":512,"height":288,"sizeSlug":"large"} -->\n<div class="wp-block-image"><figure class="alignright size-large is-resized"><img src="https://sebastiaans.blog/wp-content/uploads/2020/02/EU_Pitch_WordProof_Social_Good-1024x576.jpg" alt="" class="wp-image-955" width="512" height="288"/></figure></div>\n<!-- /wp:image -->\n\n<!-- wp:paragraph -->\n<p>The internet has a deep-rooted issue: trust.</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:list -->\n<ul><li>29% of Europeans are suspicious of the internet, and 86% <em>have</em> fallen for fake news.</li></ul>\n<!-- /wp:list -->\n\n<!-- wp:paragraph -->\n<p>This causes fewer online purchases, people using fake IDs and<strong><s> </s></strong>decreasing usage of the internet. The internet was built on fundamentally insecure rails.</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:paragraph -->\n<p>The mission of WordProof’s Timestamp Ecosystem is to bring a layer of trust over the internet:</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:list -->\n<ul><li>What I read is real, and I can verify who wrote it.</li><li>What I create is mine, and I have proof. </li><li>I am protected and leveraged in disputes. </li></ul>\n<!-- /wp:list -->\n\n<!-- wp:paragraph -->\n<p>This is true for content, social, e-commerce, and every other corner of the internet. Trust is what we build. WordProof timestamps content on the blockchain. </p>\n<!-- /wp:paragraph -->\n\n<!-- wp:heading -->\n<h2>WordProof Timestamp Ecosystem</h2>\n<!-- /wp:heading -->\n\n<!-- wp:image {"align":"right","id":956,"width":512,"height":288,"sizeSlug":"large"} -->\n<div class="wp-block-image"><figure class="alignright size-large is-resized"><img src="https://sebastiaans.blog/wp-content/uploads/2020/02/EU_Pitch_WordProof_Social_Good2-1024x576.jpg" alt="" class="wp-image-956" width="512" height="288"/><figcaption>WordProof\'s <a href="https://wordproof.io/timestamp-ecosystem/" target="_blank" rel="noreferrer noopener" aria-label="Timestamp Ecosystem (opens in a new tab)">Timestamp Ecosystem</a></figcaption></figure></div>\n<!-- /wp:image -->\n\n<!-- wp:paragraph -->\n<p>We’ve been able to integrate blockchain technology in a way that&nbsp;even non-tech savvy individuals can use WordProof. We serve the entire internet via an API, and already 35%<strong> <em>of the web</em></strong> with our user-friendly plug-and-play solutions.</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:paragraph -->\n<p>Often blockchain is not used for the right reasons, but for independently building trust for European consumers, it’s the only way.</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:paragraph -->\n<p><strong>But</strong> there is more:</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:list -->\n<ul><li>For internal governance, our Multi-Signature timestamps are essential.&nbsp;</li><li>For increased<em> accountability, transparency</em> ánd to fight fake news, Self-Sovereign Identities and Tier Levels are needed.&nbsp;</li></ul>\n<!-- /wp:list -->\n\n<!-- wp:paragraph -->\n<p>WordProof combines both and is the only timestamp oriented company in doing so.</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:heading -->\n<h2>Embedding the WordProof Timestamp Ecosystem</h2>\n<!-- /wp:heading -->\n\n<!-- wp:image {"align":"right","id":957,"width":512,"height":288,"sizeSlug":"large"} -->\n<div class="wp-block-image"><figure class="alignright size-large is-resized"><img src="https://sebastiaans.blog/wp-content/uploads/2020/02/EU_Pitch_WordProof_Social_Good3-1024x576.jpg" alt="" class="wp-image-957" width="512" height="288"/></figure></div>\n<!-- /wp:image -->\n\n<!-- wp:paragraph -->\n<p>We build a <strong>unique</strong>, global, inclusive timestamp ecosystem, by being open source, leading standardization via ISO, Schema.org and Dublin Core and by being blockchain agnostic, strongly focusing on public chains.</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:paragraph -->\n<p>An opinion in a leading Dutch legal magazine shows how WordProof also focuses on advocacy and science to embed the Ecosystem. </p>\n<!-- /wp:paragraph -->\n\n<!-- wp:heading -->\n<h2>Adoption and WordProof\'s Business Model</h2>\n<!-- /wp:heading -->\n\n<!-- wp:image {"align":"right","id":958,"width":512,"height":288,"sizeSlug":"large"} -->\n<div class="wp-block-image"><figure class="alignright size-large is-resized"><img src="https://sebastiaans.blog/wp-content/uploads/2020/02/EU_Pitch_WordProof_Social_Good4-1024x576.jpg" alt="" class="wp-image-958" width="512" height="288"/></figure></div>\n<!-- /wp:image -->\n\n<!-- wp:paragraph -->\n<p>In just half a year, massive community support emerged and over 171 thousand timestamps were placed.</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:paragraph -->\n<p>Further adoption will be both experts- as consumer-led:</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:list -->\n<ul><li>67% of those with knowledge of blockchain encourage wide adoption, and</li><li>85% of the Europeans support education on fake news</li></ul>\n<!-- /wp:list -->\n\n<!-- wp:paragraph -->\n<p>As a business model, WordProof will offer free and premium <em>Software-as-a-Service</em> plans for all major platforms and has a partnership program in place.</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:heading -->\n<h2>Social impact </h2>\n<!-- /wp:heading -->\n\n<!-- wp:image {"align":"right","id":959,"width":512,"height":288,"sizeSlug":"large"} -->\n<div class="wp-block-image"><figure class="alignright size-large is-resized"><img src="https://sebastiaans.blog/wp-content/uploads/2020/02/EU_Pitch_WordProof_Social_Good5-1024x576.jpg" alt="" class="wp-image-959" width="512" height="288"/></figure></div>\n<!-- /wp:image -->\n\n<!-- wp:paragraph -->\n<p><em>So</em>, to summarize:</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:paragraph -->\n<p>Transparency and accountability lead to a more trustworthy internet. Our Timestamp Ecosystem protects Europeans and tackles the issues they face today.&nbsp;</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:paragraph -->\n<p>Europe now has tools:</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:list -->\n<ul><li>to fight the resistance of tech giants,&nbsp;</li><li>decrease the impact of fake news,&nbsp;</li><li><em>bring</em> blockchain into the daily life of its inhabitants and&nbsp;</li><li>offer a level playing field in case of disputes.</li></ul>\n<!-- /wp:list -->\n\n<!-- wp:paragraph -->\n<p>With WordProof and<strong> </strong>its multi-signature and identity innovations, Europe will meet its goals while leading the way to a more trustworthy internet.&nbsp;</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:paragraph -->\n<p>Let’s fix the broken web together 🇪🇺!</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:heading -->\n<h2>WordProof Live Demo (2 min)</h2>\n<!-- /wp:heading -->\n\n<!-- wp:paragraph -->\n<p>After the 3-minute pitch, I demoed a few elements of our <a href="https://wordproof.io/timestamp-ecosystem/" target="_blank" rel="noreferrer noopener" aria-label="timestamp ecosystem (opens in a new tab)">timestamp ecosystem</a>. </p>\n<!-- /wp:paragraph -->\n\n<!-- wp:core-embed/youtube {"url":"https://www.youtube.com/watch?v=r-ZpQwsyIko\\u0026feature=youtu.be","type":"video","providerNameSlug":"youtube","className":"wp-embed-aspect-4-3 wp-has-aspect-ratio"} -->\n<figure class="wp-block-embed-youtube wp-block-embed is-type-video is-provider-youtube wp-embed-aspect-4-3 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\nhttps://www.youtube.com/watch?v=r-ZpQwsyIko&amp;feature=youtu.be\n</div></figure>\n<!-- /wp:core-embed/youtube -->\n\n<!-- wp:heading -->\n<h2>Q&amp;A after the Pitches in our category \'Quality Content\'</h2>\n<!-- /wp:heading -->\n\n<!-- wp:paragraph -->\n<p>After the presentation, Frank van Dalen and I answered five questions from the on- and offline audience: </p>\n<!-- /wp:paragraph -->\n\n<!-- wp:list -->\n<ul><li><a rel="noreferrer noopener" aria-label=" (opens in a new tab)" href="https://sebastiaans.blog/why-would-tech-giants-adopt-wordproof-timestamp-ecosystem/" target="_blank">Why would tech giants adopt WordProof?</a></li><li><a rel="noreferrer noopener" aria-label=" (opens in a new tab)" href="https://www.youtube.com/watch?v=lynuSc5hMhM&amp;feature=emb_title" target="_blank">How to Embed Blockchain Timestamps in Open Standards?</a></li><li><a rel="noreferrer noopener" aria-label=" (opens in a new tab)" href="https://www.youtube.com/watch?v=vN6ujGXP8J8&amp;feature=emb_title" target="_blank">An Example of WordProof\'s Impact on SME business owners</a></li><li><a rel="noreferrer noopener" aria-label=" (opens in a new tab)" href="https://www.youtube.com/watch?v=vGf4NfJ0zTI&amp;feature=emb_title" target="_blank">How Powerful are Blockchain Timestamps?</a></li><li><a rel="noreferrer noopener" aria-label=" (opens in a new tab)" href="https://sebastiaans.blog/wordproof-business-model-adoption/" target="_blank">What\'s WordProof\'s Business Model? What\'s the road to Mass Adoption?</a></li></ul>\n<!-- /wp:list -->',
  'date': '2020-02-16T02:20:19+02:00',
  'url':
    'https://sebastiaans.blog/wordproof-pitch-europe-blockchains-social-good/',
};

const expectedData: WPRevision = {
  transactionId: scriptTagContent.transactionId,
  hash: scriptTagContent.hash,
  content: scriptTagContent.content,
  date: scriptTagContent.date,
  hasChanged: false,
  hashLinkContent: {},
};

describe('w-certificate.service', () => {
  it('parses a page with a ld+json script tag with the graph schema', async () => {
    await newSpecPage({
      components: [],
      html: /*html*/ `<script type="application/ld+json" class="wordproof-schema">
        ${JSON.stringify(scriptTagContent)}
      </script>`,
    });

    const parsedData = await parsePage();

    expect(parsedData).toEqual(expectedData);
  });
});
