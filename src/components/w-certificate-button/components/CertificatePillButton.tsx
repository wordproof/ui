import { FunctionalComponent, h } from '@stencil/core';
import RoundLogo from '../shared/RoundLogo';
import cx from 'classnames';
import { ButtonDefaultClasses } from '../shared/SharedCssClasses';

export type CertificatePillButtonVariants = 'blue' | 'white';

interface CertificatePillButtonProps {
  color: CertificatePillButtonVariants;
  text: string;
  onClick: Function;
}

const CertificatePillButton: FunctionalComponent<CertificatePillButtonProps> = ({
  color,
  text,
  onClick,
}) => (
  <button
    class={cx(
      ButtonDefaultClasses(),
      'p-1 rounded-full shadow py-3 pl-4 pr-9 focus:ring-blue',
      {
        ['text-white bg-gradient-to-r from-blue to-purple']: color === 'blue',
        ['text-blue bg-white']: color === 'white',
      },
    )}
    type="button"
    onClick={ev => onClick(ev)}
    style={{ '--tw-ring-opacity': '0.5' }}
  >
    <span class="flex-shrink-0">
      <RoundLogo color={'blue'} />
    </span>
    <span class="ml-3 mt-1px sm:whitespace-nowrap text-left">{text}</span>
  </button>
);

export default CertificatePillButton;
