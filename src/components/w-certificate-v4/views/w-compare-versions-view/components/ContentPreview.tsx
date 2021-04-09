import { FunctionalComponent, h } from '@stencil/core';
import { WPRevision } from '../../../../../utils/certificate-data';
import {
  // ContentPreviewType,
  renderContent,
} from '../../../../../utils/content-preview';

interface ContentPreviewProps {
  revisions: WPRevision[];
  // view: ContentPreviewType;
  viewInd: number;
  // diffInd?: number;
  classes?: string;
}

const ContentPreview: FunctionalComponent<ContentPreviewProps> = ({
  revisions,
  // view,
  viewInd,
  // diffInd,
  classes = '',
}) => {
  return (
    <div class="w-full relative">
      <div class="absolute w-full h-10 bg-white right-5"></div>
      <div class="absolute bottom-0 w-full h-6 bg-white right-5"></div>
      <textarea
        readonly
        class={`block w-full h-80 max-w-full pt-10 pb-8 px-4 overflow-y-scroll text-black focus:outline-none ${classes}`}
        style={{ resize: 'none' }}
      >
        {renderContent(revisions, 'clean', viewInd)}
      </textarea>
    </div>
  );
};

export default ContentPreview;
