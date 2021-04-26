import { FunctionalComponent, h } from '@stencil/core';
import cx from 'classnames';

interface LegendButtonProps {
  color: 'blue' | 'pink';
  label: string;
  onClick?: Function;
}

const LegendButton: FunctionalComponent<LegendButtonProps> = ({
  color,
  label,
}) => {
  return (
    <button class="flex-grow inline-flex p-1 rounded-full focus:outline-none focus:ring">
      <span class="inline-block w-6 h-6 rounded-full bg-white shadow">
        <span
          class={cx(
            'inline-block w-3 h-3 rounded-full border border-light-blue bg-gradient-to-r',
            {
              'from-blue to-purple': color === 'blue',
              'from-yellow to-pink': color === 'pink',
            },
          )}
        ></span>
      </span>
      <span
        class={cx('ml-3 border-b border-transparent text-sm font-sohne', {
          'hover:text-blue hover:border-blue': color === 'blue',
          'hover:text-pink hover:border-pink': color === 'pink',
        })}
      >
        {label}
      </span>
    </button>
  );
};

export default LegendButton;
