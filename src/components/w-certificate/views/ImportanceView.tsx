import { FunctionalComponent, h } from '@stencil/core';
import { CertificateStrings } from '../../../i18n';
import Banner from '../components/Banner';

interface ImportanceViewProps {
  strings: CertificateStrings;
}

const ImportanceView: FunctionalComponent<ImportanceViewProps> = ({
  strings,
}) => {
  return (
    <div class="flex flex-row">
      <div class="hidden md:block md:w-1/3 overflow-hidden">
        <Banner />
      </div>
      <div class="w-full md:w-2/3 p-2 md:py-4 md:px-6 text-left">
        <div class="md:py-4 md:px-6 text-left border-2 border-gray-300 rounded-lg">
          <h2 class="font-medium">{strings.importanceTitle}</h2>
          <p class="pb-3 text-gray-700">{strings.importanceParagraph1}</p>
          <p class="pb-3 text-gray-700">{strings.importanceParagraph2}</p>
          <p class="pb-3 text-gray-700">{strings.importanceParagraph3}</p>
          <p class="pb-3 text-gray-700">{strings.importanceParagraph4}</p>
        </div>
      </div>
    </div>
  );
};

export default ImportanceView;
