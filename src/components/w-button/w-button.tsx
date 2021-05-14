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

  /**
   * opens an url on click (make button work as a link)
   */
  @Prop() href: string = '';

  /**
   * name of the browsing context, defaults to '_blank' (specify '_self' to open url in the same tab)
   */
  @Prop() target: string = '';

  componentWillRender() {
    this.color = this.color ? this.color : 'blue';
    this.size = this.size ? this.size : 'lg';
    this.type = this.type ? this.type : 'button';
    this.target = this.target ? this.target : '_blank';
  }

  handleClick() {
    if (this.href) {
      window.open(this.href, this.target);
    }
  }

  render() {
    if (this.icon) {
      return (
        <IconButton
          onClick={this.handleClick.bind(this)}
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
          onClick={this.handleClick.bind(this)}
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
          onClick={this.handleClick.bind(this)}
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
        onClick={this.handleClick.bind(this)}
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
