import { Blockchain } from '../../config/blockchain.config';
import { mapNewData, mapOldData } from './mappers';
import { fetchHashData, parseGraphSchema, parseNewSchema } from './parsers';

import { getDebugLogFunction, LogSources } from '../../utils/debug';

const debugLog = getDebugLogFunction(LogSources.parsePage);

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
    debugLog('start');
    const oldSchemaEl = document.querySelector('script.wordproof-schema');
    debugLog('trying to apply old schema');
    if (oldSchemaEl && oldSchemaEl.innerHTML) {
      try {
        debugLog('trying to parse old schema');
        const data = JSON.parse(oldSchemaEl.innerHTML);
        resolve(mapOldData(data));
      } catch (e) {
        debugLog(`old schema failed: ${e}`);
      }
    }

    debugLog('trying to find script tags with "application/ld+json" type');
    const ldJsonScriptElems = document.querySelectorAll(
      'script[type="application/ld+json"]',
    );

    const parsedScriptElems = Array.from(ldJsonScriptElems).map(elem => {
      try {
        const data = JSON.parse(elem.innerHTML);
        return data;
      } catch (e) {
        debugLog(`JSON parsing of script tag failed: ${e}`);
        return {};
      }
    });

    debugLog('trying to apply new schema');

    const newSchemaData = await parseNewSchema(parsedScriptElems);
    if (newSchemaData) {
      resolve(newSchemaData);
      debugLog(`parsed new schema: ${JSON.stringify(newSchemaData)}`);
      return;
    }
    debugLog('trying to apply graph schema');

    const graphSchemaData = await parseGraphSchema(parsedScriptElems);
    if (graphSchemaData) {
      resolve(graphSchemaData);
      debugLog(`parsed graph schema: ${JSON.stringify(graphSchemaData)}`);
      return;
    }

    debugLog('failed to apply any schema');
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
