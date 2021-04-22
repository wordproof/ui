import { Blockchain } from '../../config/blockchain.config';
import { mapNewData, mapOldData } from './mappers';
import { fetchHashData, parseGraphSchema, parseNewSchema } from './parsers';

// import { enableDebug, getDebugLogFunction } from '../../utils/debug';

// enableDebug('certificate-data');
// const debugLog = getDebugLogFunction('certificate-data');

export interface WPRevision {
  transactionId: string;
  hash: string;
  content: string;
  date: string;
  hasChanged: boolean;
  hashLinkContent: Record<string, unknown>;
  blockchain: Blockchain;
}

export type RawRevision = Record<string | 'hashLink', string>;

export interface WPContent extends WPRevision {
  revisions?: WPRevision[];
  rawRevisions?: RawRevision[];
}

export const parsePage = async (): Promise<WPContent | null> =>
  new Promise(async resolve => {
    console.warn('start');
    const oldSchemaEl = document.querySelector('script.wordproof-schema');
    console.warn('trying to apply old schema');
    if (oldSchemaEl && oldSchemaEl.innerHTML) {
      try {
        console.warn('trying to parse old schema');
        const data = JSON.parse(oldSchemaEl.innerHTML);
        resolve(mapOldData(data));
      } catch (e) {
        console.warn(`old schema failed: ${e}`);
      }
    }

    console.warn('trying to find script tags with "application/ld+json" type');
    const ldJsonScriptElems = document.querySelectorAll(
      'script[type="application/ld+json"]',
    );

    const parsedScriptElems = Array.from(ldJsonScriptElems).map(elem => {
      try {
        const data = JSON.parse(elem.innerHTML);
        return data;
      } catch (e) {
        console.warn(`JSON parsing of script tag failed: ${e}`);
        return {};
      }
    });

    console.warn('trying to apply new schema');

    const newSchemaData = await parseNewSchema(parsedScriptElems);
    if (newSchemaData) {
      resolve(newSchemaData);
      console.warn(`parsed new schema: ${JSON.stringify(newSchemaData)}`);
      return;
    }
    console.warn('trying to apply graph schema');

    const graphSchemaData = await parseGraphSchema(parsedScriptElems);
    if (graphSchemaData) {
      resolve(graphSchemaData);
      console.warn(`parsed graph schema: ${JSON.stringify(graphSchemaData)}`);
      return;
    }

    console.warn('failed to apply any schema');
    resolve(null);
  });

export const fetchRevisions = async (
  content: WPContent,
): Promise<WPRevision[]> => {
  const { rawRevisions, revisions } = content;

  if (Array.isArray(revisions)) {
    return revisions;
  }

  if (Array.isArray(rawRevisions)) {
    return Promise.all(
      rawRevisions.map(async rawRevision => {
        const hashLinkContent = await fetchHashData(rawRevision.hashLink).catch(
          () => {
            return null;
          },
        );
        return mapNewData({ ...rawRevision, hashLinkContent });
      }),
    );
  }

  return null;
};
