// const newDataMapper = (src: any): WPRevision => {};

import { WPContent } from '.';
import { mapNewData } from './mappers';
// import { mapNewData, mapOldData } from './mappers';

export const fetchHashData = async (
  url: string,
): Promise<Record<string, unknown>> =>
  new Promise((resolve): void => {
    fetch(url).then(
      result => {
        if (result.ok) resolve(result.json());
        else resolve({});
      },
      () => resolve({}),
    );
  });

const parseNewSchema = async (
  parsedScriptElems: unknown[],
): Promise<WPContent | null> =>
  new Promise(async resolve => {
    const newSchemaEl = parsedScriptElems.find(
      elem => elem['timestamp'] !== undefined,
    );

    if (newSchemaEl) {
      const newSchemaData = newSchemaEl['timestamp'];

      const hashLinkContent = await fetchHashData(newSchemaData.hashLink).catch(
        () => {
          resolve(null);
        },
      );

      resolve(mapNewData({ ...newSchemaData, hashLinkContent }));
    }

    resolve(null);
  });

const parseGraphSchema = async (
  parsedScriptElems: unknown[],
): Promise<WPContent | null> =>
  new Promise(async resolve => {
    let timestamp: Record<string, string>;

    parsedScriptElems.find(elem => {
      if (elem['@graph'] !== undefined && Array.isArray(elem['@graph'])) {
        return elem['@graph'].some(graphItem => {
          timestamp = graphItem['timestamp'];
          return timestamp !== undefined;
        });
      }

      return false;
    });

    if (timestamp && timestamp.hashLink) {
      const hashLinkContent = await fetchHashData(timestamp.hashLink).catch(
        () => {
          resolve(null);
        },
      );

      resolve(mapNewData({ ...timestamp, hashLinkContent }));
    }

    resolve(null);
  });

export const parsePage = async (): Promise<WPContent | null> =>
  new Promise(async resolve => {
    // const oldSchemaEl = document.querySelector('script.wordproof-schema');
    // if (oldSchemaEl && oldSchemaEl.innerHTML) {
    //   try {
    //     const data = JSON.parse(oldSchemaEl.innerHTML);
    //     resolve(mapOldData(data));
    //   } catch (e) {}
    // }

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

    const newSchemaData = await parseNewSchema(parsedScriptElems);
    if (newSchemaData) {
      resolve(newSchemaData);
    }

    const graphSchemaData = await parseGraphSchema(parsedScriptElems);
    if (graphSchemaData) {
      resolve(graphSchemaData);
    }

    resolve(null);
  });
