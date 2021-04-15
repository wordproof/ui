import { FunctionalComponent, h } from '@stencil/core';
import { format, isSameDay } from 'date-fns';
import cx from 'classnames';

interface OpenButtonProps {
  date: Date | null;
  onClick?: Function;
  ref?: Function;
}

const getButtonText = (date: Date): string => {
  if (isSameDay(date, new Date())) {
    return 'Today’s version';
  }

  if (date === null) {
    return 'Select day to compare';
  }

  return format(date, 'MMMM d, yyyy');
};

const OpenButton: FunctionalComponent<OpenButtonProps> = ({
  date = null,
  onClick = () => {},
  ref,
}) => (
  <button
    class={cx(
      'inline-flex pl-4 pr-7 py-3 items-center rounded-full focus:outline-none focus:ring-2',
      {
        'bg-gradient-to-r from-blue to-purple text-white': date === null,
        'bg-white shadow text-blue': date !== null,
      },
    )}
    onClick={() => {
      onClick();
    }}
    ref={el => ref(el)}
  >
    <div class="p-1.5 bg-blue border border-blue rounded-full">
      <w-icon name="calendar" class="text-white"></w-icon>
    </div>
    <div
      class={cx('ml-4', {
        'font-sohne-semibold': date === null,
        'font-sohne border-b border-blue': date !== null,
      })}
    >
      {getButtonText(date)}
    </div>
  </button>
);

export default OpenButton;
