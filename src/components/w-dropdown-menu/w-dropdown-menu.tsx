import { Component, Prop, h } from '@stencil/core';
// import cx from 'classnames';

export interface DropdownMenuOption {
  label: string;
  href?: string;
  action?: Function;
}

@Component({
  tag: 'w-dropdown-menu',
  styleUrl: 'w-dropdown-menu.css',
  shadow: true,
})
export class WDropdownMenu {
  /**
   * Array of menu items options
   */
  @Prop() options: DropdownMenuOption[];

  render() {
    return (
      <div>
        <slot name="trigger">
          <button class="p-1 hover:bg-light-blue rounded-full focus:outline-none focus:ring inline-flex items-center justify-center">
            <w-icon name="dots" class="text-black  hover:text-blue"></w-icon>
          </button>
        </slot>
      </div>
    );
  }
}
