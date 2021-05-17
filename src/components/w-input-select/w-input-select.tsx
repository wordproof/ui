import { Component, h, Prop, Element, State } from '@stencil/core';

type OptionItem = {
  label: string;
  value: string;
  disabled: boolean;
};

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
  value: string = '';

  @State() options: OptionItem[] = [];

  handleChange(ev: Event) {
    ev.stopPropagation();
    const { value } = ev.target as any;
    this.value = value;
    const emittedEvent = new Event('change');
    this.hostElement.dispatchEvent(emittedEvent);
  }

  componentWillLoad() {
    const optionElems = Array.from(
      this.hostElement.querySelectorAll('w-input-select-option'),
    );

    this.options = optionElems.map(option => {
      const value = option.attributes['value']?.nodeValue;
      const disabled = option.attributes['disabled']?.nodeValue;
      return {
        label: option.textContent,
        value: value ? value : option.textContent,
        disabled: disabled !== undefined && disabled !== 'false',
      };
    });

    const selectedOption = this.options.find(
      option => option.value === this.value,
    );

    if (!selectedOption) {
      this.options = [
        { label: this.placeholder, value: this.value, disabled: true },
        ...this.options,
      ];
    }
  }

  render() {
    return (
      <div>
        <label class="block">
          <span class="text-gray-700 text-sm">{this.label}</span>
          <select
            onChange={this.handleChange.bind(this)}
            class="block w-full text-gray-800 text-lg border border-solid border-gray-800 h-12 pl-2 bg-transparent focus:border-blue rounded-md shadow-sm focus:outline-none"
          >
            {this.options.map(option => (
              <option
                value={option.value}
                disabled={option.disabled}
                selected={option.value === this.value}
              >
                {option.label}
              </option>
            ))}
          </select>
        </label>
        <span v-if="error" class="text-sm text-pink">
          {this.error}
        </span>
      </div>
    );
  }
}
