import { mapNewData, mapOldData } from './mappers';
import { fetchHashData, parseGraphSchema, parseNewSchema } from './parsers';

export interface WPRevision {
  transactionId: string;
  hash: string;
  content: string;
  date: string;
  hasChanged: boolean;
  hashLinkContent: Record<string, unknown>;
}

export type RawRevision = Record<string | 'hashLink', string>;

export interface WPContent extends WPRevision {
  revisions?: WPRevision[];
  rawRevisions?: RawRevision[];
}

export const parsePage = async (): Promise<WPContent | null> =>
  new Promise(async resolve => {
    const oldSchemaEl = document.querySelector('script.wordproof-schema');
    if (oldSchemaEl && oldSchemaEl.innerHTML) {
      try {
        const data = JSON.parse(oldSchemaEl.innerHTML);
        resolve(mapOldData(data));
      } catch (e) {}
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

    const newSchemaData = await parseNewSchema(parsedScriptElems);
    if (newSchemaData) {
      resolve(newSchemaData);
      return;
    }

    const graphSchemaData = await parseGraphSchema(parsedScriptElems);
    if (graphSchemaData) {
      resolve(graphSchemaData);
      return;
    }

    resolve(null);
  });

  export const fetchRevisions = async (content: WPContent): Promise<WPRevision[]> => {
    const { rawRevisions } = content;
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
