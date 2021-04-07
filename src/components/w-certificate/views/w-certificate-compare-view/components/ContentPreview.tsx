import { FunctionalComponent, h } from '@stencil/core';
import { WPRevision } from '../../../../../utils/certificate-data';
import { diffWords } from 'diff';

export type ContentPreviewType = 'clean' | 'diff' | 'raw' | 'render';

interface ContentPreviewProps {
  revisions: WPRevision[];
  view: ContentPreviewType;
  viewInd: number;
  diffInd?: number;
  classes?: string;
}

const cleanUp = (htmlStr: string): string => {
  const PARAGRAPH_DIVIDER = '!!WORDPROOF_RETURN!!';
  return htmlStr
    .replace(/<!-- \/wp:paragraph -->/gi, PARAGRAPH_DIVIDER)
    .replace(/(<([^>]+)>)/gi, '')
    .replace(new RegExp(PARAGRAPH_DIVIDER, 'gi'), '<br /><br />');
};

const addDiffStyling = (oldStr: string, newStr: string): string => {
  return diffWords(oldStr, newStr)
    .map(change => {
      if (change.removed) {
        return `<span class="bg-red-200 text-red-600">${change.value}</span>`;
      }

      if (change.added) {
        return `<span class="bg-green-200 text-green-600">${change.value}</span>`;
      }

      return change.value;
    })
    .join('');
};

function renderContent(
  revisions: WPRevision[],
  view: Exclude<ContentPreviewType, 'diff'>,
  viewInd: number,
): string;
function renderContent(
  revisions: WPRevision[],
  view: Extract<ContentPreviewType, 'diff'>,
  viewInd: number,
  diffInd?: number,
): string;
function renderContent(
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

const ContentPreview: FunctionalComponent<ContentPreviewProps> = ({
  revisions,
  view,
  viewInd,
  diffInd,
  classes = '',
}) => {
  return view === 'raw' ? (
    <textarea
      readonly
      class={`w-full max-w-full py-5 px-4 rounded-lg border border-gray-300 overflow-y-scroll text-gray-800 focus:outline-none ${classes}`}
      style={{ maxHeight: '280px', resize: 'none' }}
    >
      {renderContent(revisions, view, viewInd)}
    </textarea>
  ) : (
    <div
      class={`w-full max-w-full py-5 px-4 rounded-lg border border-gray-300 overflow-y-scroll text-gray-800 ${classes}`}
      style={{ maxHeight: '280px' }}
    >
      {revisions && viewInd !== undefined ? (
        <div
          class="w-full break-all"
          innerHTML={
            view === 'diff'
              ? renderContent(revisions, view, viewInd, diffInd)
              : renderContent(revisions, view, viewInd)
          }
        ></div>
      ) : null}
    </div>
  );
};

export default ContentPreview;
