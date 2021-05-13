import { FunctionalComponent, h } from '@stencil/core';
import cx from 'classnames';
import {
  ButtonDefaultClasses,
  ButtonDisabledClasses,
  ButtonFontSizeClasses,
} from '../CommonCssClasses';
import { WButtonColor, WButtonSize } from '../types';

interface TextButtonProps {
  onClick: Function;
  color: WButtonColor;
  size: WButtonSize;
  disabled: boolean;
  underlineNone: boolean;
  type: string;
}
const TextButton: FunctionalComponent<TextButtonProps> = (
  {
    color = 'gray',
    size = 'lg',
    onClick,
    disabled = false,
    type = 'button',
    underlineNone = false,
  },
  children,
) => {
  return (
    <button
      disabled={disabled}
      type={type}
      onClick={() => {
        onClick();
      }}
      class={cx(
        ButtonDefaultClasses(),
        ButtonFontSizeClasses(size),
        ButtonDisabledClasses(disabled),
        'focus:rounded focus:border-transparent',
        { ['border-b border-current']: !underlineNone },
        {
          ['text-white  focus:ring-white']: color === 'white',
          ['text-blue focus:ring-blue']: color === 'blue',
          ['text-yellow focus:ring-yellow']: color === 'yellow',
          ['text-gray-600 focus:ring-gray-600']: color === 'gray',
        },
      )}
    >
      {children}
    </button>
  );
};

export default TextButton;
