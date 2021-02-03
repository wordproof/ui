import { Component, Prop, h, Host } from '@stencil/core';
// import cx from 'classnames';

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

  // @Event() change: EventEmitter<string>;

  // @Event() input: EventEmitter<string>;

  // handleChange(ev) {
  //   this.value = ev.target ? ev.target.value : null;
  //   this.change.emit(this.value);
  // }

  // handleInput(ev) {
  //   this.value = ev.target ? ev.target.value : null;
  //   this.input.emit(this.value);
  // }
  // onChange={(ev) => this.handleChange(ev)}
  // onInput={(ev) => this.handleInput(ev)}

  render() {
    return (
      <Host>
        <label class="block relative w-full">
          <input
            class="block w-full text-gray-800 border border-solid border-gray-800 h-12 pl-2 bg-transparent focus:border-blue rounded-md shadow-sm"
            placeholder={this.label}
            required={this.required}
            autofocus={this.autofocus}
            type={this.type}
            autocomplete={this.autocomplete}
            inputmode={this.inputmode}
            value={this.value}
          />
          <span class="absolute text-blue">{this.label}</span>
        </label>
        <div class="text-sm text-pink" v-if="error">
          {this.error}
        </div>
      </Host>
    );
  }
}
