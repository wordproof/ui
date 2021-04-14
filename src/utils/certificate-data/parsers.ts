import { WPContent, WPRevision } from '.';
import { mapNewData } from './mappers';

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

export const parseNewSchema = async (
  parsedScriptElems: unknown[],
): Promise<WPContent | null> =>
  new Promise(async resolve => {
    const newSchemaEl = parsedScriptElems.find(
      elem => elem['timestamp'] !== undefined,
    );

    if (newSchemaEl) {
      const newSchemaData = newSchemaEl['timestamp'];
      const { revisions: rawRevisions } = newSchemaData;

      const hashLinkContent = await fetchHashData(newSchemaData.hashLink).catch(
        () => {
          resolve(null);
        },
      );
      const data = mapNewData({
        ...newSchemaData,
        hashLinkContent,
      });
      resolve({
        ...data,
        ...(Array.isArray(rawRevisions) ? { rawRevisions } : {}),
      });
    }

    resolve(null);
  });

export const parseGraphSchema = async (
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
