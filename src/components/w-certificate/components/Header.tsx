import { FunctionalComponent, h } from '@stencil/core';
import { CertificateStrings } from '../../../i18n';

interface HeaderProps {
  strings: CertificateStrings;
}

const Header: FunctionalComponent<HeaderProps> = ({ strings }) => (
  <div class="flex p-3 items-center border-b-2 border-gray-400">
    <w-logo fit double-colored text text-large class="h-8"></w-logo>
    <p class="hidden md:block ml-auto mr-8 text-blue font-sohne">
      {strings.contentIsWordProof}
    </p>
  </div>
);

export default Header;
