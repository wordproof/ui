import { FunctionalComponent, h } from '@stencil/core';
import { format, getMonth, isSameDay } from 'date-fns';
import DateLabel from './DateLabel';

interface DatePickerDatesProps {
  displayDates: Date[];
  enabledDates: Date[];
  selected: Date;
  currentMonth: Date;
  mostRecent: Date;
  onDateSelect?: Function;
}

const weekDayNames: string[] = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

const DatePickerDates: FunctionalComponent<DatePickerDatesProps> = ({
  displayDates,
  selected,
  enabledDates,
  currentMonth,
  mostRecent,
  onDateSelect = () => {},
}) => (
  <div class="mx-2 pb-5 shadow rounded-b bg-white">
    <div
      class="px-4 pb-6 grid grid-cols-7 grid-flow-row gap-x-0.5 gap-y-4"
      style={{ width: '356px' }}
    >
      {weekDayNames.map(dayName => (
        <div class="w-11 h-11 text-center select-none text-blue uppercase text-xs flex items-center justify-center">
          {dayName}
        </div>
      ))}

      {displayDates.map(date => (
        <DateLabel
          date={date}
          selected={isSameDay(date, selected)}
          enabled={enabledDates.some(enabledDate =>
            isSameDay(date, enabledDate),
          )}
          grayed={getMonth(currentMonth) !== getMonth(date)}
          onSelect={date => {
            onDateSelect(date);
          }}
        />
      ))}
    </div>
    <div class="border-b border-gray-400 w-full"></div>
    <div class="flex items-center justify-center my-5">
      <w-icon name="calendar"></w-icon>
      <button class="text-blue ml-3">Today</button>
    </div>
    <div class="border-b border-gray-400 w-full"></div>
    <div class="flex items-center justify-center mt-5 text-blue">
      <div>Most recent</div>
      <button class="opacity-40 ml-3">
        {format(mostRecent, 'MMMM d, yyyy')}
      </button>
    </div>
  </div>
);

export default DatePickerDates;
