import { FunctionalComponent, h } from '@stencil/core';
import RoundLogo from '../shared/RoundLogo';
import cx from 'classnames';
import { ButtonDefaultClasses } from '../shared/SharedCssClasses';
import ShieldLogo from '../shared/ShieldLogo';

export type CertificateTextButtonIcon = 'wordproof' | 'shield' | 'none';

interface CertificateTextButtonProps {
  color: string;
  text: string;
  onClick: Function;
  icon: CertificateTextButtonIcon;
}

const CertificateTextButton: FunctionalComponent<CertificateTextButtonProps> = ({
  color,
  text,
  onClick,
  icon,
}) => {
  return (
    <button
      class={cx(ButtonDefaultClasses(), 'p-1 rounded', {
        ['focus:ring-blue']: !color || icon === 'wordproof',
      })}
      type="button"
      onClick={ev => onClick(ev)}
      style={{
        '--tw-ring-opacity': '0.5',
        ...(color && icon !== 'wordproof'
          ? { color, '--tw-ring-color': `${color}80` }
          : {}),
      }}
    >
      {icon === 'wordproof' || !icon ? <RoundLogo color="" /> : null}
      {icon === 'shield' ? <ShieldLogo color={color} small={true} /> : null}

      <span
        class={cx('pb-3px whitespace-nowrap border-b', {
          ['text-blue border-blue']: !color || icon === 'wordproof' || !icon,
          ['ml-3']: icon !== 'none',
        })}
        style={
          color && icon !== 'wordproof' && icon
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