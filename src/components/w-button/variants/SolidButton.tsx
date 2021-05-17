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

interface SolidButtonProps {
  onClick: Function;
  color: WButtonColor;
  size: WButtonSize;
  disabled: boolean;
  loading?: boolean;
  type: string;
  prependIcon?: IconName;
  appendIcon?: IconName;
}
const SolidButton: FunctionalComponent<SolidButtonProps> = (
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
      {loading ? (
        <span style={{ marginRight: '0.5em' }}>
          <Spinner show />
        </span>
      ) : null}

      {!loading && prependIcon ? (
        <span style={{ marginRight: '0.5em' }}>
          <Icon show name={prependIcon} />
        </span>
      ) : null}

      {children}

      {appendIcon ? (
        <span style={{ marginLeft: '0.5em' }}>
          <Icon show name={appendIcon} />
        </span>
      ) : null}
    </button>
  );
};

export default SolidButton;
