import { Component, Prop, h, State, Listen } from '@stencil/core';
import DateLabel from './components/DateLabel';
// import cx from 'classnames';
import { parseDate } from '../../utils/date';

import { startOfMonth, startOfWeek, add, getMonth, isSameDay } from 'date-fns';

@Component({
  tag: 'w-input-date',
  styleUrl: 'w-input-date.css',
  shadow: true,
})
export class WInputDate {
  /**
   * color variant
   */
  @Prop() value: string = '2020-09-17';

  weekDayNames: string[] = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

  currentDate: Date;

  dislayDates: Date[] = [];
  enabled: Date[];

  @Listen('keydown')
  handleKeyDown(ev: KeyboardEvent) {
    if (ev.key === 'Escape') {
      this.showDatepicker = false;
    }
  }

  @State() showDatepicker: boolean = false;
  @State() selected: Date;

  dateEl: HTMLInputElement;
  datepickerValue: string;

  connectedCallback() {
    this.currentDate = parseDate(this.value);
    const startDate = startOfWeek(startOfMonth(this.currentDate));
    this.dislayDates = new Array(35)
      .fill(null)
      .map((_el, ind) => add(startDate, { days: ind }));
    this.enabled = [
      '2020-09-02',
      '2020-09-08',
      '2020-09-14',
      '2020-09-15',
      '2020-09-17',
      '2020-09-22',
    ].map(item => parseDate(item));

    this.selected = parseDate(this.value);
  }

  render() {
    return (
      <div class="">
        <div
          class="grid grid-cols-7 grid-flow-row gap-x-0.5 gap-y-4"
          style={{ width: '320px' }}
        >
          {this.dislayDates.map(date => (
            <DateLabel
              date={date}
              selected={isSameDay(date, this.selected)}
              enabled={this.enabled.some(enabledDate =>
                isSameDay(date, enabledDate),
              )}
              grayed={getMonth(this.currentDate) !== getMonth(date)}
            />
          ))}
        </div>
      </div>
    );
  }
}
