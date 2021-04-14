import { FunctionalComponent, h } from '@stencil/core';
import { format } from 'date-fns';

interface DatePickerHeaderProps {
  date?: Date;
  onLeftArrowClick?: Function;
  onRightArrowClick?: Function;
}

const DatePickerHeader: FunctionalComponent<DatePickerHeaderProps> = ({
  date = new Date(),
  onLeftArrowClick = () => {},
  onRightArrowClick = () => {},
}) => (
  <div class="flex justify-between items-center px-4 py-3 bg-blue text-white font-sohne-semibold">
    <button
      class="p-2 rounded-full focus:outline-none transform rotate-180"
      onClick={() => {
        onLeftArrowClick(-1);
      }}
    >
      <w-icon name="arrow-right" class=""></w-icon>
    </button>
    <div class="text-lg select-none">{format(date, 'MMMM yyyy')}</div>
    <button
      class="p-2 rounded-full focus:outline-none"
      onClick={() => {
        onRightArrowClick(1);
      }}
    >
      <w-icon name="arrow-right"></w-icon>
    </button>
  </div>
);

export default DatePickerHeader;
