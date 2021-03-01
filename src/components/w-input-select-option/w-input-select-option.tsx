import {
  Component,
  EventEmitter,
  h,
  Prop,
  Event,
  Element,
} from '@stencil/core';
import cx from 'classnames';

@Component({
  tag: 'w-input-select-option',
  styleUrl: 'w-input-select-option.css',
  shadow: true,
})
export class WInputSelectOption {
  @Element() hostElement: HTMLElement;

  /**
   * form element error message
   */
  @Prop() value: string | number = '';

  /**
   * form element error message
   */
  @Prop() label: string = '';

  /**
   * disabled
   */
  @Prop() disabled: boolean = false;

  @Event() choose: EventEmitter<HTMLElement>;

  handleClick(ev: MouseEvent) {
    ev.preventDefault();
    this.choose.emit(this.hostElement);
  }

  componentWillLoad() {
    this.hostElement.setAttribute('value', String(this.value));
    this.hostElement.setAttribute('label', this.label);
  }

  render() {
    return (
      <li
        role="option"
        class={cx(
          'cursor-pointer select-none relative py-2 px-3 transition duration-300 ease-in-out hover:bg-gray-200 font-sohne',
          {
            ['text-gray-900']: !this.disabled,
            ['text-gray-500']: this.disabled,
          },
        )}
        onClick={ev => {
          this.handleClick(ev);
        }}
        part="option"
      >
        <slot>{this.label}</slot>
      </li>
    );
  }
}
