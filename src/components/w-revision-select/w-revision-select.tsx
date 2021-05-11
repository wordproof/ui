import { Component, Prop, h, Element } from '@stencil/core';
import { DateTimeSelectStrings } from '../../i18n';
import {
  getComponentClosestLanguage,
  getLocaleStringsByNameAndLang,
} from '../../utils/locale';
import OpenButton, {
  getButtonTextFunction,
} from '../w-date-time-select/components/OpenButton';
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

  @Prop() getButtonText: getButtonTextFunction;

  strings: DateTimeSelectStrings;

  async componentWillLoad(): Promise<void> {
    this.strings = (await getLocaleStringsByNameAndLang(
      'w-date-time-select',
      getComponentClosestLanguage(this.hostElement),
    )) as DateTimeSelectStrings;
  }

  onTriggerClick(ev: MouseEvent) {
    ev.stopPropagation();
    const event = new MouseEvent('click');
    this.hostElement.dispatchEvent(event);
  }

  render() {
    return (
      <div>
        <OpenButton
          options={this.options}
          selected={this.selected}
          strings={this.strings}
          getButtonText={this.getButtonText}
          ref={() => {}}
        />
      </div>
    );
  }
}
