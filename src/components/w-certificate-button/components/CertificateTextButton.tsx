import { FunctionalComponent, h } from '@stencil/core';
import RoundLogo from '../shared/RoundLogo';
import cx from 'classnames';

interface CertificateTextButtonProps {
  color: 'blue' | 'gray';
  text: string;
  onClick: Function;
}

const CertificateTextButton: FunctionalComponent<CertificateTextButtonProps> = ({
  color,
  text,
  onClick,
}) => (
  <button
    class="flex items-center flex-nowrap"
    type="button"
    onClick={ev => onClick(ev)}
  >
    <RoundLogo color={color} />
    <span
      class={cx('ml-3 pb-3px whitespace-nowrap border-b', {
        ['text-blue border-blue']: color === 'blue',
        ['text-black border-black border-opacity-30']: color === 'gray',
      })}
    >
      {text}
    </span>
  </button>
);

export default CertificateTextButton;
