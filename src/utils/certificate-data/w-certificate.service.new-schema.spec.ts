import { newSpecPage } from '@stencil/core/testing';
import { parsePage } from '.';
import fetchMock from 'fetch-mock-jest';
import { WPRevision } from '.';

const hashLinkContent = {
  '@context': 'https://schema.org',
  '@type': 'HashInput',
  'dateCreated': '2017-12-18T20:05:32.486772+00:00',
  'isBasedOn':
    'https://www.nrc.nl/nieuws/2017/12/18/evaluatie-rechtspraak-niet-beter-na-hervorming-a1585427',
  'text':
    '<h1>Rechtspraak niet beter na hervorming</h1>\n\n<p>De vermindering van het aantal rechtbanken, parketten van het Openbaar Ministerie en gerechtshoven in 2013 heeft de rechtspraak niet aanwijsbaar verbeterd. Dat concluderen vier hoogleraren en een burgemeester (van Gouda) na twee jaar onderzoek naar deze zogenoemde ‘herziening van de gerechtelijke kaart’. Zij leverden hun evaluatie maandag in bij minister Dekker (Rechtsbescherming, VVD).</p>\n<p>In totaal verdwenen vier jaar geleden acht rechtbanken en negen regiokantoren van het Openbaar Ministerie (OM). De vijf verschillende gerechtshoven werden tot één landelijk parket samengevoegd. </p>\n<p>De spreiding van de rechtspraak is daardoor verminderd. De kwaliteit moest beter worden, doordat grotere rechtbanken meer specialistische kennis hebben. De hoogleraren hebben dat effect niet kunnen meten. Ze stellen wel vast dat het ministerie signalen heeft „gemist of onvoldoende gedeeld” dat de rechtspraak sinds de hervorming minder toegankelijk is.</p>\n<p>President Fred van der Winkel van het gerechtshof Arnhem/Leeuwarden zei maandag in <em>De Gelderlander</em> dat er te veel ingewikkelde zaken zijn voor Arnhem/Leeuwarden. Amsterdamse collega’s gaan in 2018 in Utrecht zaken namens zijn gerechtshof afdoen.</p>\n<p>Personeel van rechtsprekende instanties en het OM beoordelen de hervorming met een 5,3. De evaluatiecommissie noemt  het „spijtig” dat de herziening is beleefd als bezuiniging. Nieuwe hervorming is volgens de hoogleraren niet nodig – wel bijsturing en „meer tijd”. De minister reageert komend voorjaar.</p>',
};

const scriptTagContent = {
  '@context': 'http://schema.org',
  '@type': 'NewsArticle',
  'headline': 'Rechtspraak niet beter na hervorming',
  'description':
    'De vermindering van het aantal rechtbanken, parketten van het Openbaar Ministerie en gerechtshoven in 2013 heeft de rechtspraak niet aanwijsbaar verbeterd. Dat concluderen vier hoogleraren en een burgemeester (van Gouda) na twee jaar onderzoek naar deze zogenoemde \u2018herziening van de gerechtelijke kaart\u2019. Zij leverden hun evaluatie maandag in bij minister Dekker (Rechtsbescherming, VVD). In totaal\u2026',
  'dateCreated': '2017-12-18T19:48:52+02:00',
  'datePublished': '2017-12-18T19:48:52+02:00',
  'dateModified': '2017-12-18T19:48:52+02:00',
  'url':
    'https://www.nrc.nl/nieuws/2017/12/18/evaluatie-rechtspraak-niet-beter-na-hervorming-a1585427',
  'mainEntityOfPage':
    'https://www.nrc.nl/nieuws/2017/12/18/evaluatie-rechtspraak-niet-beter-na-hervorming-a1585427',
  'author': [{ '@type': 'Person', 'name': 'Victor Pak' }],
  'publisher': {
    '@type': 'Organization',
    'name': 'NRC',
    'logo': {
      '@type': 'ImageObject',
      'url': 'https://www.nrc.nl/static/front/img/nrc-organization-logo.png',
      'width': 183,
      'height': 60,
    },
  },
  'articleSection': null,
  'keywords': [
    'leeuwarden',
    'politie, recht en criminaliteit',
    'type:nieuwsbericht',
    'personeel',
    'vvd',
    'herziening',
    'economie',
    'utrecht',
    'de gelderlander',
    'winkels',
    'rechtbanken',
  ],
  'isAccessibleForFree': false,
  'isPartOf': {
    '@type': ['CreativeWork', 'Product'],
    'name': 'NRC',
    'productID': 'nrc.nl:basic',
  },
  'hasPart': [
    {
      '@type': 'WebPageElement',
      'isAccessibleForFree': false,
      'cssSelector': '.article__content',
    },
  ],
  'creator': ['Victor Pak'],
  'timestamp': {
    '@type': 'BlockchainTransaction',
    'identifier':
      'f2a26d7d02a4a078cf0b4dd9f1cf42ac45ab89d445e66dd72e4a781496e55020',
    'hash': 'd5d9a958ee822617c3f8ab43fac8afefc4bcb9420878819f22df985e973355ec',
    'hashLink': 'https://www.nrc.nl/api/wordproof/hashinput?id=1689373',
    'recordedIn': {
      '@type': 'Blockchain',
      'name': 'eosio_main',
    },
  },
};

const expectedData: WPRevision = {
  transactionId: scriptTagContent.timestamp.identifier,
  hash: scriptTagContent.timestamp.hash,
  content: hashLinkContent.text,
  date: hashLinkContent.dateCreated,
  hasChanged: false,
  hashLinkContent,
};

describe('w-certificate.service', () => {
  it('parses a page with a ld+json script tag with the new schema', async () => {
    await newSpecPage({
      components: [],
      html: /*html*/ `<script type="application/ld+json" data-json-ld-for-pagemetadata>
        ${JSON.stringify(scriptTagContent)}
      </script>`,
    });

    fetchMock.get(
      scriptTagContent.timestamp.hashLink,
      JSON.stringify(hashLinkContent),
    );

    const parsedData = await parsePage();

    expect(parsedData).toEqual(expectedData);
  });
});
