import {
  Component,
  Prop,
  h,
  Host,
  EventEmitter,
  Event,
  State,
} from '@stencil/core';
import cx from 'classnames';

@Component({
  tag: 'w-input-text',
  styleUrl: 'w-input-text.css',
  shadow: true,
})
export class WInputText {
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

  @Event() change: EventEmitter<string>;

  @Event() input: EventEmitter<string>;

  handleChange(ev: Event) {
    if (this.handleValueChange(ev)) {
      this.change.emit(this.value);
    }
  }

  handleInput(ev: Event) {
    if (this.handleValueChange(ev)) {
      this.input.emit(this.value);
    }
  }

  @State() localValue: string = '';

  handleValueChange(ev: Event): boolean {
    if (ev.target) {
      const { value } = ev.target as HTMLInputElement;
      this.localValue =
        this.stripRegex !== null ? value.replace(this.stripRegex, '') : value;
      this.inputEl.value = this.localValue;
      this.value =
        this.localValue.trim() === '' ? '' : `${this.localValue}${this.suffix}`;
      return true;
    }

    return false;
  }

  stripRegex: RegExp | null = null;

  inputEl: HTMLInputElement;

  connectedCallback() {
    this.localValue = this.value;

    if (this.strip) {
      try {
        this.stripRegex = new RegExp(this.strip, 'g');
      } catch (error) {
        throw new Error(
          `w-input-text: Can't create a RegExp from "strip" attribute value "${this.strip}"`,
        );
      }
    }
  }

  render() {
    return (
      <Host>
        <div>
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
              onChange={ev => this.handleChange(ev)}
              onInput={ev => this.handleInput(ev)}
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
