import { Component, Prop, h, Element, State } from '@stencil/core';
import { DateTimeSelectStrings } from '../../i18n';
import {
  getComponentClosestLanguage,
  getLocaleStringsByNameAndLang,
} from '../../utils/locale';
import { DateTimeOption } from '../w-date-time-select/w-date-time-select';

@Component({
  tag: 'w-revision-select',
  styleUrl: 'w-revision-select.css',
  shadow: true,
})
export class WRevisionSelect {
  @Element() hostElement: HTMLElement;

  /**
   * revision date time options
   */
  @Prop() options: DateTimeOption[];

  /**
   * selected option index
   */
  @Prop() selected: number | null;

  @State() currentIndex: number | null;

  strings: DateTimeSelectStrings;

  locale: string;

  async componentWillLoad(): Promise<void> {
    this.strings = (await getLocaleStringsByNameAndLang(
      'w-date-time-select',
      getComponentClosestLanguage(this.hostElement),
    )) as DateTimeSelectStrings;

    this.currentIndex = this.selected;
    this.locale = getComponentClosestLanguage(this.hostElement);
  }

  onTriggerClick(ev: MouseEvent) {
    ev.stopPropagation();
    const event = new MouseEvent('click');
    this.hostElement.dispatchEvent(event);
  }

  render() {
    return (
      <div class="bg-white shadow text-blue h-12 inline-flex pl-4 pr-4 py-3 items-center rounded-full focus:outline-none focus:ring-2 appearance-none font-sohne">
        <div class="mr-2 p-1.5 bg-blue border border-blue rounded-full h-7 w-7 flex items-center justify-center">
          <w-icon name="calendar" class="text-white"></w-icon>
        </div>
        <select class="border-none outline-none bg-white text-blue">
          {this.options.map(option => (
            <option
              class="text-black"
              value={option.index}
              selected={option.index === this.currentIndex}
            >
              {new Intl.DateTimeFormat(this.locale, {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
              }).format(option.value)}
            </option>
          ))}
        </select>
      </div>
    );
  }
}
