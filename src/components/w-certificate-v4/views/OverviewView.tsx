import { FunctionalComponent, h } from '@stencil/core';
import { CertificateV4Strings } from '../../../i18n';
import CheckBullet from '../components/check-bullet';
import BaseButton from '../components/base-button';
import cx from 'classnames';
import { DateTimeFormatOptions, formatDate } from '../../../utils/locale';
import TabLabel from '../components/tab-label';
import { router } from '../../w-router-outlet';
import { CertificateView } from '../types';

// import { router } from '../../w-router-outlet';

interface OverviewViewProps {
  strings: CertificateV4Strings;
  lastEdited: string;
  publishedBy: string;
  locale: string;
  hasChanged: boolean;
}

const DATE_FORMAT_OPTIONS = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
} as DateTimeFormatOptions;

const OverviewView: FunctionalComponent<OverviewViewProps> = ({
  strings,
  lastEdited,
  // publishedBy,
  locale,
  hasChanged,
}) => (
  <div class="px-56 py-10 flex flex-col items-center relative">
    <TabLabel onClick={() => {}} />
    <div
      class={cx(
        ' mx-auto w-20 h-20 rounded-full flex items-center justify-center',
        {
          'bg-gradient-to-r from-blue to-purple text-white': !hasChanged,
          'font-sohne-bold text-black': hasChanged,
        },
      )}
    >
      {hasChanged ? (
        <svg
          width="9"
          height="36"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.85 25.15L8.4.1H.8l1.55 25.05h4.5zM8.25 36v-7.25H1V36h7.25z"
            fill="#252525"
          />
        </svg>
      ) : (
        <w-icon name="shield"></w-icon>
      )}
    </div>
    <h2 class="font-sohne-bold text-center mt-2">
      <div class="text-black" style={{ fontSize: '3.75rem' }}>
        {strings.thisContent}
      </div>
      <div
        class={cx('-mt-4', {
          'text-blue': !hasChanged,
          'text-black': hasChanged,
        })}
        style={{ fontSize: '1.75rem' }}
      >
        {hasChanged ? strings.hasChanged : strings.hasNotChanged}
      </div>
    </h2>

    <p
      class="text-black text-base text-center mx-auto mt-2"
      style={{ width: '26rem' }}
    >
      {strings.thatIsImportantText}
    </p>

    <div class="shadow-md rounded mx-auto mt-8 p-6" style={{ width: '26rem' }}>
      <div class="flex items-center">
        <CheckBullet checked={!hasChanged} />
        <div class="text-gray-600 ml-4">{strings.lastEdited}</div>
        <div class="text-black ml-2">
          {formatDate(lastEdited, locale, DATE_FORMAT_OPTIONS)}
        </div>
      </div>
      {/* <div class="border-t border-light-blue pt-5 flex items-center">
        <CheckBullet checked={true} />
        <div class="text-gray-600 ml-4">{strings.publishedBy}</div>
        <div class="text-black ml-2">Jelle van der Scoot</div>
      </div> */}
    </div>

    <div class="flex justify-center mt-8">
      {hasChanged ? null : (
        <span class="mr-4">
          <BaseButton
            text={strings.compareVersions}
            onClick={() => router.go(CertificateView.compare)}
          />
        </span>
      )}
      <BaseButton outlined text={strings.explainThis} onClick={() => {}} />
    </div>
  </div>
);

export default OverviewView;
