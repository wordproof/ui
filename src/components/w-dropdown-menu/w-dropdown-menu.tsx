import { Component, Prop, h, State, Listen } from '@stencil/core';
import cx from 'classnames';

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

  @State() show: boolean = false;

  triggerButtonElement: HTMLButtonElement;

  @Listen('keydown')
  handleKeyDown(ev: KeyboardEvent) {
    if (ev.key === 'Escape') {
      ev.stopPropagation();
      this.close();
    }
  }

  close() {
    this.show = false;
    this.triggerButtonElement.blur();
  }

  render() {
    return (
      <div class="">
        <button
          class="rounded-full focus:outline-none focus:ring"
          ref={el => (this.triggerButtonElement = el as HTMLButtonElement)}
          onClick={() => (this.show = true)}
        >
          <slot name="trigger">
            <w-icon
              name="dots"
              class="text-black  hover:text-blue p-1 hover:bg-light-blue rounded-full inline-flex items-center justify-center"
            ></w-icon>
          </slot>
        </button>
        <div
          class={cx({
            hidden: !this.show,
          })}
        >
          <div
            class="fixed w-screen h-screen top-0 left-0 bg-transparent z-20"
            onClick={() => this.close()}
          ></div>
          <ul class="absolute right-10 mt-1 bg-white border-light-blue divide-y rounded shadow-md z-30">
            {this.options.map(option => (
              <li
                class="pl-6 pr-12 pt-5 pb-6 whitespace-nowrap select-none hover:bg-gray-200 cursor-pointer"
                onClick={() => {
                  this.close();
                  if (option.action) {
                    option.action();
                  }
                }}
              >
                {option.href ? (
                  <a href={option.href} target="blank">
                    {option.label}
                  </a>
                ) : (
                  <span>{option.label}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
