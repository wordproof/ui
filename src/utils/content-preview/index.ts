import { diffWords } from 'diff';
import { WPRevision } from '../certificate-data';

export type ContentPreviewType = 'clean' | 'diff' | 'raw' | 'render';

const cleanUp = (htmlStr: string): string => {
  const PARAGRAPH_DIVIDER = '!!WORDPROOF_RETURN!!';
  return htmlStr
    .replace(/<!-- \/wp:paragraph -->/gi, PARAGRAPH_DIVIDER)
    .replace(/(<([^>]+)>)/gi, '')
    .replace(new RegExp(PARAGRAPH_DIVIDER, 'gi'), '<br /><br />');
};

export type StyleContentFunction = (str: string) => string;

const defaultStyleAsAdded: StyleContentFunction = str =>
  `<span class="bg-green-200 text-green-600">${str}</span>`;

const defaultStyleAsRemoved: StyleContentFunction = str =>
  `<span class="bg-red-200 text-red-600">${str}</span>`;

const addDiffStyling = (oldStr: string, newStr: string): string => {
  return diffWords(oldStr, newStr)
    .map(change => {
      if (change.removed) {
        return defaultStyleAsRemoved(change.value);
      }

      if (change.added) {
        return defaultStyleAsAdded(change.value);
      }

      return change.value;
    })
    .join('');
};

export function renderContent(
  revisions: WPRevision[],
  view: Exclude<ContentPreviewType, 'diff'>,
  viewInd: number,
): string;
export function renderContent(
  revisions: WPRevision[],
  view: Extract<ContentPreviewType, 'diff'>,
  viewInd: number,
  diffInd?: number,
): string;
export function renderContent(
  revisions: WPRevision[],
  view: ContentPreviewType,
  viewInd: number,
  diffInd?: number,
): string {
  if (view === 'clean') {
    return cleanUp(revisions[viewInd].content);
  }

  if (view === 'diff') {
    return addDiffStyling(
      cleanUp(revisions[viewInd].content),
      cleanUp(revisions[diffInd].content),
    );
  }

  if (view === 'raw') {
    return JSON.stringify(revisions[viewInd].hashLinkContent);
  }

  if (view === 'render') {
    return revisions[viewInd].content;
  }
}
