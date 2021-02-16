import { h } from '@stencil/core';

const renderBanner = () => (
  <div class="relative h-full">
    <div
      class="bg-yellowAccent w-full h-full absolute"
      style={{ transform: 'skewX(166deg)', left: '-73px' }}
    ></div>
    <svg
      viewBox="0 0 77 76"
      width="154"
      height="152"
      class="relative"
      style={{
        top: '25px',
        left: '-15px',
        width: 'auto',
        height: '130px',
      }}
    >
      <g stroke="#FBB03B" stroke-width="1.23" fill="none" fill-rule="evenodd">
        <path d="M51.24 27.47V50C51.212 63.92 39.92 75.19 26 75.19 12.08 75.19.788 63.92.76 50V27.47h50.48z"></path>
        <path d="M32.37 47.75a6.37 6.37 0 1 0-9.21 5.68l-3.53 7.07h12.74l-3.53-7.07a6.35 6.35 0 0 0 3.53-5.68zM.76 27.47h50.47v4.16H.76zM45.65 27.47v-7.13c0-6.158 4.992-11.15 11.15-11.15A11.15 11.15 0 0 1 68 20.34v7.13h8.38v-7.13A19.53 19.53 0 0 0 56.8.81c-10.786 0-19.53 8.744-19.53 19.53v7.13h8.38z"></path>
      </g>
    </svg>
    <svg
      viewBox="0 0 87 115"
      width="174"
      height="230"
      class="absolute"
      style={{
        bottom: '25px',
        left: '40px',
        width: 'auto',
        height: '170px',
      }}
    >
      <g transform="translate(0 8)" fill="none" fill-rule="evenodd">
        <path
          d="M21 38V26C21 11.64 32.64 0 47 0c14.328.044 25.92 11.672 25.92 26v12"
          stroke="#032BC4"
          stroke-width="14.17"
        ></path>
        <path
          d="M86.91 34v33A39.94 39.94 0 0 1 47 107 39.94 39.94 0 0 1 7 67V34h79.91z"
          fill="#032BC4"
        ></path>
        <circle fill="#000" cx="46.97" cy="63.52" r="10.08"></circle>
        <path
          fill="#000"
          d="M57.05 83.69H36.89l10.08-20.17zM7.02 31.42h79.89V38H7.02z"
        ></path>
        <circle fill="#01DCC6" cx="10.99" cy="89.97" r="10.97"></circle>
        <path
          stroke="#FFF"
          stroke-width="2.59"
          d="M3.99 90.94l4.77 4.88 8.23-11.14"
        ></path>
      </g>
    </svg>
  </div>
);

export default renderBanner;
