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
    class={cx(ButtonDefaultClasses(), 'shadow focus:ring-blue flex-col', {
      ['sm:flex-row px-8 pt-3 pb-1 sm:py-11 rounded-sm shape-left shape-base']:
        variant === 'base',
      ['sm:flex-row sm:pl-10 sm:pr-9 px-4 pt-3 pb-1 sm:pt-6 sm:pb-5 rounded-3xl sm:rounded-full shape-right shape-rounded']:
        variant === 'rounded',
      ['sm:flex-row px-12 py-2 sm:py-6 rounded-sm']: variant === 'sm',
      ['px-12 pt-6 pb-4 rounded-sm shape-left shape-tall']: variant === 'tall',
      ['sm:flex-row pl-7 pr-10 py-3 sm:py-5 rounded-sm w-full']:
        variant === 'fluid',
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
        ['ml-3 mt-2 sm:mt-1']: variant === 'fluid',
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
        ['sm:ml-8  text-center mt-2']: variant === 'base',
        ['sm:ml-10 text-center mt-2']: variant === 'rounded',
        ['hidden']: variant === 'sm' || variant === 'tall',
        ['sm:mx-10 flex-grow text-center mt-2']: variant === 'fluid',
      })}
    >
      {text}
    </p>

    <w-icon
      name="arrow-right"
      class={cx('text-blue', {
        ['hidden']: variant === 'sm',
        ['mt-4']: variant === 'tall',
        ['my-2 sm:my-0']:
          variant === 'rounded' || variant === 'base' || variant === 'fluid',
      })}
    ></w-icon>
  </button>
);

export default CertificateBoxButton;
