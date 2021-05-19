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
      ['px-12 py-6 rounded-sm']: variant === 'sm',
      ['px-12 pt-6 pb-4 rounded-sm flex-col shape-left shape-tall']:
        variant === 'tall',
      ['pl-7 pr-10 py-5 rounded-sm w-full']: variant === 'fluid',
    })}
    type="button"
    onClick={ev => onClick(ev)}
    style={{ '--tw-ring-opacity': '0.5' }}
  >
    {variant === 'tall' || variant === 'fluid' ? <ShieldLogo /> : null}

    <div
      class={cx('flex flex-col', {
        ['mt-4 items-center']: variant === 'tall',
        ['items-left']: variant !== 'tall',
        ['ml-3 mt-1']: variant === 'fluid',
      })}
    >
      {variant === 'tall' || variant === 'fluid' ? <TextLogo /> : <RectLogo />}

      <div
        class={cx('w-full text-blue opacity-40', {
          ['mt-2px']: variant !== 'fluid',
          ['mt-1']: variant === 'fluid',
        })}
        style={{ fontSize: '15px' }}
      >
        {strings.contentCertificate}
      </div>
    </div>

    <p
      class={cx('w-48 text-blue text-left whitespace-normal', {
        ['ml-8']: variant === 'base',
        ['ml-10']: variant === 'rounded',
        ['hidden']: variant === 'sm' || variant === 'tall',
        ['mx-10 flex-grow']: variant === 'fluid',
      })}
    >
      {text}
    </p>

    <w-icon
      name="arrow-right"
      class={cx('text-blue', {
        ['hidden']: variant === 'sm',
        ['mt-4']: variant === 'tall',
      })}
    ></w-icon>
  </button>
);

export default CertificateBoxButton;
