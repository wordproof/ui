import { Component, Prop, h, State, Listen } from '@stencil/core';
import OpenButton from './components/OpenButton';
import DatePickerHeader from './components/DatePickerHeader';
import DatePickerDates from './components/DatePickerDates';
import { parseDate } from '../../utils/date';
import cx from 'classnames';
import {
  startOfMonth,
  startOfWeek,
  add,
  isSameDay,
  endOfWeek,
  endOfMonth,
  differenceInCalendarDays,
  differenceInCalendarMonths,
  format,
} from 'date-fns';

@Component({
  tag: 'w-date-time-select',
  styleUrl: 'w-date-time-select.css',
  shadow: true,
})
export class WDateTimeSekect {
  /**
   * value, date as a string in "YYYY-MM-DD" format
   */
  @Prop() value: string = '2020-09-17';
  @Prop() openToTop: boolean = false;

  enabled: Date[];

  @Listen('keydown')
  handleKeyDown(ev: KeyboardEvent) {
    if (ev.key === 'Escape') {
      ev.stopPropagation();
      this.showDatepicker = false;
    }
  }

  @State() showDatepicker: boolean = false;
  @State() selected: Date;
  @State() mostRecent: Date;
  @State() currentMonth: Date;
  @State() displayDates: Date[];

  dateEl: HTMLInputElement;
  triggerButtonElement: HTMLButtonElement;
  datepickerValue: string;

  connectedCallback() {
    this.enabled = [
      '2020-09-02',
      '2020-09-08',
      '2020-09-14',
      '2020-09-15',
      '2020-09-17',
      '2020-09-22',
    ].map(item => parseDate(item));

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
      this.showDatepicker = false;
      this.value = format(this.selected, 'yyyy-MM-dd');
    }

    const monthDiff = differenceInCalendarMonths(date, this.currentMonth);

    if (monthDiff !== 0) {
      this.changeMonth(monthDiff);
    }
  }

  toggleDatePicker() {
    if (!this.showDatepicker) {
      this.currentMonth = startOfMonth(parseDate(this.value));
      this.refreshDisplayDates();
      this.selected = parseDate(this.value);
    }

    if (this.showDatepicker) {
      this.triggerButtonElement.blur();
    }

    this.showDatepicker = !this.showDatepicker;
  }

  render() {
    return (
      <span class="relative">
        <input type="hidden" value={this.value} />
        <OpenButton
          dateStr={this.value}
          onClick={() => {
            this.toggleDatePicker();
          }}
          ref={el => (this.triggerButtonElement = el as HTMLButtonElement)}
        />
        <div
          class={cx({
            hidden: !this.showDatepicker,
          })}
        >
          <div
            class="fixed w-screen h-screen top-0 left-0 bg-black opacity-40"
            onClick={() => this.toggleDatePicker()}
          ></div>
          <div
            class={cx('absolute transform -translate-x-1/2 left-1/2 z-10', {
              'top-10': !this.openToTop,
              '-top-10 -translate-y-full': this.openToTop,
            })}
          >
            <DatePickerHeader
              date={this.currentMonth}
              onLeftArrowClick={() => {
                this.changeMonth(-1);
              }}
              onRightArrowClick={() => {
                this.changeMonth(1);
              }}
            />

            {this.displayDates ? (
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
            ) : null}
          </div>
        </div>
      </span>
    );
  }
}
