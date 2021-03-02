import { Component, Prop, h, Host, State, Element, Watch } from '@stencil/core';
import cx from 'classnames';

@Component({
  tag: 'w-input-text',
  styleUrl: 'w-input-text.css',
  shadow: false,
})
export class WInputText {
  @Element() hostElement: HTMLElement;

  /**
   * input html tag "type" attribute, defaults to "text"
   */
  @Prop() type: string = 'text';

  /**
   * input html tag "required" attribute, defaults to "false"
   */
  @Prop() required: boolean = false;

  /**
   * input html tag "autofocus" attribute, defaults to "false"
   */
  @Prop() autofocus: boolean = false;

  /**
   * label for the form group, defaults to ""
   */
  @Prop() label: string = '';

  /**
   * value, defaults to ""
   */
  @Prop({ mutable: true }) value: string;

  /**
   * error message displayed in the form group, defaults to ""
   */
  @Prop() error: string = '';

  /**
   * input html tag "autocomplete" attribute, defaults to ""
   */
  @Prop() autocomplete: string = '';

  /**
   * input html tag "inputmode" attribute, defaults to ""
   */
  @Prop() inputmode: string = 'text';

  /**
   * input html tag "placeholder" attribute,
   * if not set defaults to "label" prop value
   */
  @Prop() placeholder: string = '';

  /**
   * a string displayed inside input form field group as appended label
   * and added to visible input value
   * could be used to get from user an URL in a specific domain
   * for example somesubdomain[.examplemaindomain.com]
   */
  @Prop() suffix: string = '';

  /**
   * a regex string (new RegExp is creted from this string)
   * that is stripped from input value (replaced with an empty string)
   * could be used to strip protocol and route from an URL to get website name
   * for example strip="^http[s]?:\/\/" will strip out the protocol from an URL
   * and strip="^http[s]?:\/\/|\/$|\.examplemaindomain.com.*" will leave
   * subdomain value only. combined with suffix=".examplemaindomain.com"
   * will allow to get website name without protocol and any route, query etc.
   */
  @Prop() strip: string = '';

  handleInputChange(ev: Event, eventType: string) {
    ev.stopPropagation();
    if (ev.target) {
      const { value } = ev.target as HTMLInputElement;
      this.handleValueChange(value, eventType);
    }
  }

  @State() localValue: string = '';

  handleValueChange(value: string, eventType: string) {
    this.localValue =
      this.stripRegex !== null ? value.replace(this.stripRegex, '') : value;
    this.inputEl.value = this.localValue;
    this.value =
      this.localValue.trim() === '' ? '' : `${this.localValue}${this.suffix}`;

    const emittedEvent = new InputEvent(eventType, {
      data: String(this.value),
    });
    this.hostElement.dispatchEvent(emittedEvent);
  }

  stripRegex: RegExp | null = null;

  inputEl: HTMLInputElement;

  compileRegex(regexString: string) {
    if (regexString) {
      try {
        this.stripRegex = new RegExp(regexString, 'g');
      } catch (error) {
        throw new Error(
          `w-input-text: Can't create a RegExp from "strip" attribute value "${regexString}"`,
        );
      }
    }
  }

  connectedCallback() {
    this.localValue = this.value;
    this.compileRegex(this.strip);
  }

  @Watch('strip')
  stripWatch(newValue: string) {
    if (!newValue) {
      this.stripRegex = null;
      this.localValue = this.value;
    } else {
      this.compileRegex(newValue);
    }

    this.handleValueChange(this.value, 'input');
  }

  render() {
    return (
      <Host class="block">
        <div class="block">
          <label class="block relative w-full">
            <input
              class={cx(
                'block w-full text-gray-800 text-lg border border-solid border-gray-800 h-12 pl-2 bg-transparent focus:border-blue rounded-md shadow-sm focus:outline-none',
                {
                  ['pr-32']: this.suffix,
                },
              )}
              placeholder={this.placeholder ? this.placeholder : this.label}
              required={this.required}
              autofocus={this.autofocus}
              type={this.type}
              autocomplete={this.autocomplete}
              inputmode={this.inputmode}
              value={this.localValue}
              onChange={ev => this.handleInputChange(ev, 'change')}
              onInput={ev => this.handleInputChange(ev, 'input')}
              ref={el => (this.inputEl = el as HTMLInputElement)}
            />
            <span class="absolute text-blue">{this.label}</span>
            {this.suffix && (
              <div class="absolute right-0.5 top-1/2 transform -translate-y-1/2 text-gray-800 text-base border-l border-gray-400 bg-gray-200 pl-1 pr-1 py-2 rounder-r-md z-0">
                {this.suffix}
              </div>
            )}
          </label>
        </div>
        {this.error && <div class="text-sm text-pink">{this.error}</div>}
      </Host>
    );
  }
}
