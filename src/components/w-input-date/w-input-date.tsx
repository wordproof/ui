import { Component, Prop, h, State, Listen } from '@stencil/core';
import DateInputButton from './components/DateInputButton';
import DatePickerHeader from './components/DatePickerHeader';
import DatePickerDates from './components/DatePickerDates';
import { parseDate } from '../../utils/date';

import {
  startOfMonth,
  startOfWeek,
  add,
  isSameDay,
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
  @State() displayDates: Date[];

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

    this.displayDates = new Array(daysToShow)
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

        <DatePickerDates
          displayDates={this.displayDates}
          enabledDates={this.enabled}
          selected={this.selected}
          currentMonth={this.currentMonth}
          mostRecent={this.mostRecent}
          onDateSelect={(date: Date) => {
            this.onDateSelect(date);
          }}
        />
      </div>
    );
  }
}
