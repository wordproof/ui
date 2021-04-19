import { FunctionalComponent, h } from '@stencil/core';
import { format, isSameDay } from 'date-fns';
import { parseDate } from '../../../utils/date';
import cx from 'classnames';

interface DateInputButtonProps {
  dateStr?: string;
  onClick?: Function;
  ref?: Function;
}

const getButtonText = (dateStr: string): string => {
  const date = parseDate(dateStr);

  if (isSameDay(date, new Date())) {
    return 'Today’s version';
  }

  if (dateStr === '') {
    return 'Select day to compare';
  }

  return format(date, 'MMMM d, yyyy');
};

const DateInputButton: FunctionalComponent<DateInputButtonProps> = ({
  dateStr = '',
  onClick = () => {},
  ref,
}) => (
  <button
    class={cx(
      'inline-flex pl-4 pr-7 py-3 items-center rounded-full focus:outline-none focus:ring-2',
      {
        'bg-gradient-to-r from-blue to-purple text-white': dateStr === '',
        'bg-white shadow text-blue': dateStr !== '',
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
        'font-sohne-semibold': dateStr === '',
        'font-sohne border-b border-blue': dateStr !== '',
      })}
    >
      {getButtonText(dateStr)}
    </div>
  </button>
);

export default DateInputButton;
