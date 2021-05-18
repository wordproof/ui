import { FunctionalComponent, h } from '@stencil/core';
import cx from 'classnames';
import { ButtonDefaultClasses } from '../shared/SharedCssClasses';
import RectLogo from '../shared/RectLogo';
import { CertificateButtonStrings } from '../../../i18n';

export type CertificateBoxButtonVariants =
  | 'base'
  | 'sm'
  | 'xs'
  | 'tall'
  | 'rounded'
  | 'fluid';

interface CertificateBoxButtonProps {
  variant: CertificateBoxButtonVariants;
  text: string;
  strings: CertificateButtonStrings;
  onClick: Function;
}

const CertificateBoxButton: FunctionalComponent<CertificateBoxButtonProps> = ({
  variant,
  text,
  strings,
  onClick,
}) => (
  <button
    class={cx(
      ButtonDefaultClasses(),
      'py-11 px-8 rounded-sm shadow focus:ring-blue button-background-shape-left',
    )}
    type="button"
    onClick={ev => onClick(ev)}
    style={{ '--tw-ring-opacity': '0.5' }}
  >
    <div>
      <RectLogo />
      <div
        class="w-full text-blue opacity-40 mt-2px"
        style={{ fontSize: '15px' }}
      >
        {strings.contentCertificate}
      </div>
    </div>
    <p class="ml-8 w-48 text-blue text-left whitespace-normal">{text}</p>
    <w-icon name="arrow-right" class="text-blue"></w-icon>
  </button>
);

export default CertificateBoxButton;
