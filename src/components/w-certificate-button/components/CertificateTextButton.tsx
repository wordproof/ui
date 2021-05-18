import { FunctionalComponent, h } from '@stencil/core';
import RoundLogo from '../shared/RoundLogo';
import cx from 'classnames';
import { ButtonDefaultClasses } from '../shared/SharedCssClasses';

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
    class={cx(ButtonDefaultClasses(), 'p-1 rounded', {
      ['focus:ring-blue']: color === 'blue',
      ['focus:ring-black']: color === 'gray',
    })}
    type="button"
    onClick={ev => onClick(ev)}
    style={{ '--tw-ring-opacity': '0.5' }}
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
