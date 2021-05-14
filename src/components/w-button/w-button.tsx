import { Component, Prop, h } from '@stencil/core';
import { IconName } from '../w-icon/types';
import { WButtonColor, WButtonSize } from './types';
import IconButton from './variants/IconButton';
import OutlineButton from './variants/OutlineButton';
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
    if (this.icon) {
      return (
        <IconButton
          onClick={() => {}}
          color={this.color}
          size={this.size}
          disabled={this.disabled}
          type={this.type}
          icon={this.icon}
          loading={this.loading}
        >
        </IconButton>
      );
    }

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

    if (this.outline) {
      return (
        <OutlineButton
          onClick={() => {}}
          color={this.color}
          size={this.size}
          disabled={this.disabled}
          type={this.type}
          loading={this.loading}
        >
          <slot></slot>
        </OutlineButton>
      );
    }

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
}
