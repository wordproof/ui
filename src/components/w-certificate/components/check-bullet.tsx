import { FunctionalComponent, h } from '@stencil/core';
import cx from 'classnames';

interface CheckBulletProps {
  checked: boolean;
}

const CheckBullet: FunctionalComponent<CheckBulletProps> = ({
  checked = false,
}) => (
  <span
    class={cx(
      'bg-gradient-to-r rounded-full w-6 h-6 inline-flex items-center justify-center',
      {
        'from-blue to-purple': checked,
        'from-yellow to-pink': !checked,
      },
    )}
  >
    {checked ? (
      <w-icon fit class="w-2 h-3 text-white" name="check"></w-icon>
    ) : (
      <span class="w-3 border-b border-white"></span>
    )}
  </span>
);

export default CheckBullet;
