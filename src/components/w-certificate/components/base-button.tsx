import { FunctionalComponent, h } from '@stencil/core';
import cx from 'classnames';

interface BaseButtonProps {
  onClick: Function;
  outlined?: boolean;
  text: string;
  leftArrow?: boolean;
}

const BaseButton: FunctionalComponent<BaseButtonProps> = ({
  onClick,
  outlined = false,
  text,
  leftArrow = false,
}) => (
  <button
    onClick={() => onClick()}
    class={cx(
      'rounded-full px-6 pt-3 pb-3 font-sohne-semibold text-base focus:outline-none focus:ring-blue flex flex-nowrap items-center sm:text-lg',
      {
        'bg-gradient-to-r from-blue to-purple text-white': !outlined,
        'bg-white border border-blue text-blue': outlined,
      },
    )}
  >
    {leftArrow ? <w-icon name="arrow-right" class="mr-4 transform rotate-180"></w-icon> : null}
    {text}
  </button>
);

export default BaseButton;
