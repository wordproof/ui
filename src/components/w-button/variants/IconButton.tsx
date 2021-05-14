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

interface IconButtonProps {
  onClick: Function;
  color: WButtonColor;
  size: WButtonSize;
  disabled: boolean;
  loading?: boolean;
  type: string;
  icon: IconName;
}
const IconButton: FunctionalComponent<IconButtonProps> = ({
  color = 'blue',
  size = 'lg',
  onClick,
  disabled = false,
  type = 'button',
  loading = false,
  icon,
}) => {
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
          ['bg-white text-blue focus:ring-blue']:
            color === 'blue' || color === 'white',
          ['bg-white text-yellow focus:ring-yellow']: color === 'yellow',
          ['bg-white text-gray-600 focus:ring-gray-600']: color === 'gray',
        },
        'rounded-full focus:rounded-full p-1 flex justify-items-center items-center',
      )}
      style={{ '--tw-ring-opacity': '0.5' }}
    >
      <div style={{ padding: '0.25em' }}>
        <Spinner show={loading} />
        <Icon show={!loading} name={icon} />
      </div>
    </button>
  );
};

export default IconButton;
