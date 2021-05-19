import { FunctionalComponent, h } from '@stencil/core';
import RoundLogo from '../shared/RoundLogo';
import cx from 'classnames';
import { ButtonDefaultClasses } from '../shared/SharedCssClasses';

interface CertificateTextButtonProps {
  color: string;
  text: string;
  onClick: Function;
}

const CertificateTextButton: FunctionalComponent<CertificateTextButtonProps> = ({
  color,
  text,
  onClick,
}) => {
  return (
    <button
      class={cx(ButtonDefaultClasses(), 'p-1 rounded', {
        ['focus:ring-blue']: !color,
      })}
      type="button"
      onClick={ev => onClick(ev)}
      style={{ '--tw-ring-opacity': '0.5', ...(color ? { color } : {}) }}
    >
      <RoundLogo color={color} />
      <span
        class={cx('ml-3 pb-3px whitespace-nowrap border-b', {
          ['text-blue border-blue']: !color,
        })}
        style={
          color
            ? {
                'border-bottom-width': '1px',
                'border-color': color,
                'border-style': 'solid',
              }
            : {}
        }
      >
        {text}
      </span>
    </button>
  );
};

export default CertificateTextButton;
