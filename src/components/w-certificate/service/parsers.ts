// const newDataMapper = (src: any): WPRevision => {};

export const fetchHashData = async (
  url: string,
): Promise<Record<string, unknown>> =>
  new Promise((resolve): void => {
    // fetch(url).then(
    //   result => {
    //     if (result.ok) resolve(result.json());
    //     else reject();
    //   },
    //   () => reject(),
    // );
    console.warn({ url });

    resolve({
      '@context': 'https://schema.org',
      '@type': 'HashInput',
      'dateCreated': '2017-12-18T20:05:32.486772+00:00',
      'isBasedOn':
        'https://www.nrc.nl/nieuws/2017/12/18/evaluatie-rechtspraak-niet-beter-na-hervorming-a1585427',
      'text':
        '<h1>Rechtspraak niet beter na hervorming</h1>\n\n<p>De vermindering van het aantal rechtbanken, parketten van het Openbaar Ministerie en gerechtshoven in 2013 heeft de rechtspraak niet aanwijsbaar verbeterd. Dat concluderen vier hoogleraren en een burgemeester (van Gouda) na twee jaar onderzoek naar deze zogenoemde ‘herziening van de gerechtelijke kaart’. Zij leverden hun evaluatie maandag in bij minister Dekker (Rechtsbescherming, VVD).</p>\n<p>In totaal verdwenen vier jaar geleden acht rechtbanken en negen regiokantoren van het Openbaar Ministerie (OM). De vijf verschillende gerechtshoven werden tot één landelijk parket samengevoegd. </p>\n<p>De spreiding van de rechtspraak is daardoor verminderd. De kwaliteit moest beter worden, doordat grotere rechtbanken meer specialistische kennis hebben. De hoogleraren hebben dat effect niet kunnen meten. Ze stellen wel vast dat het ministerie signalen heeft „gemist of onvoldoende gedeeld” dat de rechtspraak sinds de hervorming minder toegankelijk is.</p>\n<p>President Fred van der Winkel van het gerechtshof Arnhem/Leeuwarden zei maandag in <em>De Gelderlander</em> dat er te veel ingewikkelde zaken zijn voor Arnhem/Leeuwarden. Amsterdamse collega’s gaan in 2018 in Utrecht zaken namens zijn gerechtshof afdoen.</p>\n<p>Personeel van rechtsprekende instanties en het OM beoordelen de hervorming met een 5,3. De evaluatiecommissie noemt  het „spijtig” dat de herziening is beleefd als bezuiniging. Nieuwe hervorming is volgens de hoogleraren niet nodig – wel bijsturing en „meer tijd”. De minister reageert komend voorjaar.</p>',
    });
  });

export const parsePage = async () => {
  const oldSchemaEl = document.querySelector('script.wordproof-schema');
  if (oldSchemaEl && oldSchemaEl.innerHTML) {
    const data = JSON.parse(oldSchemaEl && oldSchemaEl.innerHTML);
    console.warn({ old: data });
  }

  const ldJsonScriptElems = document.querySelectorAll(
    'script[type="application/ld+json"]',
  );

  const parsedScriptElems = Array.from(ldJsonScriptElems).map(elem => {
    try {
      const data = JSON.parse(elem.innerHTML);
      return data;
    } catch (e) {
      return {};
    }
  });

  const newSchemaEl = parsedScriptElems.find(
    elem => elem['timestamp'] !== undefined,
  );

  if (newSchemaEl) {
    const newSchemaData = newSchemaEl.timestamp;

    const data = await fetchHashData(newSchemaData.hashLink);

    console.warn({ new: { ...newSchemaData, ...data } });
  }
};
