import { Component, Prop, h } from '@stencil/core';
@Component({
  tag: 'w-icon',
  styleUrl: 'w-icon.css',
  shadow: true,
})
export class WIcon {
  /**
   * renders the icon with corresponding name
   */
  @Prop() name: string = '';

  /**
   * icon will try to fill all awailable space maintainig aspect ration
   */
  @Prop() fluid: boolean = false;

  render() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class={this.fluid ? 'w-full h-full' : this.name}
      >
        <use xlinkHref={`#${this.name}`} />
        <symbol id="comment" viewBox="0 0 28 23">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5.742 0h16.516C25.424 0 28 2.57 28 5.728v8.766c0 3.159-2.576 5.728-5.742 5.728H10.54L7.996 22.76a.822.822 0 01-1.16 0l-2.774-2.767A5.637 5.637 0 010 14.576V5.728C0 2.57 2.576 0 5.742 0zm16.516 18.586a4.101 4.101 0 004.101-4.092V5.728a4.101 4.101 0 00-4.101-4.091H5.742a4.101 4.101 0 00-4.101 4.091v8.847a4.004 4.004 0 003.045 3.892.82.82 0 01.382.215l2.348 2.342 2.204-2.199a.822.822 0 01.58-.24h12.058z"
            fill="currentColor"
          />
          <path
            d="M19.184 8H8.816C8.366 8 8 8.448 8 9s.365 1 .816 1h10.368c.45 0 .816-.448.816-1s-.366-1-.816-1zM19.184 11H8.816c-.45 0-.816.448-.816 1s.365 1 .816 1h10.368c.45 0 .816-.448.816-1s-.366-1-.816-1z"
            fill="currentColor"
          />
        </symbol>

        <symbol id="eye" viewBox="0 0 17 9">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8.357 0c3.51 0 6.727 2.249 8.246 4.175a.528.528 0 010 .65C15.15 6.668 11.947 9 8.357 9 4.89 9 1.667 6.798.112 4.825a.528.528 0 010-.65C1.618 2.264 4.834 0 8.357 0zm0 7.976c1.841 0 3.34-1.56 3.34-3.476 0-1.917-1.498-3.476-3.34-3.476-1.841 0-3.34 1.56-3.34 3.476 0 1.917 1.499 3.476 3.34 3.476zM1.156 4.5c.553-.599 1.887-1.89 3.76-2.72a4.636 4.636 0 000 5.44C3.49 6.59 2.168 5.597 1.155 4.5zm10.643-2.72a4.636 4.636 0 010 5.44c1.872-.83 3.206-2.121 3.76-2.72-1.013-1.098-2.336-2.09-3.76-2.72z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8.357 6.428A1.93 1.93 0 016.43 4.5 1.93 1.93 0 018.357 2.57 1.93 1.93 0 0110.286 4.5a1.93 1.93 0 01-1.929 1.928zm0-1.134a.795.795 0 000-1.588.795.795 0 000 1.588z"
            fill="currentColor"
          />
        </symbol>

        <symbol id="close" viewBox="0 0 16 16">
          <path
            d="M15.324 13.832L9.302 7.811l6.243-6.243L13.998.021 7.755 6.264 1.734.242.187 1.79 6.21 7.811.02 13.998l1.547 1.547 6.187-6.188 6.022 6.022z"
            fill="#2000FF"
            fill-rule="nonzero"
          />
        </symbol>

        <symbol id="somename" viewBox="0 0 28 23"></symbol>
      </svg>
    );
  }
}
