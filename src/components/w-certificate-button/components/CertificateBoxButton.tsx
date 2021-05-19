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
  text,
  strings,
  onClick,
  variant,
}) => (
  <button
    class={cx(ButtonDefaultClasses(), 'shadow focus:ring-blue', {
      ['px-8 py-11 rounded-sm button-background-shape-left']:
        variant === 'base',
      ['pl-10 pr-9 pt-6 pb-5 rounded-full button-background-shape-left']:
        variant === 'rounded',
    })}
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
    <p
      class={cx('w-48 text-blue text-left whitespace-normal', {
        ['ml-8']: variant === 'base',
        ['ml-10']: variant === 'rounded',
      })}
    >
      {text}
    </p>
    <w-icon name="arrow-right" class="text-blue"></w-icon>
  </button>
);

export default CertificateBoxButton;
