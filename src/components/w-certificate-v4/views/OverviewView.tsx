import { FunctionalComponent, h } from '@stencil/core';
import { CertificateV4Strings } from '../../../i18n';
import CheckBullet from '../components/check-bullet';
import { format } from 'date-fns';
import BaseButton from '../components/base-button';

// import { router } from '../../w-router-outlet';

interface OverviewViewProps {
  strings: CertificateV4Strings;
  lastEdited: Date;
  publishedBy: string;
  locale: string;
  hasChanged: boolean;
}

const OverviewView: FunctionalComponent<OverviewViewProps> = ({
  strings,
  lastEdited,
  // publishedBy,
  // locale,
  hasChanged,
}) => (
  <div class="px-56 py-10 flex flex-col items-center">
    <div class="bg-gradient-to-l from-blue to-purple text-white mx-auto w-20 h-20 rounded-full flex items-center justify-center">
      <w-icon name="shield"></w-icon>
    </div>
    <h2 class="font-sohne-bold text-center mt-2">
      <div class="text-black" style={{ fontSize: '3.75rem' }}>
        {strings.thisContent}
      </div>
      <div class="text-blue -mt-4" style={{ fontSize: '1.75rem' }}>
        {strings.hasNotChanged}
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
          {format(lastEdited, `MMMM d, yyyy 'at' hh:mm`)}
        </div>
      </div>
      {/* <div class="border-t border-light-blue pt-5 flex items-center">
        <CheckBullet checked={true} />
        <div class="text-gray-600 ml-4">{strings.publishedBy}</div>
        <div class="text-black ml-2">Jelle van der Scoot</div>
      </div> */}
    </div>

    <div class="flex justify-center mt-8">
      <BaseButton text={strings.compareVersions} />
      <span class="mr-4"></span>
      <BaseButton outlined text={strings.explainThis} />
    </div>

    <w-logo
      fit
      text
      whiteOnBlue
      textLarge
      class="mt-10 h-6 mx-auto inline-block"
    ></w-logo>
    {/* <div class="mx-auto text-blue opacity-40">{strings.contentCertificate}</div> */}
  </div>
);

export default OverviewView;
