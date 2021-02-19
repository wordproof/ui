import { FunctionalComponent, h } from '@stencil/core';

interface ButtonProps {
  text: string;
  onClick: Function;
}
const Button: FunctionalComponent<ButtonProps> = ({ text, onClick }) => {
  return (
    <button
      onClick={() => {
        onClick();
      }}
      class="border border-blue font-sohne-semibold text-lg leading-3 text-blue rounded px-3 py-2 inline-flex items-center justify-center focus:outline-none hover:text-white hover:bg-blue transition duration-300 ease-in-out"
    >
      <svg viewBox="0 0 19 17" width="19" height="17" class="mr-2 inline-flex">
        <path
          d="M9.006 16.282L1.898 9.008H19V7.993H1.898L9.006.718 8.305 0 0 8.5 8.305 17z"
          fill="currentColor"
          fill-rule="evenodd"
        ></path>
      </svg>
      {text}
    </button>
  );
};

export default Button;
