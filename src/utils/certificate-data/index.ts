import { mapOldData } from "./mappers";
import { parseGraphSchema, parseNewSchema } from "./parsers";

export interface WPRevision {
  transactionId: string;
  hash: string;
  content: string;
  date: string;
  hasChanged: boolean;
  hashLinkContent: Record<string, unknown>;
}

export interface WPContent extends WPRevision {
  revisions?: WPRevision[];
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
    }

    const graphSchemaData = await parseGraphSchema(parsedScriptElems);
    if (graphSchemaData) {
      resolve(graphSchemaData);
    }

    resolve(null);
  });
