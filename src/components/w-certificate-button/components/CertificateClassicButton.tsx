import { FunctionalComponent, h } from '@stencil/core';
import ShieldLogo from '../shared/ShieldLogo';
import cx from 'classnames';
import { ButtonDefaultClasses } from '../shared/SharedCssClasses';

interface CertificateClassicButtonProps {
  color: string;
  text: string;
  onClick: Function;
}

const CertificateClassicButton: FunctionalComponent<CertificateClassicButtonProps> = ({
  color,
  text,
  onClick,
}) => {
  return (
    <button
      class={cx(ButtonDefaultClasses())}
      type="button"
      onClick={ev => onClick(ev)}
      style={{
        color,
        '--tw-ring-opacity': '0.5',
        '--tw-ring-color': color,
      }}
    >
      <ShieldLogo color={color} />
      <span class="ml-3 mt-1px whitespace-nowrap">{text}</span>
    </button>
  );
};

export default CertificateClassicButton;
