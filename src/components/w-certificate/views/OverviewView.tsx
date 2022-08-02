import {FunctionalComponent, h} from '@stencil/core';
import {CertificateV4Strings} from '../../../i18n';
import CheckBullet from '../components/check-bullet';
import BaseButton from '../components/base-button';
import cx from 'classnames';
import {DateTimeFormatOptions, formatDate, timezone} from '../../../utils/locale';
import TabLabel from '../components/tab-label';
import {router} from '../../w-router-outlet';
import {CertificateView} from '../types';

interface OverviewViewProps {
  strings: CertificateV4Strings;
  lastEdited: string;
  publishedBy: string;
  locale: string;
  hasChanged: boolean;
  showRevisions: boolean;
  identityName: string;
  identityProvider: string;
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
                                                                showRevisions,
                                                                identityProvider, identityName
                                                              }) => (
  <div
    class="px-4 py-8 sm:px-56 sm:py-10 flex flex-col items-center relative"
    style={{lineHeight: '1.5'}}
  >
    <TabLabel onClick={() => router.go(CertificateView.importance)}/>

    <div
      class={cx(
        ' mx-auto w-20 h-20 rounded-full flex items-center justify-center',
        {
          'bg-gradient-to-r from-blue to-purple text-white': !hasChanged,
          'font-sohne-bold text-black bg-gray-200': hasChanged,
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
      <div class="text-black font-semibold text-3xl sm:text-4xl">
        {strings.thisContent}
      </div>
      <div
        class={cx(
          'sm:-mt-3 font-semibold px-5 py-1 h-10 leading-8 rounded-full inline-block text-1.5xl',
          {
            'text-blue bg-gray-200': !hasChanged,
            'text-black bg-white': hasChanged,
          },
        )}
      >
        {hasChanged ? strings.hasChanged : strings.hasNotChanged}
      </div>
    </h2>

    <p class="text-black text-base text-center mx-auto mt-2 font-sohne sm:w-104">
      {hasChanged ? strings.contentChangedAfterTimestamp : strings.thatIsImportantText}
    </p>

    <div class="shadow-md rounded mx-auto mt-8 p-6 font-sohne bg-white sm:w-104">
      <div class="flex flex-wrap items-center justify-center sm:justify-start">
        <CheckBullet checked={!hasChanged}/>
        <div class="text-gray-600 ml-4">{strings.lastEdited}</div>
        <div class="text-black ml-2 mt-2 sm:mt-0">
          {formatDate(lastEdited, locale, DATE_FORMAT_OPTIONS)}
        </div>

        {timezone() !== '' &&
          <div class="flex justify-center w-full">
          <span class="text-xs text-gray-600">
          ({timezone()})
          </span>
          </div>
        }
      </div>

      {identityProvider !== '' &&
        <div class="flex flex-wrap items-center justify-center sm:justify-start">
          <CheckBullet checked={true}/>
          <div class="text-gray-600 ml-4">{strings.identifiedAs}</div>
          <div class="text-black ml-2 mt-2 sm:mt-0">
            {identityName}
          </div>
]
            <div class="flex justify-center w-full">
          <span class="text-xs text-gray-600">
            {strings.with} {identityProvider}
          </span>
            </div>
        </div>
      }

    </div>

    <div class="flex flex-wrap justify-center mt-8">
      {hasChanged ? null : (
        <span class="mb-4 sm:mb-0 mr-2 sm:mr-4 sm:hidden">
          <BaseButton
            text={strings.showContent}
            onClick={() => router.go(CertificateView.content)}
          />
        </span>
      )}
      {hasChanged ? null : (
        <span class="mb-4 sm:mb-0 mr-2 sm:mr-4 hidden sm:inline-flex">
          <BaseButton
            text={showRevisions ? strings.compareVersions : strings.showContent}
            onClick={() => router.go(CertificateView.content)}
          />
        </span>
      )}
      <span>
        <BaseButton
          outlined
          text={strings.explainThis}
          onClick={() => router.go(CertificateView.importance)}
        />
      </span>
    </div>

    <w-logo
      fit
      text
      whiteOnBlue
      textLarge
      class="mt-10 h-6 mx-auto block"
    ></w-logo>
  </div>
);

export default OverviewView;
