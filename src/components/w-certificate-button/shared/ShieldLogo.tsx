import { FunctionalComponent, h } from '@stencil/core';
import cx from 'classnames';

interface ShieldLogoProps {
  color?: string;
  small?: boolean;
}

const ShieldLogo: FunctionalComponent<ShieldLogoProps> = ({ color, small }) => (
  <span
    class={cx('rounded-full  grid place-items-center', {
      ['bg-gradient-to-r from-blue to-purple']: !color,
      ['w-13 h-13']: !small,
      ['w-7 h-7']: small,
    })}
    style={{ ...(color ? { 'background-color': color } : {}) }}
  >
    <w-icon
      fit
      name="shield"
      class={cx('text-white', {
        ['w-9 h-9']: !small,
        ['w-5 h-5']: small,
      })}
    />
  </span>
);

export default ShieldLogo;
