import { FunctionalComponent, h } from '@stencil/core';
import { CertificateV4Strings } from '../../../i18n';
import { WPRevision } from '../../../utils/certificate-data';
import {
  ContentPreviewType,
  renderContent,
  StyleContentFunction,
} from '../../../utils/content-preview';
import cx from 'classnames';

interface ContentPreviewProps {
  revisions: WPRevision[];
  view: ContentPreviewType;
  viewInd: number;
  diffInd?: number;
  classes?: string;
  strings: CertificateV4Strings;
}

const styleAsAdded: StyleContentFunction = str =>
  `<span class="bg-light-blue text-black">${str}</span>`;

const styleAsRemoved: StyleContentFunction = str =>
  `<span class="text-pink line-through">${str}</span>`;

const ContentPreview: FunctionalComponent<ContentPreviewProps> = ({
  revisions,
  view,
  viewInd,
  diffInd,
  classes = '',
}) => {
  const CleanOrRawView = () => (
    <textarea
      readonly
      class={cx(
        `absolute rounded font-sohne resize-none block w-full h-full max-w-full pt-10 pb-8 px-4 overflow-y-scroll text-black focus:outline-none ${classes}`,
        {
          'bg-white text-black': view !== 'raw',
          'bg-black text-white font-mono': view === 'raw',
        },
      )}
    >
      {view === 'clean' ? renderContent(revisions, 'clean', viewInd) : null}
      {view === 'raw' ? renderContent(revisions, 'raw', viewInd) : null}
    </textarea>
  );

  const RenderView = () => (
    <div
      class="block w-full h-full max-w-full pt-10 pb-8 px-4 overflow-y-scroll"
      innerHTML={renderContent(revisions, view as 'render', viewInd)}
    ></div>
  );

  const DiffView = () => (
    <div
      class="block w-full h-full max-w-full pt-10 pb-8 px-4 overflow-y-scroll font-sohne"
      innerHTML={renderContent(
        revisions,
        view as 'diff',
        viewInd,
        diffInd,
        styleAsAdded,
        styleAsRemoved,
      )}
    ></div>
  );

  return (
    <div
      class={cx('w-full rounded border relative h-10', {
        'border-light-blue bg-white': view !== 'raw',
        'bg-black': view === 'raw',
      })}
      style={{ flex: '1 1 200px' }}
    >
      <div
        class={cx('absolute h-8 rounded', {
          'bg-white': view !== 'raw',
          'bg-black': view === 'raw',
        })}
        style={{ width: 'calc(100% - 24px)' }}
      ></div>
      {view === 'raw' || view === 'clean' ? CleanOrRawView() : null}
      {view === 'render' ? RenderView() : null}
      {view === 'diff' && diffInd !== undefined ? DiffView() : null}
    </div>
  );
};

export default ContentPreview;
