import { FunctionalComponent, h } from '@stencil/core';
import { CertificateV4Strings } from '../../../../../i18n';
import { WPRevision } from '../../../../../utils/certificate-data';
import {
  ContentPreviewType,
  renderContent,
} from '../../../../../utils/content-preview';
import LegendButton from './LegendButton';
import cx from 'classnames';

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
    <div
      class={cx('w-full rounded border flex', {
        'border-light-blue bg-white': view !== 'raw',
        'bg-black': view === 'raw',
      })}
    >
      <div class="w-40 px-4 pt-10 pb-6 flex">
        {view === 'diff' ? (
          <div class="flex flex-wrap content-evenly">
            <LegendButton color="blue" label={strings.changed} />
            <LegendButton color="pink" label={strings.removed} />
          </div>
        ) : null}
      </div>
      <div class="w-full relative">
        <div
          class={cx('absolute w-full h-10 right-5', {
            'bg-white': view !== 'raw',
            'bg-black': view === 'raw',
          })}
        ></div>
        <div
          class={cx('absolute bottom-0 w-full h-6 right-5', {
            'bg-white': view !== 'raw',
            'bg-black': view === 'raw',
          })}
        ></div>
        <textarea
          readonly
          class={cx(
            `resize-none block w-full h-80 max-w-full pt-10 pb-8 px-4 overflow-y-scroll text-black focus:outline-none ${classes}`,
            {
              'bg-white text-black': view !== 'raw',
              'bg-black text-white font-mono': view === 'raw',
            },
          )}
        >
          {view === 'clean' ? renderContent(revisions, 'clean', viewInd) : null}
          {view === 'raw' ? renderContent(revisions, 'raw', viewInd) : null}
        </textarea>
      </div>
    </div>
  );
};

export default ContentPreview;
