import { FunctionalComponent, h, VNode } from '@stencil/core';
import cx from 'classnames';
import { DateTimeOption } from '../w-date-time-select';
import { DateTimeSelectStrings } from '../../../i18n';

interface OpenButtonProps {
  options: DateTimeOption[];
  selected: number | null;
  onClick?: Function;
  ref?: Function;
  strings: DateTimeSelectStrings;
  getButtonText: getButtonTextFunction;
}

export type getButtonTextFunction = (
  options: DateTimeOption[],
  selected: number | null,
) => VNode;

const OpenButton: FunctionalComponent<OpenButtonProps> = ({
  options,
  selected,
  onClick = () => {},
  ref,
  getButtonText,
}) => (
  <button
    class={cx(
      'h-12 inline-flex pl-4 pr-7 py-3 items-center rounded-full focus:outline-none focus:ring-2',
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
      {getButtonText(options, selected)}
    </div>
  </button>
);

export default OpenButton;
