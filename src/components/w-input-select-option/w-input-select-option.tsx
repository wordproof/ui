import {
  Component,
  EventEmitter,
  h,
  Prop,
  Event,
  Element,
} from '@stencil/core';

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
  @Prop() value: string = '';

  /**
   * form element error message
   */
  @Prop() label: string = '';

  @Event() choose: EventEmitter<HTMLElement>;

  handleClick(ev: MouseEvent) {
    ev.preventDefault();
    this.choose.emit(this.hostElement);
  }

  render() {
    return (
      <li
        role="option"
        class="text-gray-900 cursor-pointer select-none relative py-2 px-3 transition duration-300 ease-in-out hover:bg-gray-200 font-sohne"
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
