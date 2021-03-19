import { Component, Prop, h } from '@stencil/core';
import { IconName } from './types';

@Component({
  tag: 'w-icon',
  styleUrl: 'w-icon.css',
  shadow: true,
})
export class WIcon {
  /**
   * renders the icon with corresponding name
   */
  @Prop() name: IconName;

  /**
   * icon will try to fit into the available space maintainig aspect ratio
   */
  @Prop() fit: boolean = false;

  render() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class={this.fit ? 'size-inherit' : this.name}
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
            <circle cx="11.5" cy="11.5" r="11.5" fill="currentColor"></circle>
            <path
              d="M6.5 6.75l10 10M6.75 17L16.5 6.75"
              stroke="#FFF"
              stroke-width="3"
              stroke-linecap="square"
            />
          </g>
        </symbol>

        <symbol id="arrow-down" viewBox="0 0 13 6">
          <path
            d="M1 1l5.403 3.443L11.55 1"
            stroke="currentColor"
            stroke-width="2"
            fill="none"
            fill-rule="evenodd"
            stroke-linecap="round"
          />
        </symbol>

        <symbol id="question-circle" viewBox="0 0 34 34">
          <path
            d="M17 .135C7.625.135 0 7.676 0 16.95c0 9.272 7.625 16.813 17 16.813s17-7.541 17-16.813C34 7.676 26.375.135 17 .135zm0 2.242c8.15 0 14.733 6.51 14.733 14.572 0 8.06-6.583 14.57-14.733 14.57S2.267 25.01 2.267 16.95C2.267 8.888 8.85 2.377 17 2.377zm0 5.23c-3.116 0-5.667 2.523-5.667 5.605-.005.404.21.78.562.984.353.204.79.204 1.143 0s.568-.58.562-.984c0-1.87 1.509-3.362 3.4-3.362s3.4 1.492 3.4 3.362c0 1.163-.474 1.957-1.251 2.767-.778.81-1.856 1.543-2.857 2.336a1.116 1.116 0 00-.425.875v1.495c-.006.404.209.78.562.984.353.204.79.204 1.142 0 .353-.204.568-.58.562-.984v-.946c.826-.623 1.796-1.309 2.668-2.218 1.018-1.06 1.866-2.49 1.866-4.309 0-3.082-2.55-5.604-5.667-5.604zM17 23.3c-.835 0-1.511.67-1.511 1.495 0 .825.676 1.494 1.511 1.494.835 0 1.511-.669 1.511-1.494 0-.826-.676-1.495-1.511-1.495z"
            fill="currentColor"
          />
        </symbol>

        <symbol id="eye-large" viewBox="0 0 34 19">
          <path
            d="M33.453 10.165L34 9.503l-.586-.7C28.255 2.84 22.706-.142 16.844.005 7.347.226.82 8.51.547 8.877L0 9.539l.586.663C5.628 16.055 11.1 19 16.805 19h.39c9.458-.22 15.984-8.503 16.258-8.835zm-16.375 6.663c-4.846.11-9.614-2.356-14.108-7.325 1.68-1.878 7.074-7.142 13.952-7.29 4.885-.11 9.614 2.357 14.108 7.326-1.68 1.841-7.074 7.142-13.952 7.29zM17 4.128c-3.126 0-5.706 2.393-5.706 5.375 0 2.981 2.58 5.374 5.706 5.374 3.126 0 5.706-2.393 5.706-5.374 0-2.982-2.54-5.375-5.706-5.375zm0 8.577c-1.876 0-3.4-1.435-3.4-3.202S15.124 6.3 17 6.3s3.4 1.436 3.4 3.203-1.524 3.202-3.4 3.202z"
            fill="currentColor"
          />
        </symbol>

        <symbol id="blockchain" viewBox="0 0 33 34">
          <g fill="currentColor">
            <path d="M18.942.243l-7.98 8.222 2.92 11.231 3.921 1.072-.413-1.578-2.387-.649-2.306-8.865 8.606 2.375 2.306 8.867-1.301-.37.414 1.577 2.062.581 7.98-8.222-2.921-11.232L18.942.243zm-5.89 8.067l6.3-6.49 8.606 2.375-6.3 6.49-8.606-2.375zm18.182 5.752l-6.3 6.49-2.306-8.867 6.3-6.49 2.306 8.867z" />
            <path d="M19.117 14.303L15.174 13.2l.414 1.578 2.409.68 2.306 8.866-8.606-2.375-2.305-8.866 1.29.347-.414-1.578-2.052-.557-7.98 8.221 2.92 11.232 10.902 3.01 7.98-8.223-2.92-11.232zm-17.35 5.635l6.3-6.49 2.305 8.866-6.3 6.49-2.306-8.866zm11.88 12.243l-8.605-2.376 6.3-6.491 8.606 2.376-6.3 6.491z" />
          </g>
        </symbol>

        <symbol id="accessibility" viewBox="0 0 29.107 29.107">
          <path
            fill="currentColor"
            d="M29.105 14.552c0-.03-.004-.06-.004-.092C29.054 6.481 22.584.027 14.6.002L14.556 0h-.002C6.547 0 .051 6.47.005 14.468c0 .027-.004.053-.004.084v.002c0 8.037 6.517 14.553 14.553 14.553h.002c.014 0 .029-.003.044-.003 8.016-.025 14.507-6.529 14.507-14.55l-.002-.002zM14.556 2.079c6.877 0 12.473 5.596 12.473 12.473 0 6.876-5.596 12.476-12.473 12.476V2.079z"
          />
        </symbol>

        <symbol id="hamburger" viewBox="0 0 24 24">
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </symbol>

        <symbol id="hamburger-close" viewBox="0 0 24 24">
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </symbol>

        <symbol id="arrow-right" viewBox="0 0 17 12">
          <path
            d="M10.046 1.88l3.132 3.262H.333v1.716h12.845l-3.132 3.262 1.166 1.213L16.333 6 11.212.667 10.047 1.88z"
            fill="currentColor"
          />
        </symbol>

        <symbol id="dots" viewBox="0 0 5 25">
          <g fill="currentColor">
            <circle cx="2.5" cy="2.5" r="2.5" />
            <circle cx="2.5" cy="12.5" r="2.5" />
            <circle cx="2.5" cy="22.5" r="2.5" />
          </g>
        </symbol>

        <symbol id="check-ring" viewBox="0 0 44 48">
          <path
            d="M22 4.5C10.144 4.5.5 14.144.5 26S10.144 47.5 22 47.5 43.5 37.856 43.5 26c0-5.922-2.407-11.292-6.293-15.184l-1.086 3.233A18.423 18.423 0 0140.5 26c0 10.235-8.265 18.5-18.5 18.5S3.5 36.235 3.5 26 11.765 7.5 22 7.5c1.732 0 3.4.255 4.988.697L28.04 5.37A21.43 21.43 0 0022 4.5z"
            fill="currentColor"
            fill-rule="evenodd"
          />
          <path
            d="M38.04 2.675l-12.193 34A2 2 0 0123.964 38h-6.756L10 21.71h6.19l5.175 10.765L33.247 0h2.911a2 2 0 011.883 2.675z"
            fill="currentColor"
          />
        </symbol>

        <symbol id="check" viewBox="0 0 13 18">
          <path
            d="M10.8219 0C12.1295 0 13.0444 1.2926 12.6098 2.52583L7.62646 16.6648C7.34448 17.4649 6.58848 18 5.74019 18H3.35531L0 10.2837H2.8816L5.2906 15.383L10.8219 0Z"
            fill="currentColor"
          />
        </symbol>

        <symbol id="api" viewBox="0 0 50 50">
          <path
            d="M3 0C1.338 0 0 1.338 0 3v44c0 1.662 1.338 3 3 3h44c1.662 0 3-1.338 3-3V3c0-1.662-1.338-3-3-3H3zm11.93 17.076h2.785l5.224 14.934h-2.476L19.27 28.6h-5.955l-1.171 3.41h-2.44l5.225-14.934zm9.508 0h5.513c1.575 0 2.804.417 3.688 1.207.864.79 1.306 1.913 1.306 3.37 0 1.455-.442 2.6-1.326 3.39-.883.79-2.093 1.186-3.668 1.186h-3.055v5.78h-2.459V17.077zm12.138 0h2.457V32.01h-2.457V17.076zm-9.68 2.287v4.576h2.92c.865 0 1.537-.186 1.998-.582.461-.395.711-.956.711-1.705 0-.748-.23-1.31-.691-1.705-.461-.374-1.134-.584-2.018-.584h-2.92zm-10.62.666l-2.153 6.24h4.342l-2.19-6.24z"
            fill="currentColor"
          />
        </symbol>

        <symbol id="wordpress" viewBox="0 0 50 50">
          <path
            d="M3 0C1.338 0 0 1.338 0 3v44c0 1.662 1.338 3 3 3h44c1.662 0 3-1.338 3-3V3c0-1.662-1.338-3-3-3H3zm22 8c9.371 0 17 7.622 17 17 0 9.371-7.629 17-17 17S8 34.371 8 25c0-9.377 7.629-17 17-17zm0 1.715c-5.34 0-10.036 2.74-12.771 6.889.362.012.7.019.988.019 1.596 0 4.07-.191 4.07-.191.823-.047.92 1.165.098 1.261 0 0-.829.097-1.748.145L21.2 34.39l3.344-10.028-2.379-6.525c-.823-.047-1.604-.145-1.604-.145-.821-.048-.725-1.31.096-1.261 0 0 2.524.191 4.026.191 1.596 0 4.07-.191 4.07-.191.823-.047.919 1.165.096 1.261 0 0-.828.097-1.746.145l5.533 16.424 1.521-5.092c.666-2.12 1.166-3.634 1.166-4.943 0-1.893-.68-3.203-1.261-4.217-.775-1.262-1.502-2.323-1.502-3.584 0-1.406 1.062-2.715 2.564-2.715.068 0 .13.005.2.012A15.264 15.264 0 0025 9.715zm13.416 7.951c.068.486.102 1.007.102 1.568 0 1.557-.297 3.297-1.166 5.477l-4.668 13.498.002.002c4.544-2.646 7.601-7.568 7.601-13.209 0-2.66-.678-5.156-1.871-7.336zm-27.379 1.115a15.156 15.156 0 00-1.322 6.217c0 6.048 3.514 11.277 8.615 13.758L11.037 18.78zm14.23 7.555L20.683 39.66a15.3 15.3 0 009.39-.238 2.301 2.301 0 01-.107-.213l-4.697-12.873z"
            fill="currentColor"
          />
        </symbol>

        <symbol id="shopify" viewBox="0 0 50 50">
          <path
            d="M29.727 41.97l10.222-2.211S36.26 14.807 36.231 14.64a.313.313 0 00-.3-.272c-.137 0-2.732-.192-2.732-.192s-1.806-1.805-2.039-2a.543.543 0 00-.171-.104L29.694 41.97zm-5.139-17.955s-1.147-.6-2.513-.6c-2.05 0-2.13 1.283-2.13 1.616 0 1.745 4.59 2.43 4.59 6.558 0 3.251-2.04 5.327-4.826 5.327-3.334 0-5.015-2.076-5.015-2.076l.916-2.955s1.763 1.51 3.23 1.51c.956 0 1.38-.772 1.38-1.32 0-2.294-3.759-2.4-3.759-6.175-.048-3.17 2.226-6.256 6.838-6.256 1.781 0 2.657.511 2.657.511l-1.34 3.846zm-.765-14.84c.193 0 .384.055.574.192-1.394.659-2.924 2.322-3.553 5.655-.93.302-1.832.574-2.676.82.735-2.53 2.512-6.652 5.655-6.652zm1.75 4.179v.19c-1.068.33-2.243.686-3.391 1.043.66-2.517 1.888-3.747 2.953-4.208.274.71.438 1.666.438 2.975zm.764-3.165c.983.105 1.616 1.228 2.024 2.486-.494.161-1.041.327-1.64.518v-.357c0-1.065-.136-1.942-.384-2.65zm4.238 1.826c-.028 0-.085.03-.11.03-.026 0-.41.106-1.012.297-.599-1.747-1.666-3.357-3.553-3.357h-.163C25.191 8.296 24.53 8 23.958 8c-4.4 0-6.502 5.492-7.161 8.282-1.692.517-2.923.9-3.06.955-.956.301-.983.328-1.094 1.232-.106.655-2.592 19.923-2.592 19.923L29.262 42zM3 0h44c1.662 0 3 1.338 3 3v44c0 1.662-1.338 3-3 3H3c-1.662 0-3-1.338-3-3V3c0-1.662 1.338-3 3-3z"
            fill="currentColor"
          />
        </symbol>

        {/* <symbol id="somename" viewBox="0 0 28 23"></symbol> */}
      </svg>
    );
  }
}
