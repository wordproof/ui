import { Component, Prop, h } from '@stencil/core';
import cx from 'classnames';
import { IconName } from '../w-icon/types';

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
  @Prop() size: 'xs' | 'sm' | 'base' | 'lg' | 'xl' = 'lg';

  /**
   * renders button as underlined text
   */
  @Prop() text: boolean = false;

  /**
   * renders button as underlined text
   */
  @Prop() outline: boolean = false;

  /**
   * button html "disabled" attribute
   */
  @Prop() disabled: boolean = false;

  /**
   * button html "type" attribute
   */
  @Prop() icon: IconName;

  getIconSizeClasses() {
    if (this.size === 'xs') {
      return 'w-3 h-3';
    }

    if (this.size === 'lg') {
      return 'w-5 h-5';
    }

    if (this.size === 'xl') {
      return 'w-6 h-6';
    }

    return 'w-4 h-4';
  }

  render() {
    return (
      <button
        type={this.type}
        disabled={this.disabled}
        class={cx(
          'block items-center active:bg-gray-900 outline-none focus:outline-none focus:shadow-outline-blue transition ease-in-out duration-150',
          {
            ['px-5 py-2 font-sohne-bold focus:ring-blue focus:ring-2 focus:ring-opacity-50 rounded-full']:
              !this.text && !this.icon,
            ['bg-gradient-to-r from-blue to-purple text-white']:
              !this.outline && !this.text && !this.icon,
            ['bg-white border-2 border-blue text-blue']: this.outline,
            ['text-gray-600 hover:text-gray-800 underline font-sohne']: this
              .text,
            ['text-xs']: this.size === 'xs',
            ['text-base']: this.size === 'base',
            ['text-lg']: this.size === 'lg',
            ['text-xl']: this.size === 'xl',
            [cx(
              'hover:bg-gray-200 rounded-full',
              this.size === 'xs' ? 'p-1.5' : 'p-2',
            )]: this.icon,
          },
        )}
      >
        {this.icon ? (
          <w-icon
            fit
            name={this.icon}
            class={cx(this.getIconSizeClasses())}
          ></w-icon>
        ) : (
          <slot></slot>
        )}
        <slot></slot>
      </button>
    );
  }
}
