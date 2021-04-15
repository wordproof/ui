import { FunctionalComponent, h } from '@stencil/core';
import { format, isSameDay } from 'date-fns';
import cx from 'classnames';
import { DateTimeOption } from '../w-date-time-select';
import { DateTimeSelectStrings } from '../../../i18n';

interface OpenButtonProps {
  options: DateTimeOption[];
  selected: number | null;
  onClick?: Function;
  ref?: Function;
  strings: DateTimeSelectStrings;
}

const getButtonText = (
  options: DateTimeOption[],
  selected: number | null,
  strings: DateTimeSelectStrings,
): string => {
  if (selected === null) {
    return strings.selectDayToCompare;
  }

  if (selected === 0) {
    return strings.todaysVersion;
  }

  const foundOption = options.find(
    option => option.index === selected,
  );

  if (foundOption === undefined) {
    return strings.selectDayToCompare;
  }

  if (isSameDay(foundOption.value, new Date())) {
    return strings.todaysVersion;
  }

  return format(foundOption.value, 'MMMM d, yyyy');
};

const OpenButton: FunctionalComponent<OpenButtonProps> = ({
  options,
  selected,
  onClick = () => {},
  ref,
  strings,
}) => (
  <button
    class={cx(
      'inline-flex pl-4 pr-7 py-3 items-center rounded-full focus:outline-none focus:ring-2',
      {
        'bg-gradient-to-r from-blue to-purple text-white': selected === null,
        'bg-white shadow text-blue': selected !== null,
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
        'font-sohne-semibold': selected === null,
        'font-sohne border-b border-blue': selected !== null,
      })}
    >
      {getButtonText(options,
  selected, strings)}
    </div>
  </button>
);

export default OpenButton;
