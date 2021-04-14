import { FunctionalComponent, h } from '@stencil/core';
import { CertificateV4Strings } from '../../../i18n';
import { router } from '../../w-router-outlet';
// import cx from 'classnames';

interface CertificateHeaderProps {
  strings: CertificateV4Strings;
}

const CertificateHeader: FunctionalComponent<CertificateHeaderProps> = ({
  strings,
}) => (
  <div class="flex justify-between w-full pr-12">
    <button
      class="transform rotate-180 w-8 h-8 rounded-full focus:outline-none focus:ring inline-flex items-center justify-center"
      onClick={router.back}
    >
      <w-icon name="arrow-right" class="text-black w-4"></w-icon>
    </button>

    <h2
      class="capitalize text-black font-sohne-bold"
      style={{ fontSize: '1.75rem' }}
    >
      {strings.compareVersions}
    </h2>

    <w-dropdown-menu
      options={[
        { label: strings.explainThis, action: () => {} },
        { label: strings.timestampChecker, href: '#' },
        { label: strings.viewOnTheBlockchain, href: '#' },
      ]}
    ></w-dropdown-menu>
  </div>
);

export default CertificateHeader;