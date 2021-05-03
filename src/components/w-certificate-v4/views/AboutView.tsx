import { FunctionalComponent, h } from '@stencil/core';
import { CertificateV4Strings } from '../../../i18n';
import BaseButton from '../components/base-button';
import cx from 'classnames';
import TabLabel from '../components/tab-label';
import { router } from '../../w-router-outlet';

interface AboutViewProps {
  strings: CertificateV4Strings;
  hasChanged: boolean;
}

const OverviewView: FunctionalComponent<AboutViewProps> = ({
  strings,
  hasChanged,
}) => (
  <div
    class="px-56 py-10 flex flex-col items-center relative"
    style={{ lineHeight: '1.5' }}
  >
    <TabLabel onClick={() => {}} />
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
      <div class="text-black font-bold" style={{ fontSize: '3.75rem' }}>
        {strings.thisContent}
      </div>
      <div
        class={cx('-mt-4 font-bold', {
          'text-blue': !hasChanged,
          'text-black': hasChanged,
        })}
        style={{ fontSize: '1.75rem' }}
      >
        {hasChanged ? strings.hasChanged : strings.hasNotChanged}
      </div>
    </h2>

    <p
      class="text-black text-base text-center mx-auto mt-4 font-sohne"
      style={{ width: '26rem' }}
      innerHTML={strings.whatIsTimestamp}
    ></p>

    <p
      class="text-black text-base text-center mx-auto mt-4 font-sohne"
      style={{ width: '26rem' }}
      innerHTML={strings.withTimestampYouCan}
    ></p>

    <p
      class="text-black text-base text-center mx-auto mt-4 font-sohne"
      style={{ width: '26rem' }}
    >
      {strings.wantToKnowMore}
      <a
        href="https://wordproof.com/"
        target="_blank"
        rel="noopener noreferrer"
        class="border-b border-black ml-1"
      >
        wordproof.com
      </a>
    </p>

    <div class="flex justify-center mt-8">
      <BaseButton
        text={strings.goBack}
        onClick={() => {
          router.back();
        }}
      />
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
