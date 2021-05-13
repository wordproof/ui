import { WButtonSize } from '../types';

export const ButtonFontSizeClasses = (size: WButtonSize) => ({
  ['text-xs']: size === 'xs',
  ['text-base']: size === 'base',
  ['text-sm']: size === 'sm',
  ['text-lg']: size === 'lg',
  ['text-xl']: size === 'xl',
});

export const ButtonDefaultClasses = () =>
  'font-sohne select-none items-center transition ease-in-out duration-150 ' +
  'outline-none focus:outline-none focus:ring-2 focus:ring-opacity-50 ' +
  'disabled:opacity-50 disabled:cursor-default whitespace-nowrap ';

export const ButtonDisabledClasses = (disabled: boolean) => ({
  ['opacity-50 cursor-default']: disabled,
});
