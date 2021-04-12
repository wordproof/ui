import { FunctionalComponent, h } from '@stencil/core';
import { CertificateV4Strings } from '../../../../../i18n';
import { WPRevision } from '../../../../../utils/certificate-data';
import {
  ContentPreviewType,
  renderContent,
} from '../../../../../utils/content-preview';
import LegendButton from './LegendButton';

interface ContentPreviewProps {
  revisions: WPRevision[];
  view: ContentPreviewType;
  viewInd: number;
  // diffInd?: number;
  classes?: string;
  strings: CertificateV4Strings;
}

const ContentPreview: FunctionalComponent<ContentPreviewProps> = ({
  revisions,
  view,
  viewInd,
  // diffInd,
  classes = '',
  strings,
}) => {
  return (
    <div class="w-full rounded border border-light-blue flex">
      <div class="w-40 px-4 pt-10 pb-6 flex">
        {view === 'diff' ? (
          <div class="flex flex-wrap content-evenly">
            <LegendButton color="blue" label={strings.changed} />
            <LegendButton color="pink" label={strings.removed} />
          </div>
        ) : null}
      </div>
      <div class="w-full relative">
        <div class="absolute w-full h-10 bg-white right-5"></div>
        <div class="absolute bottom-0 w-full h-6 bg-white right-5"></div>
        <textarea
          readonly
          class={`block w-full h-80 max-w-full pt-10 pb-8 px-4 overflow-y-scroll text-black focus:outline-none ${classes}`}
          style={{ resize: 'none' }}
        >
          {view === 'clean' ? renderContent(revisions, 'clean', viewInd) : null}
        </textarea>
      </div>
    </div>
  );
};

export default ContentPreview;
