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
   * icon will try to fit into the available space maintainig aspect ratio
   */
  @Prop() fit: boolean = false;

  render() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class={this.fit ? 'w-full h-full' : this.name}
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
            fill="currentColor"
            fill-rule="nonzero"
          />
        </symbol>

        <symbol id="close-circle" viewBox="0 0 30 29">
          <g transform="translate(-8 -8)" fill="none" fill-rule="evenodd">
            <path
              d="M24.111 22.489l5.087-4.985a.785.785 0 0 0 0-1.09.825.825 0 0 0-1.11 0L23 21.4l-5.087-4.985a.825.825 0 0 0-1.111 0 .785.785 0 0 0 0 1.089l5.087 4.985-5.087 4.985c-.293.287-.351.803 0 1.09.292.286.818.343 1.11 0L23 23.577l5.087 4.985c.293.287.819.344 1.111 0 .293-.286.351-.802 0-1.089l-5.087-4.985z"
              fill="currentColor"
              fill-rule="nonzero"
            ></path>
            <ellipse
              stroke="currentColor"
              stroke-width="2"
              cx="23"
              cy="22.5"
              rx="13.72"
              ry="13.4"
            ></ellipse>
          </g>
        </symbol>

        <symbol id="check-circle" viewBox="0 0 23 24">
          <g transform="translate(0 .785)" fill="none" fill-rule="evenodd">
            <circle fill="currentColor" cx="11.5" cy="11.5" r="11.5" />
            <path stroke="#FFF" stroke-width="3" d="M4 12.75L9.134 18 18 6" />
          </g>
        </symbol>

        <symbol id="clock" viewBox="0 0 34 35">
          <path
            fill="currentColor"
            d="M17 0C7.625 0 0 7.716 0 17.203c0 9.487 7.625 17.204 17 17.204s17-7.717 17-17.204C34 7.716 26.375 0 17 0zm0 2.373c8.108 0 14.655 6.626 14.655 14.83 0 8.205-6.547 14.83-14.655 14.83S2.345 25.409 2.345 17.204C2.345 9 8.892 2.373 17 2.373zm0 3.56a1.18 1.18 0 00-1.172 1.186v10.084c0 .328.135.62.348.835l6.21 6.303a1.174 1.174 0 001.667 0 1.208 1.208 0 000-1.687l-5.88-5.933V7.12A1.18 1.18 0 0017 5.932z"
          />
        </symbol>

        <symbol id="ink-pen" viewBox="0 0 32 32">
          <path
            fill="currentColor"
            d="M31.738 9.3c-.4-.4-1-.4-1.4 0l-2.3 2.3-7.6-7.6 2.3-2.3c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0l-3 3c-.4.4-.4 1 0 1.4l.2.2c-2.9 1.9-9.2 2.9-11.6 3.1-.4 0-.8.3-.9.7l-6 22c-.1.4 0 .8.3 1 .2.2.6.4 1 .3l22-6c.4-.1.7-.5.7-.9.2-2.4 1.2-8.7 3.1-11.6l.2.2c.4.4 1 .4 1.4 0l3-3c.4-.4.4-1 0-1.4zm-9.6 14.9L4.438 29l6.5-6.5c.5.3 1.1.4 1.7.4.9 0 1.8-.3 2.5-1 1.4-1.4 1.4-3.6 0-4.9-1.4-1.4-3.6-1.4-4.9 0-1.1 1.1-1.3 2.8-.6 4.1l-6.6 6.5 4.8-17.7c2.3-.3 8.9-1.2 12.1-3.6l5.7 5.7c-2.3 3.3-3.2 9.9-3.5 12.2zm-10.7-3.6c-.6-.6-.6-1.5 0-2.1.3-.3.7-.4 1.1-.4.4 0 .8.1 1.1.4.6.6.6 1.5 0 2.1-.6.5-1.6.5-2.2 0z"
          />
        </symbol>

        <symbol id="times-circle" viewBox="0 0 23 23">
          <g fill="none" fill-rule="evenodd">
            <circle cx="11.5" cy="11.5" r="11.5" fill="#currentColor" />
            <path
              d="M6.5 6.75l10 10M6.75 17L16.5 6.75"
              stroke="#FFF"
              stroke-width="3"
              stroke-linecap="square"
            />
          </g>
        </symbol>

        <symbol id="somename" viewBox="0 0 28 23"></symbol>
      </svg>
    );
  }
}

