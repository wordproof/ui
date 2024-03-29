import { FunctionalComponent, h } from '@stencil/core';
import cx from 'classnames';
import { WButtonColor, WButtonSize } from '../types';
import {
  ButtonFontSizeClasses,
  ButtonDefaultClasses,
  ButtonDisabledClasses,
} from '../shared/SharedCssClasses';
import Spinner from '../shared/Spinner';
import Icon from '../shared/Icon';
import { IconName } from '../../w-icon/types';

interface OutlineButtonProps {
  onClick: Function;
  color: WButtonColor;
  size: WButtonSize;
  disabled: boolean;
  loading?: boolean;
  type: string;
  prependIcon?: IconName;
  appendIcon?: IconName;
}
const OutlineButton: FunctionalComponent<OutlineButtonProps> = (
  { color, size, onClick, disabled, type, loading, prependIcon, appendIcon },
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
          ['bg-white border-2 border-blue text-blue focus:ring-blue']:
            color === 'blue' || color === 'white',
          ['bg-white border-2 border-yellow text-yellow focus:ring-yellow']:
            color === 'yellow',
          ['bg-white border-2 border-gray-600 text-gray-600 focus:ring-gray-600']:
            color === 'gray',
        },
        'font-sohne-bold font-bold px-5 py-2 rounded-full focus:rounded-full',
        'flex flex-nowrap',
      )}
      style={{ '--tw-ring-opacity': '0.5' }}
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

export default OutlineButton;
