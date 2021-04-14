import { newSpecPage } from '@stencil/core/testing';
import { parsePage } from '.';
import fetchMock from 'fetch-mock-jest';
import { WPRevision } from '.';
import { Blockchain } from '../../config/blockchain.config';

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
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      'timestamp': {
        '@type': 'BlockchainTransaction',
        'identifier':
          '829df958e5c5f9159d4fb52d71ddc9993cafb509884cb2ae590ec7ellec6428b',
        'hash':
          'd5d9a958ee822617c3f8ab43fac8afefc4bcb9420878819f22df985e973355ec',
        'hashLink':
          'http://wordproof-drupal.web.dev.swis.nl/wordproof/hashinput/15',
        'recordedIn': {
          '@type': 'Blockchain',
          'name': 'wp',
        },
      },
    },
  ],
};

const expectedData: WPRevision = {
  transactionId: scriptTagContent['@graph'][0].timestamp.identifier,
  hash: scriptTagContent['@graph'][0].timestamp.hash,
  content: hashLinkContent.text,
  date: hashLinkContent.dateCreated,
  hasChanged: false,
  hashLinkContent,
  blockchain: scriptTagContent['@graph'][0].timestamp.recordedIn.name as Blockchain,
};

describe('w-certificate.service', () => {
  it('parses a page with a ld+json script tag with the graph schema', async () => {
    await newSpecPage({
      components: [],
      html: /*html*/ `<script type="application/ld+json" data-json-ld-for-pagemetadata>
        ${JSON.stringify(scriptTagContent)}
      </script>`,
    });

    fetchMock.get(
      scriptTagContent['@graph'][0].timestamp.hashLink,
      JSON.stringify(hashLinkContent),
    );

    const parsedData = await parsePage();

    expect(parsedData).toEqual(expectedData);
  });
});
