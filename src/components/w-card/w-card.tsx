import { Component, Prop, h, Element } from '@stencil/core';
import cx from 'classnames';

@Component({
  tag: 'w-card',
  styleUrl: 'w-card.css',
  shadow: true,
})
export class WCard {
  @Element() hostElement: HTMLElement;

  /**
   * widt of the card
   */
  @Prop() size: 'base' | 'lg' = 'base';

  render() {
    return (
      <div
        class={cx('p-10 shadow rounded bg-white', {
          ['w-96']: this.size === 'base',
          ['w-128']: this.size === 'lg',
        })}
      >
        <slot />
      </div>
    );
  }
}
