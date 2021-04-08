import { FunctionalComponent, h } from '@stencil/core';
import cx from 'classnames';

interface BaseButtonProps {
  onClick?: Function;
  outlined?: boolean;
  text: string;
}

const BaseButton: FunctionalComponent<BaseButtonProps> = ({
  onClick = () => {},
  outlined = false,
  text,
}) => (
  <button
    onClick={onClick()}
    class={cx(
      'rounded-full px-6 pt-3 pb-3 font-sohne-semibold text-base focus:outline-none focus:ring-blue',
      {
        'bg-gradient-to-r from-blue to-purple text-white': !outlined,
        'bg-white border border-blue text-blue': outlined,
      },
    )}
  >
    {text}
  </button>
);

export default BaseButton;
