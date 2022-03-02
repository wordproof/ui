import { WPContent } from '.';
import { mapNewData } from './mappers';
import { getDebugLogFunction, LogSources } from '../debug';

const debugLog = getDebugLogFunction(LogSources.parsePage);

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
  parsedScriptElements: unknown[],
): Promise<WPContent | null> =>
  new Promise(async resolve => {
    const newSchemaElement = parsedScriptElements.find(
      element => element['timestamp'] !== undefined,
    );

    if (newSchemaElement) {
      debugLog(`found new schema element`);

      const newSchemaData = newSchemaElement['timestamp'];
      const {
        revisions: rawRevisions,
        recordedIn: { name: blockchain },
      } = newSchemaData;

      const hashLinkContent = await fetchHashData(newSchemaData.hashLink).catch(
        () => {
          debugLog(`failed to fetch hash link content`);
          resolve(null);
        },
      );

      debugLog(`fetched hash link content successfully`);

      const data = mapNewData({
        ...newSchemaData,
        hashLinkContent,
        blockchain,
      });
      resolve({
        ...data,
        ...(Array.isArray(rawRevisions) ? { rawRevisions } : {}),
      });
    }

    debugLog(`found no new schema elements`);
    resolve(null);
  });

export const parseGraphSchema = async (
  parsedScriptElements: unknown[],
): Promise<WPContent | null> =>
  new Promise(async resolve => {
    let timestamp: Record<string, string | Record<string, string>>;

    parsedScriptElements.find(element => {
      if (element['@graph'] !== undefined && Array.isArray(element['@graph'])) {
        return element['@graph'].some(graphItem => {
          timestamp = graphItem['timestamp'];
          return timestamp !== undefined;
        });
      }

      return false;
    });

    if (timestamp && timestamp.hashLink) {
      debugLog(`found graph schema element`);

      const { hashLink, recordedIn } = timestamp;
      const blockchain = recordedIn['name'];

      const hashLinkContent = await fetchHashData(hashLink as string).catch(
        () => {
          debugLog(`failed to fetch hash link content`);
          resolve(null);
        },
      );

      resolve(mapNewData({ ...timestamp, hashLinkContent, blockchain }));
      debugLog(`fetched hash link content successfully`);
      return;
    }

    debugLog(`found no graph schema elements`);
    resolve(null);
  });
