import { Component, Prop, h } from '@stencil/core';
import { IconName } from '../w-icon/types';
import { WButtonColor, WButtonSize } from './types';
import SolidButton from './variants/SolidButton';
import TextButton from './variants/TextButton';

@Component({
  tag: 'w-button',
  styleUrl: 'w-button.css',
  shadow: true,
})
export class WButton {
  /**
   * button html "type" attribute
   */
  @Prop() type: string = 'button';

  /**
   * button text size
   */
  @Prop() size: WButtonSize = 'lg';

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
   * underline decoration for text button
   */
  @Prop() underlineNone: boolean = false;

  /**
   * button html "type" attribute
   */
  @Prop() icon: IconName;

  /**
   * button text size
   */
  @Prop() color: WButtonColor;

  /**
   * show spinner
   */
  @Prop() loading: boolean;

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
    if (this.text) {
      return (
        <TextButton
          onClick={() => {}}
          color={this.color}
          size={this.size}
          disabled={this.disabled}
          type={this.type}
          underlineNone={this.underlineNone}
        >
          <slot></slot>
        </TextButton>
      );
    }

    if (!this.text) {
      return (
        <SolidButton
          onClick={() => {}}
          color={this.color}
          size={this.size}
          disabled={this.disabled}
          type={this.type}
          loading={this.loading}
        >
          <slot></slot>
        </SolidButton>
      );
    }

    // if (!this.text) {
    //   return (
    //     <button
    //       type={this.type}
    //       disabled={this.disabled}
    //       class={cx(
    //         'select-none items-center active:bg-gray-900 outline-none focus:outline-none focus:shadow-outline-blue transition ease-in-out duration-150',
    //         {
    //           ['px-5 py-2 font-sohne-bold focus:ring-blue focus:ring-2 focus:ring-opacity-50 rounded-full']:
    //             !this.text && !this.icon,
    //           ['bg-gradient-to-r from-blue to-purple text-white']:
    //             !this.outline &&
    //             !this.text &&
    //             !this.icon &&
    //             this.color !== 'yellow',
    //           ['bg-gradient-to-r from-yellow to-pink text-white']:
    //             !this.outline &&
    //             !this.text &&
    //             !this.icon &&
    //             this.color === 'yellow',
    //           ['bg-white border-2 border-blue text-blue']: this.outline,
    //           ['font-sohne']: this.text,
    //           ['underline font-sohne']: this.text && !this.underlineNone,
    //           ['text-gray-600 hover:text-gray-800']:
    //             this.text && (this.color === 'gray' || this.disabled),
    //           ['text-white']: this.text && this.color === 'white',
    //           ['text-xs']: this.size === 'xs',
    //           ['text-base']: this.size === 'base',
    //           ['text-sm']: this.size === 'sm',
    //           ['text-lg']: this.size === 'lg',
    //           ['text-xl']: this.size === 'xl',
    //           [cx(
    //             'hover:bg-gray-200 rounded-full',
    //             this.size === 'xs' ? 'p-1.5' : 'p-2',
    //           )]: this.icon,
    //           ['cursor-default']: this.disabled,
    //         },
    //       )}
    //     >
    //       {this.icon ? (
    //         <w-icon
    //           fit
    //           name={this.icon}
    //           class={cx(this.getIconSizeClasses())}
    //         ></w-icon>
    //       ) : (
    //         <slot></slot>
    //       )}
    //       <slot></slot>
    //     </button>
    //   );
    // }
  }
}
