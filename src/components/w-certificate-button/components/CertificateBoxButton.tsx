import { FunctionalComponent, h } from '@stencil/core';
import cx from 'classnames';
import { ButtonDefaultClasses } from '../shared/SharedCssClasses';
import RectLogo from '../shared/RectLogo';
import { CertificateButtonStrings } from '../../../i18n';
import ShieldLogo from '../shared/ShieldLogo';
import TextLogo from '../shared/TextLogo';

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
      ['px-8 py-11 rounded-sm shape-left shape-base']: variant === 'base',
      ['pl-10 pr-9 pt-6 pb-5 rounded-full shape-right shape-rounded']:
        variant === 'rounded',
      ['px-12 py-11 rounded-sm relative shape-left shape-sm']: variant === 'sm',
      ['px-12 py-6 rounded-sm']: variant === 'xs',
      ['px-12 pt-6 pb-4 rounded-sm flex-col shape-left shape-tall']:
        variant === 'tall',
    })}
    type="button"
    onClick={ev => onClick(ev)}
    style={{ '--tw-ring-opacity': '0.5' }}
  >
    {variant === 'tall' ? <ShieldLogo /> : null}

    <div
      class={cx('flex flex-col', {
        ['mt-4 items-center']: variant === 'tall',
        ['items-left']: variant !== 'tall',
      })}
    >
      {variant === 'tall' || variant === 'fluid' ? <TextLogo /> : <RectLogo />}

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
        ['hidden']: variant === 'sm' || variant === 'xs' || variant === 'tall',
      })}
    >
      {text}
    </p>
    <w-icon
      name="arrow-right"
      class={cx('text-blue', {
        ['absolute bottom-4 right-4']: variant === 'sm',
        ['hidden']: variant === 'xs',
        ['mt-4']: variant === 'tall',
      })}
    ></w-icon>
  </button>
);

export default CertificateBoxButton;
