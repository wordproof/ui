import { FunctionalComponent, h } from '@stencil/core';
import cx from 'classnames';
import { WButtonColor, WButtonSize } from '../types';
import {
  ButtonFontSizeClasses,
  ButtonDefaultClasses,
  ButtonDisabledClasses,
} from '../shared/SharedCssClasses';
import Spinner from '../shared/Spinner';

interface SolidButtonProps {
  onClick: Function;
  color: WButtonColor;
  size: WButtonSize;
  disabled: boolean;
  loading?: boolean;
  type: string;
}
const SolidButton: FunctionalComponent<SolidButtonProps> = (
  { color, size, onClick, disabled, type, loading },
  children,
) => {
  return (
    <button
      disabled={disabled || loading}
      type={type}
      onClick={() => {
        onClick();
      }}
      class={cx(
        ButtonDefaultClasses(),
        ButtonFontSizeClasses(size),
        ButtonDisabledClasses(disabled || loading),
        {
          ['bg-white text-blue focus:ring-white']: color === 'white',
          ['bg-gradient-to-r from-blue to-purple text-white focus:ring-blue']:
            color === 'blue',
          ['bg-gradient-to-r from-yellow to-pink text-white focus:ring-yellow']:
            color === 'yellow',
          ['bg-gray-600 text-white focus:ring-gray-600']: color === 'gray',
        },
        'font-sohne-bold font-bold px-5 py-2 rounded-full focus:rounded-full',
        'flex flex-nowrap',
      )}
      style={{ '--tw-ring-opacity': '0.5' }}
    >
      <span style={{ marginRight: '0.5em' }}>
        <Spinner show={loading} />
      </span>
      {children}
    </button>
  );
};

export default SolidButton;
