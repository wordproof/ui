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
  diffInd
}) => {
  const SkeletonView = () => {
    const lineStyles = Array(20)
      .fill(0)
      .map(_ => ({ width: `${Math.round(Math.random() * 50) + 50}%` }));

    return (
      <div class="block w-full h-full max-w-full pt-10 pb-8 px-4 overflow-y-scroll font-sohne">
        {lineStyles.map(style => (
          <div
            class="animate-pulse bg-gray-600 h-4 mb-3 rounded"
            style={style}
          ></div>
        ))}
      </div>
    );
  };

  const CleanOrRawView = () => {

    if (revisions.length && view && viewInd >= 0 && view === 'clean') {
      return (
        <div
          class="block w-full h-full max-w-full pt-10 pb-8 px-4 overflow-y-scroll font-sohne"
          innerHTML={renderContent(
            revisions,
            view,
            viewInd,
          )}
        ></div>
      )
    }

    if (revisions.length && view && viewInd >= 0 && view === 'raw') {
      return (
        <textarea
          readOnly
          class={`absolute rounded font-sohne resize-none block w-full h-full max-w-full pt-10 pb-8 px-4 overflow-y-scroll text-black focus:outline-none bg-black text-white font-mono`}
        >
          {renderContent(revisions, 'raw', viewInd)}
      </textarea>
      )
    }

    SkeletonView()
  }

  const RenderView = () =>
    revisions.length && view && viewInd >= 0 ? (
      <div
        class="block w-full h-full max-w-full pt-10 pb-8 px-4 overflow-y-scroll"
        innerHTML={renderContent(revisions, view as 'render', viewInd)}
      ></div>
    ) : (
      SkeletonView()
    );

  const DiffView = () =>
    revisions.length && view && viewInd >= 0 && diffInd >= 0 ? (
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
    ) : (
      SkeletonView()
    );

  return (
    <div
      class={cx('w-full rounded border relative h-10 content-preview-flex', {
        'border-light-blue bg-white': view !== 'raw',
        'bg-black': view === 'raw',
      })}
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
