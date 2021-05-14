import { Component, h, Listen, Prop, State, Element } from '@stencil/core';
import cx from 'classnames';
import { WInputSelectOption } from '../w-input-select-option/w-input-select-option';

@Component({
  tag: 'w-input-select',
  styleUrl: 'w-input-select.css',
  shadow: false,
})
export class WInputSelect {
  @Element() hostElement: HTMLElement;

  /**
   * form element error message
   */
  @Prop() error: string = '';

  /**
   * placeholder
   */
  @Prop() placeholder: string = '';

  /**
   * label
   */
  @Prop() label: string = '';

  /**
   * value
   */
  @Prop({ mutable: true })
  value: string | number = '';

  handleChange(ev: Event) {
    ev.preventDefault();

    console.warn((ev.target as any).value);

    const emittedEvent = new InputEvent('change', {
      // data: String(this.checked),
    });
    this.hostElement.dispatchEvent(emittedEvent);
  }

  render() {
    return (
      <div>
        <label class="block">
          <span class="text-gray-700 text-sm">{this.label}</span>
          <select
            onChange={this.handleChange.bind(this)}
            class="fblock w-full text-gray-800 text-lg border border-solid border-gray-800 h-12 pl-2 bg-transparent focus:border-blue rounded-md shadow-sm focus:outline-none"
          >
            <slot></slot>
          </select>
        </label>
        <span v-if="error" class="text-sm text-pink">
          {this.error}
        </span>
      </div>
    );
  }
}
