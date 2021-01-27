import { Component, Prop, h } from '@stencil/core';
// import cx from 'classnames';

@Component({
  tag: 'w-button',
  styleUrl: 'w-button.css',
  shadow: false,
})
export class WButton {
  /**
   * html button type
   */
  @Prop() type: string = 'button';

  /**
   * render button as text
   */
  @Prop() text: boolean;

  /**
   * disabled
   */
  @Prop() disabled: boolean;

  render() {
    return (
      <button
        type={this.type}
        class="inline-flex items-center px-5 py-2 bg-gradient-to-r from-blue to-purple border border-transparent rounded-full text-white hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-blue focus:shadow-outline-blue transition ease-in-out duration-150">
        <slot></slot>
      </button>
    );
  }
}
