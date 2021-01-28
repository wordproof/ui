import { Component, Prop, h } from '@stencil/core';
import cx from 'classnames';

@Component({
  tag: 'w-button',
  styleUrl: 'w-button.css',
  shadow: false,
})
export class WButton {
  /**
   * button html "type" attribute
   */
  @Prop() type: string = 'button';

  /**
   * button text size
   */
  @Prop() size: 'xs' | 'sm' | 'base' | 'lg' | 'xl' = 'base';

  /**
   * renders button as underlined text
   */
  @Prop() text: boolean = false;

  /**
   * button html "disabled" attribute
   */
  @Prop() disabled: boolean = false;

  render() {
    return (
      <button
        type={this.type}
        disabled={this.disabled}
        class={cx(
          'font-sohne-bold inline-flex items-center active:bg-gray-900 outline-none focus:outline-none focus:shadow-outline-blue transition ease-in-out duration-150',
          {
            ['px-5 py-2 bg-gradient-to-r from-blue to-purple border border-transparent focus:border-blue  rounded-full text-white hover:bg-gray-700']: !this
              .text,
            ['text-gray-600 hover:text-gray-800 underline']: this.text,
            ['text-xs']: this.size === 'xs',
            ['text-sm']: this.size === 'sm',
            ['text-base']: this.size === 'base',
            ['text-lg']: this.size === 'lg',
            ['text-xl']: this.size === 'xl',
          },
        )}
      >
        <slot></slot>
      </button>
    );
  }
}
