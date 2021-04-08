import { FunctionalComponent, h } from '@stencil/core';
import { WPRevision } from '../../../../../utils/certificate-data';
import {
  ContentPreviewType,
  renderContent,
} from '../../../../../utils/content-preview';

interface ContentPreviewProps {
  revisions: WPRevision[];
  view: ContentPreviewType;
  viewInd: number;
  diffInd?: number;
  classes?: string;
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
