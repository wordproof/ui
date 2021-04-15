import { FunctionalComponent, h } from '@stencil/core';
import { format, isSameDay } from 'date-fns';
import cx from 'classnames';
import { DateTimeOption } from '../w-date-time-select';
import { DateTimeSelectStrings } from '../../../i18n';

interface OpenButtonProps {
  dateOption: DateTimeOption | null;
  onClick?: Function;
  ref?: Function;
  strings: DateTimeSelectStrings
}

const getButtonText = (dateOption: DateTimeOption | null, strings:DateTimeSelectStrings): string => {
  if (dateOption === null) {
    return strings.selectDayToCompare;
  }

  if (dateOption.index === 0) {
    return strings.todaysVersion;
  }

  if (isSameDay(dateOption.value, new Date())) {
    return strings.todaysVersion;
  }

  return format(dateOption.value, 'MMMM d, yyyy');
};

const OpenButton: FunctionalComponent<OpenButtonProps> = ({
  dateOption = null,
  onClick = () => {},
  ref,
  strings
}) => (
  <button
    class={cx(
      'inline-flex pl-4 pr-7 py-3 items-center rounded-full focus:outline-none focus:ring-2',
      {
        'bg-gradient-to-r from-blue to-purple text-white': dateOption === null,
        'bg-white shadow text-blue': dateOption !== null,
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
        'font-sohne-semibold': dateOption === null,
        'font-sohne border-b border-blue': dateOption !== null,
      })}
    >
      {getButtonText(dateOption, strings)}
    </div>
  </button>
);

export default OpenButton;
