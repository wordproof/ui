import { FunctionalComponent, h } from '@stencil/core';
import { format, getMonth, isSameDay } from 'date-fns';
import { DateTimeSelectStrings } from '../../../i18n';
import { DateTimeOption } from '../w-date-time-select';
import DateLabel from './DateLabel';

interface DatePickerDatesProps {
  displayDates: Date[];
  enabledDates: DateTimeOption[];
  selected: Date;
  currentMonth: Date;
  mostRecent: Date;
  onDateSelect?: Function;
  strings: DateTimeSelectStrings;
}

const weekDayNames: string[] = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

const DatePickerDates: FunctionalComponent<DatePickerDatesProps> = ({
  displayDates,
  selected,
  enabledDates,
  currentMonth,
  mostRecent,
  onDateSelect = () => {},
  strings,
}) => (
  <div class="pb-5 shadow rounded-b bg-white">
    <div
      class="px-4 pb-6 grid grid-cols-7 grid-flow-row gap-x-0.5 gap-y-4"
      style={{ width: '356px' }}
    >
      {weekDayNames.map(dayName => (
        <div class="w-11 h-11 text-center select-none text-blue uppercase text-xs flex items-center justify-center font-sohne">
          {dayName}
        </div>
      ))}

      {displayDates.map(date => (
        <DateLabel
          date={date}
          selected={isSameDay(date, selected)}
          enabled={enabledDates.some(enabledDate =>
            isSameDay(date, enabledDate.value),
          )}
          grayed={getMonth(currentMonth) !== getMonth(date)}
          onSelect={(date: Date) => {
            onDateSelect(date);
          }}
        />
      ))}
    </div>
    <div class="border-b border-gray-400 w-full"></div>
    <div class="flex items-center justify-center my-5 font-sohne">
      <w-icon class="text-blue" name="calendar"></w-icon>
      <button
        class="text-blue ml-3"
        onClick={() => {
          onDateSelect(new Date());
        }}
      >
        {strings.today}
      </button>
    </div>
    <div class="border-b border-gray-400 w-full"></div>
    <div class="flex items-center justify-center mt-5 text-blue  font-sohne">
      <div>{strings.mostRecent}</div>
      <button
        class="opacity-40 ml-3"
        onClick={() => {
          onDateSelect(mostRecent);
        }}
      >
        {mostRecent ? format(mostRecent, 'MMMM d, yyyy') : ' '}
      </button>
    </div>
  </div>
);

export default DatePickerDates;
