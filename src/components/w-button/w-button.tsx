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
  @Prop({ mutable: true }) type: string;

  /**
   * button text size
   */
  @Prop({ mutable: true }) size: WButtonSize;

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
   * button color
   */
  @Prop({ mutable: true }) color: WButtonColor;

  /**
   * show spinner
   */
  @Prop() loading: boolean = false;

  componentWillRender() {
    this.color = this.color ? this.color : 'blue';
    this.size = this.size ? this.size : 'lg';
    this.type = this.type ? this.type : 'button';
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
        ></IconButton>
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
