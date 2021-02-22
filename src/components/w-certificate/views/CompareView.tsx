import { FunctionalComponent, h } from '@stencil/core';
import { CertificateStrings } from '../../../i18n';
import { router } from '../../w-router-outlet';
import Button from '../components/Button';
import { WPContent } from '../service';

interface CompareViewProps {
  strings: CertificateStrings;
  content: WPContent;
  locale: string;
}

const CompareView: FunctionalComponent<CompareViewProps> = ({
  strings,
  content,
  locale,
}) => {
  const formatOptionLabel = (dateStr: string, ind: number): string => {
    let prefix = '';
    if (ind === 0) {
      prefix = `${strings.recent} `;
    }
    if (ind === content.revisions.length - 1) {
      prefix = `${strings.firstTimestamp} `;
    }

    const date = new Date(dateStr).toLocaleDateString(locale, {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: 'numeric',
      minute: 'numeric',
    });

    return `${prefix}${date}`;
  };

  const PARAGRAPH_DIVIDER = '!!WORDPROOF_RETURN!!';

  const cleanUp = (htmlStr: string) => {
    return htmlStr
      .replace(/<!-- \/wp:paragraph -->/gi, PARAGRAPH_DIVIDER)
      .replace(/(<([^>]+)>)/gi, '')
      .replace(new RegExp(PARAGRAPH_DIVIDER, 'gi'), '<br /><br />');
  };

  const state = {
    selectedLeft: 0,
    selectedRight: 1,
  };

  return (
    <div>
      <w-certificate-header>
        <div slot="left">
          <Button onClick={router.back} text={strings.previous} />
        </div>
        <p slot="right">{strings.browsePreviousVersions}</p>
      </w-certificate-header>

      <div>
        <div class="flex flex-col sm:flex-row sm:space-x-4 mx-4 mt-3 mb-4">
          <w-input-select value={state.selectedLeft} class="w-full">
            {content.revisions.map((revision, ind) => (
              <w-input-select-option
                value={ind}
                label={formatOptionLabel(revision.date, ind)}
              ></w-input-select-option>
            ))}
          </w-input-select>
          <w-input-select
            value={state.selectedRight}
            class="w-full my-2 sm:my-0"
          >
            {content.revisions.map((revision, ind) => (
              <w-input-select-option
                value={ind}
                label={formatOptionLabel(revision.date, ind)}
              ></w-input-select-option>
            ))}
          </w-input-select>
        </div>

        <div class="flex flex-col sm:flex-row sm:space-x-4 mx-4 mt-3 mb-4">
          <div
            class="w-full max-w-full py-5 px-4 rounded-lg border border-gray-300 overflow-y-scroll text-gray-800"
            style={{ maxHeight: '280px' }}
          >
            <div
              class="w-full break-all"
              innerHTML={cleanUp(
                content.revisions[state.selectedRight].content,
              )}
            ></div>
          </div>
          <div
            class="w-full max-w-full py-5 px-4 rounded-lg border border-gray-300 overflow-y-scroll text-gray-800"
            style={{ maxHeight: '280px' }}
          >
            <div
              class="w-full break-all"
              innerHTML={cleanUp(
                content.revisions[state.selectedRight].content,
              )}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompareView;
