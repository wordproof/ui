import { Component, Prop, h, State, Listen } from '@stencil/core';
import DateLabel from './components/DateLabel';
import DateInputButton from './components/DateInputButton';
import DatePickerHeader from './components/DatePickerHeader';
// import cx from 'classnames';
import { parseDate } from '../../utils/date';

import {
  startOfMonth,
  startOfWeek,
  add,
  getMonth,
  isSameDay,
  format,
  endOfWeek,
  endOfMonth,
  differenceInCalendarDays,
  differenceInCalendarMonths,
} from 'date-fns';

@Component({
  tag: 'w-input-date',
  styleUrl: 'w-input-date.css',
  shadow: true,
})
export class WInputDate {
  /**
   * value, date as a string in "YYYY-MM-DD" format
   */
  @Prop() value: string = '2020-09-17';

  weekDayNames: string[] = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

  enabled: Date[];

  @Listen('keydown')
  handleKeyDown(ev: KeyboardEvent) {
    if (ev.key === 'Escape') {
      this.showDatepicker = false;
    }
  }

  @State() showDatepicker: boolean = false;
  @State() selected: Date;
  @State() mostRecent: Date;
  @State() currentMonth: Date;
  @State() dislayDates: Date[];

  dateEl: HTMLInputElement;
  datepickerValue: string;

  connectedCallback() {
    this.currentMonth = startOfMonth(parseDate(this.value));
    this.refreshDisplayDates();

    this.enabled = [
      '2020-09-02',
      '2020-09-08',
      '2020-09-14',
      '2020-09-15',
      '2020-09-17',
      '2020-09-22',
    ].map(item => parseDate(item));

    this.selected = parseDate(this.value);

    this.mostRecent = parseDate('2020-01-26');
  }

  refreshDisplayDates() {
    const startDate = startOfWeek(startOfMonth(this.currentMonth));
    const endDate = endOfWeek(endOfMonth(this.currentMonth));
    const daysToShow = differenceInCalendarDays(endDate, startDate) + 1;

    this.dislayDates = new Array(daysToShow)
      .fill(null)
      .map((_el, ind) => add(startDate, { days: ind }));
  }

  changeMonth(offset: number) {
    this.currentMonth = add(this.currentMonth, { months: offset });
    this.refreshDisplayDates();
  }

  onDateSelect(date: Date) {
    if (this.enabled.some(enabledDate => isSameDay(enabledDate, date))) {
      this.selected = date;
    }

    const monthDiff = differenceInCalendarMonths(date, this.currentMonth);

    if (monthDiff !== 0) {
      this.changeMonth(monthDiff);
    }
  }

  render() {
    return (
      <div class="w-min relative">
        <input type="hidden" value={this.value} />
        <DateInputButton />

        <DatePickerHeader
          date={this.currentMonth}
          onLeftArrowClick={() => {
            this.changeMonth(-1);
          }}
          onRightArrowClick={() => {
            this.changeMonth(1);
          }}
        />

        <div class="mx-2 pb-5 shadow rounded-b">
          <div
            class="px-4 pb-6 grid grid-cols-7 grid-flow-row gap-x-0.5 gap-y-4"
            style={{ width: '356px' }}
          >
            {this.weekDayNames.map(dayName => (
              <div class="w-11 h-11 text-center select-none text-blue uppercase text-xs flex items-center justify-center">
                {dayName}
              </div>
            ))}

            {this.dislayDates.map(date => (
              <DateLabel
                date={date}
                selected={isSameDay(date, this.selected)}
                enabled={this.enabled.some(enabledDate =>
                  isSameDay(date, enabledDate),
                )}
                grayed={getMonth(this.currentMonth) !== getMonth(date)}
                onSelect={date => {
                  this.onDateSelect(date);
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
              {format(this.mostRecent, 'MMMM d, yyyy')}
            </button>
          </div>
        </div>
      </div>
    );
  }
}
