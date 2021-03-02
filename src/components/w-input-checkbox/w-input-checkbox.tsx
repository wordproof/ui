import { Component, h, Prop, Element } from '@stencil/core';
import cx from 'classnames';

@Component({
  tag: 'w-input-checkbox',
  styleUrl: 'w-input-checkbox.css',
  shadow: true,
})
export class WInputCheckbox {
  @Element() hostElement: HTMLElement;

  /**
   * form element checked property
   */
  @Prop({ mutable: true }) checked: boolean = false;

  /**
   * form error message
   */
  @Prop() error: string = '';

  /**
   * disabled
   */
  @Prop() disabled: boolean = false;

  handleClick(ev: MouseEvent) {
    ev.preventDefault();
    if (this.disabled) {
      return;
    }

    this.checked = !this.checked;
    const emittedEvent = new InputEvent('change', {
      data: String(this.checked),
    });
    this.hostElement.dispatchEvent(emittedEvent);
  }

  componentWillLoad() {
    this.hostElement.setAttribute('checked', String(this.checked));
  }

  render() {
    return (
      <label class="relative block cursor-pointer font-sohne">
        <div class="ml-7 sm:ml-10" onClick={this.handleClick.bind(this)}>
          <slot />
        </div>
        <input type="checkbox" class="opacity-0 absolute top-0 left-0" />
        <div
          class={cx('absolute top-0 left-0 w-5 h-5 border rounded-sm', {
            ['text-blue border-blue']: !this.disabled,
            ['text-gray-600 border-gray-600 bg-gray-400']: this.disabled,
          })}
          onClick={this.handleClick.bind(this)}
        >
          <div class="relative">
            <svg
              width="15"
              height="20"
              viewBox="0 0 15 20"
              fill="current"
              xmlns="http://www.w3.org/2000/svg"
              class={cx('absolute tick', {
                ['opacity-0']: !this.checked,
              })}
            >
              <path
                d="M12.1745 0C13.5541 0 14.5194 1.36373 14.0608 2.66482L8.42156 18.6648C8.13958 19.4649 7.38357 20 6.53529 20H3.72812L0 11.4263H3.20178L5.87844 17.0922L12.0243 0H12.1745Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>
        {this.error ? (
          <div class="ml-7 sm:ml-10 text-sm text-pink">{this.error}</div>
        ) : null}
      </label>
    );
  }
}
