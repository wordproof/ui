import { Component, Prop, h } from '@stencil/core';
import cx from 'classnames';

@Component({
  tag: 'w-badge',
  styleUrl: 'w-badge.css',
  shadow: true,
})
export class WBadge {
  /**
   * color variant
   */
  @Prop() color: string = 'yellow';

  /**
   * size
   */
  @Prop() size: string = 'base';

  render() {
    return (
      <span
        class={cx('rounded-full', {
          ['bg-gradient-to-r from-yellow via-yellow to-pink text-white']:
            this.color === 'yellow',
          ['text-xs px-3 py-1']: this.size === 'xs',
          ['text-sm px-3 py-1']: this.size === 'sm',
          ['text-base px-3 py-1']: this.size === 'base',
          ['text-lg px-4 py-1']: this.size === 'lg',
          ['text-xl px-5 py-1']: this.size === 'xl',
        })}
      >
        <slot />
      </span>
    );
  }
}
