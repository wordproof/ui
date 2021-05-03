import {
  Component,
  Prop,
  h,
  State,
  Listen,
  Element,
  VNode,
} from '@stencil/core';
import OpenButton, { getButtonTextFunction } from './components/OpenButton';
import DatePickerHeader from './components/DatePickerHeader';
import DatePickerDates from './components/DatePickerDates';
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
import { DateTimeSelectStrings } from '../../i18n';
import { getLocaleStrings } from '../../utils/locale';
import TimeLabel from './components/TimeLabel';

export interface DateTimeOption {
  value: Date;
  index: number;
}
@Component({
  tag: 'w-date-time-select',
  styleUrl: 'w-date-time-select.css',
  shadow: true,
})
export class WDateTimeSelect {
  @Element() hostElement: HTMLElement;

  /**
   * index of the selected DateTimeOption
   */
  @Prop({ mutable: true }) selected: number | null = null;

  /**
   * by default the date picker opens to the bottom of the trigger elemnt
   * if set to true opens it to the top
   */
  @Prop() openToTop: boolean = false;

  /**
   * on array of Date objects to select from
   */
  @Prop() options: DateTimeOption[] = [];

  /**
   * optional: returns a string displayed on the button openong the dropdown
   */
  @Prop() getButtonText: getButtonTextFunction = (
    options: DateTimeOption[],
    selected: number | null,
  ): VNode => {
    if (selected === null) {
      return <span>{this.strings.selectDayToCompare}</span>;
    }

    if (selected === 0) {
      return <span>{this.strings.todaysVersion}</span>;
    }

    const foundOption = options.find(option => option.index === selected);

    if (foundOption === undefined) {
      return <span>{this.strings.selectDayToCompare}</span>;
    }

    if (isSameDay(foundOption.value, new Date())) {
      return <span>{this.strings.todaysVersion}</span>;
    }

    return <span>{format(foundOption.value, 'MMMM d, yyyy')}</span>;
  };

  @Listen('keydown')
  handleKeyDown(ev: KeyboardEvent) {
    if (ev.key === 'Escape') {
      ev.stopPropagation();
      this.showDatepicker = false;
    }
  }

  @State() showDatepicker: boolean = false;
  @State() mostRecent: Date;
  @State() selectedDate: Date;
  @State() currentMonth: Date;
  @State() displayDates: Date[];
  @State() showTimeOptions: boolean = false;
  @State() sameDayOptions: DateTimeOption[] = [];

  dateEl: HTMLInputElement;
  triggerButtonElement: HTMLButtonElement;
  datepickerValue: string;
  strings: DateTimeSelectStrings;

  connectedCallback() {
    this.mostRecent = this.options[0].value;
  }

  async componentWillLoad(): Promise<void> {
    this.strings = (await getLocaleStrings(
      this.hostElement,
    )) as DateTimeSelectStrings;
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
    this.sameDayOptions = this.options.filter(option =>
      isSameDay(option.value, date),
    );

    if (this.sameDayOptions.length === 1) {
      this.selected = this.sameDayOptions[0].index;
      this.selectedDate = this.getSelectedDate(this.selected);
      this.showDatepicker = false;
      this.emitValue(this.selected);
    }

    if (this.sameDayOptions.length > 1) {
      this.selectedDate = this.getSelectedDate(this.sameDayOptions[0].index);
      this.showTimeOptions = true;
    }

    const monthDiff = differenceInCalendarMonths(date, this.currentMonth);

    if (monthDiff !== 0) {
      this.changeMonth(monthDiff);
    }
  }

  onTimeOptionSelect(option: DateTimeOption) {
    this.selected = option.index;
    this.emitValue(option.index);
    this.showDatepicker = false;
  }

  getStartOfMonth(): Date {
    const selectedOption = this.options.find(
      option => option.index === this.selected,
    );

    if (selectedOption !== undefined) {
      return startOfMonth(selectedOption.value);
    }

    return startOfMonth(this.options[0].value);
  }

  toggleDatePicker() {
    if (this.options.length <= 1) {
      return;
    }

    this.showTimeOptions = false;

    if (this.showDatepicker) {
      this.triggerButtonElement.blur();
      this.showDatepicker = false;
      return;
    }

    this.currentMonth = this.getStartOfMonth();
    this.refreshDisplayDates();
    this.showTimeOptions = false;
    this.showDatepicker = true;
  }

  getSelectedDate(optionIndex): null | Date {
    if (optionIndex === null) {
      return null;
    }

    const foundOption = this.options.find(
      option => option.index === optionIndex,
    );

    if (foundOption === undefined) {
      return null;
    }

    return foundOption.value;
  }

  emitValue(selected: number) {
    const emittedEvent = new InputEvent('change', { data: String(selected) });
    this.hostElement.dispatchEvent(emittedEvent);
  }

  render() {
    return (
      <span class="relative z-10">
        <OpenButton
          options={this.options}
          selected={this.selected}
          onClick={() => {
            this.toggleDatePicker();
          }}
          ref={el => (this.triggerButtonElement = el as HTMLButtonElement)}
          strings={this.strings}
          getButtonText={this.getButtonText.bind(this)}
        />
        <div
          class={cx({
            hidden: !this.showDatepicker,
          })}
        >
          <div
            class="fixed w-screen h-screen top-0 left-0 bg-black opacity-40 z-10"
            onClick={() => this.toggleDatePicker()}
          ></div>
          <div
            class={cx('absolute transform -translate-x-1/2 left-1/2 z-50', {
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

            <div
              class={cx(
                'bg-white px-4 py-3 absolute rounded -right-0.5 transform translate-x-full overflow-x-auto',
                {
                  hidden: !this.showTimeOptions,
                },
              )}
              style={{ maxWidth: '21.5rem', maxHeight: '22rem' }}
            >
              <ul
                class={cx('grid cell-border-top', {
                  'grid-cols-2 cell-border-left':
                    this.sameDayOptions.length > 5,
                  'grid-cols-1 first-cell-border-top':
                    this.sameDayOptions.length <= 5,
                })}
              >
                {this.sameDayOptions.map(option => (
                  <TimeLabel
                    dateTimeOption={option}
                    onSelect={() => {
                      this.onTimeOptionSelect(option);
                    }}
                  />
                ))}
                {this.sameDayOptions.length % 2 !== 0 &&
                this.sameDayOptions.length > 5 ? (
                  <li class="px-12 py-5 border-gray-400 cursor-default select-none"></li>
                ) : null}
              </ul>
            </div>

            {this.displayDates ? (
              <DatePickerDates
                displayDates={this.displayDates}
                enabledDates={this.options}
                selected={this.selectedDate}
                currentMonth={this.currentMonth}
                mostRecent={this.mostRecent}
                onDateSelect={(date: Date) => {
                  this.onDateSelect(date);
                }}
                strings={this.strings}
              />
            ) : null}
          </div>
        </div>
      </span>
    );
  }
}
