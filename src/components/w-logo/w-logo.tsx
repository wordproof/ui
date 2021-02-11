import { Component, Prop, h } from '@stencil/core';
import cx from 'classnames';

@Component({
  tag: 'w-logo',
  styleUrl: 'w-logo.css',
  shadow: true,
})
export class WLogo {
  /**
   * sets the logo colors to blue on white
   */
  @Prop() blueOnWhite: boolean = false;

  /**
   * sets the logo colors to blue on white
   */
  @Prop() whiteOnBlue: boolean = false;

  /**
   * sets the logo colors to blue on white
   */
  @Prop() tealOnWhite: boolean = false;

  colorClass: string = 'bg-teal text-white';

  componentWillLoad() {
    if (this.blueOnWhite) {
      this.colorClass = 'text-blue bg-white';
    }

    if (this.whiteOnBlue) {
      this.colorClass = 'bg-blue text-white';
    }

    if (this.tealOnWhite) {
      this.colorClass = 'text-teal bg-white';
    }
  }

  render() {
    return (
      <div
        class={cx(this.colorClass)}
        style={{ width: '59px', height: '59px', borderRadius: '2px' }}
      >
        <svg
          width="59"
          height="59"
          xmlns="http://www.w3.org/2000/svg"
          class="inline"
        >
          <g fill-rule="nonzero" fill="none">
            <path
              d="M49.58 15.785l-7.842 28.862a1 1 0 01-.965.738h-6.854L29.954 29.31h6.26l1.566 7.333 6.185-22.12h4.65a1 1 0 01.965 1.261z"
              fill="currentColor"
            />
            <path
              d="M26.713 14.523l-6.158 22.07-4.75-22.07h-5.452a1 1 0 00-.97 1.24l7.113 28.86a1 1 0 00.971.762h6.062a1 1 0 00.965-.738l7.84-28.862a1 1 0 00-.965-1.262h-4.656z"
              fill="currentColor"
              opacity=".8"
            />
          </g>
        </svg>
      </div>
    );
  }
}
