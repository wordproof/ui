import { Component, Prop, h } from '@stencil/core';
// import cx from 'classnames';

@Component({
  tag: 'w-certificate',
  styleUrl: 'w-certificate.css',
  shadow: false,
})
export class WCertificate {
  /**
   * hides icon
   */
  @Prop() noIcon: boolean = false;

  render() {
    return (
      <button type="button" class="flex items-center focus:outline-none">
        {!this.noIcon && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 59 59"
            class="w-6 h-6 mr-1"
          >
            <g fill-rule="nonzero" fill="none">
              <rect fill="#00E8C6" width="59" height="59" rx="2" />
              <path
                d="M49.58 15.785l-7.842 28.862a1 1 0 01-.965.738h-6.854L29.954 29.31h6.26l1.566 7.333 6.185-22.12h4.65a1 1 0 01.965 1.261z"
                fill="#FFF"
              />
              <path
                d="M26.713 14.523l-6.158 22.07-4.75-22.07h-5.452a1 1 0 00-.97 1.24l7.113 28.86a1 1 0 00.971.762h6.062a1 1 0 00.965-.738l7.84-28.862a1 1 0 00-.965-1.262h-4.656z"
                fill="#FFF"
                opacity=".8"
              />
            </g>
          </svg>
        )}
        <span class="text-teal hover:text-blue">
          <slot />
        </span>
      </button>
    );
  }
}
