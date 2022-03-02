import { Blockchain } from '../../config/blockchain.config';
import { mapNewData, mapOldData } from './mappers';
import { fetchHashData, parseGraphSchema, parseNewSchema } from './parsers';

import { getDebugLogFunction, LogSources } from '../debug';

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
    const oldSchemaEl = document.querySelector('script.wordproof-schema');
    debugLog('trying to apply old schema');

    if (oldSchemaEl && oldSchemaEl.innerHTML) {
      try {
        const data = JSON.parse(oldSchemaEl.innerHTML);
        debugLog('old schema parsed successfully');
        return resolve(mapOldData(data));
      } catch (e) {
        debugLog(`old schema JSON parsing failed: ${e}`);
      }
    }

    debugLog('no valid old schema data found');

    const ldJsonScriptElements = document.querySelectorAll(
      'script[type="application/ld+json"]',
    );
    debugLog(
      `found ${ldJsonScriptElements.length} script tags with "application/ld+json" type`,
    );

    const parsedScriptElements = Array.from(ldJsonScriptElements).map((elem, index) => {
      try {
        return JSON.parse(elem.innerHTML);
      } catch (e) {
        debugLog(`JSON parsing of script tag #${index} failed: ${e}`);
        return {};
      }
    });

    debugLog('trying to apply new schema');

    const newSchemaData = await parseNewSchema(parsedScriptElements);
    if (newSchemaData) {
      resolve(newSchemaData);
      debugLog(`successfully parsed new schema: ${JSON.stringify(newSchemaData)}`);
      return;
    }

    debugLog('trying to apply graph schema');

    const graphSchemaData = await parseGraphSchema(parsedScriptElements);
    if (graphSchemaData) {
      resolve(graphSchemaData);
      debugLog(`successfully parsed graph schema: ${JSON.stringify(graphSchemaData)}`);
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
