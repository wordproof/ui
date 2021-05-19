import { FunctionalComponent, h } from '@stencil/core';

interface RoundLogoProps {
  color: string;
}

const RoundLogo: FunctionalComponent<RoundLogoProps> = ({ color }) => {
  return (
    <svg width="27" height="28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect
        y=".4"
        width="27"
        height="27"
        rx="13.5"
        fill={color ? color : 'url(#paint0_linear)'}
      />
      <path
        d="M20.174 7.4c1.318 0 2.286 1.253 1.94 2.524l-2.608 9.6A2 2 0 0117.576 21h-1.829L14 13.917h2.758l.69 3.231L20.175 7.4z"
        fill="#fff"
      />
      <path
        opacity=".8"
        d="M12.772 7.4l-2.714 9.725L7.965 7.4h-.412A2 2 0 005.61 9.879l2.366 9.6A2 2 0 009.92 21h.258a2 2 0 001.93-1.476l2.607-9.6C15.06 8.652 14.09 7.4 12.772 7.4z"
        fill="#fff"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="27.387"
          y1="-16.668"
          x2="-6.749"
          y2="3.877"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#783CDC" />
          <stop offset="1" stop-color="#2000FF" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default RoundLogo;
