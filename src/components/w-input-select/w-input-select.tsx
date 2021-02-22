import { Component, h, Listen, Prop, State, Element } from '@stencil/core';
import cx from 'classnames';
import { WInputSelectOption } from '../w-input-select-option/w-input-select-option';

@Component({
  tag: 'w-input-select',
  styleUrl: 'w-input-select.css',
  shadow: false,
})
export class WInputSelect {
  @Element() hostElement: HTMLElement;

  /**
   * form element error message
   */
  @Prop() error: string = '';

  /**
   * placeholder
   */
  @Prop() placeholder: string = '';

  /**
   * value
   */
  @Prop({ mutable: true })
  value: string | number = '';

  @State() displayVallue: string = '';

  @State() open: boolean = false;

  @Listen('choose')
  selectHandler(event: CustomEvent<WInputSelectOption>) {
    const { value: data, label } = event.detail;
    this.open = false;
    this.displayVallue = label;
    const emittedEvent = new InputEvent('input', { data: String(data) });
    this.hostElement.dispatchEvent(emittedEvent);
  }

  options: WInputSelectOption[];

  componentWillLoad() {
    this.options = (Array.from(this.hostElement.childNodes).filter(
      node => node.nodeType === Node.ELEMENT_NODE,
    ) as unknown) as WInputSelectOption[];

    const selected = this.options.find(option => option.value == this.value);

    if (selected) {
      this.displayVallue = selected.label;
    }
  }

  render() {
    return (
      <div>
        <span class="text-sm text-pink" v-if="error">
          {this.error}
        </span>

        <div class="mt-2 relative">
          <button
            type="button"
            aria-haspopup="listbox"
            aria-expanded="true"
            aria-labelledby="listbox-label"
            class="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 h-12 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 cursor-pointer"
            onClick={() => {
              this.open = !this.open;
            }}
          >
            <span class="flex items-center">
              <span class="ml-3 block text-gray-800 truncate">
                {this.displayVallue ? this.displayVallue : this.placeholder}
              </span>
            </span>
            <span class="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <w-icon name="arrow-down" class="text-blue"></w-icon>
            </span>
          </button>
          <transition name="fade">
            <div
              class={cx(
                'absolute mt-1 w-full rounded-md bg-white shadow-lg z-10',
                {
                  invisible: !this.open,
                },
              )}
            >
              <ul
                tabindex="-1"
                role="listbox"
                aria-labelledby="listbox-label"
                class="max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none"
              >
                <slot />
              </ul>
            </div>
          </transition>
        </div>
      </div>
    );
  }
}
