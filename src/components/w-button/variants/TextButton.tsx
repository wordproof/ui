import { FunctionalComponent, h } from '@stencil/core';
import cx from 'classnames';
import { WButtonColor, WButtonSize } from '../types';

interface TextButtonProps {
  onClick: Function;
  color: WButtonColor;
  size: WButtonSize;
  disabled: boolean;
  underlineNone: boolean;
  type: string;
}
const Button: FunctionalComponent<TextButtonProps> = (
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
        'font-sohne select-none items-center transition ease-in-out duration-150',
        'focus:rounded outline-none focus:outline-none focus:ring-2 focus:ring-opacity-50',
        'disabled: opacity-50',
        { ['border-b border-current']: !underlineNone },
        { ['opacity-50 cursor-default']: disabled },
        {
          ['text-xs']: size === 'xs',
          ['text-base']: size === 'base',
          ['text-sm']: size === 'sm',
          ['text-lg']: size === 'lg',
          ['text-xl']: size === 'xl',
        },
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

export default Button;
