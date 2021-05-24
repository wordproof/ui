import { FunctionalComponent, h } from '@stencil/core';
import cx from 'classnames';
import { IconName } from '../../w-icon/types';
import Icon from '../shared/Icon';
import {
  ButtonDefaultClasses,
  ButtonDisabledClasses,
  ButtonFontSizeClasses,
} from '../shared/SharedCssClasses';
import Spinner from '../shared/Spinner';
import { WButtonColor, WButtonSize } from '../types';

interface TextButtonProps {
  onClick: Function;
  color: WButtonColor;
  size: WButtonSize;
  disabled: boolean;
  underlineNone: boolean;
  type: string;
  prependIcon?: IconName;
  appendIcon?: IconName;
  loading?: boolean;
}
const TextButton: FunctionalComponent<TextButtonProps> = (
  {
    color,
    size,
    onClick,
    disabled,
    type,
    underlineNone,
    prependIcon,
    appendIcon,
    loading,
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
        'focus:rounded focus:border-transparent flex items-center',
        { ['underline']: !underlineNone },
        {
          ['text-white  focus:ring-white']: color === 'white',
          ['text-blue focus:ring-blue']: color === 'blue',
          ['text-yellow focus:ring-yellow']: color === 'yellow',
          ['text-gray-600 focus:ring-gray-600']: color === 'gray',
        },
      )}
      style={{
        '--tw-ring-opacity': '0.5',
        'text-underline-offset': '0.25em',
      }}
    >
      {loading ? (
        <span style={{ marginRight: '0.5em' }}>
          <Spinner />
        </span>
      ) : null}

      {!loading && prependIcon ? (
        <span style={{ marginRight: '0.5em' }}>
          <Icon name={prependIcon} />
        </span>
      ) : null}

      {children}

      {appendIcon ? (
        <span style={{ marginLeft: '0.5em' }}>
          <Icon name={appendIcon} />
        </span>
      ) : null}
    </button>
  );
};

export default TextButton;
