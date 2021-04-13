import { WPContent } from '.';
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

const fetchRevisions = async revisions => {
  if (Array.isArray(revisions)) {
    return Promise.all(
      revisions.map(async revision => {
        const hashLinkContent = await fetchHashData(revision.hashLink).catch(
          () => {
            return null;
          },
        );
        return mapNewData({ ...revision, hashLinkContent });
      }),
    );
  }

  return null;
};

export const parseNewSchema = async (
  parsedScriptElems: unknown[],
): Promise<WPContent | null> =>
  new Promise(async resolve => {
    const newSchemaEl = parsedScriptElems.find(
      elem => elem['timestamp'] !== undefined,
    );

    if (newSchemaEl) {
      const newSchemaData = newSchemaEl['timestamp'];
      const { revisions } = newSchemaData;
      const fetchedRevisions = await fetchRevisions(revisions);

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
        ...(Array.isArray(fetchedRevisions)
          ? { revisions: fetchedRevisions.map(item => mapNewData(item)) }
          : {}),
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
