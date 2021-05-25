import { FunctionalComponent, h } from '@stencil/core';
import cx from 'classnames';

interface TabLabelProps {
  text?: string;
  topMarginClass?: string;
  onClick: Function;
}

const TabLabel: FunctionalComponent<TabLabelProps> = ({
  onClick,
  text = 'About WordProof',
  topMarginClass = 'mt-32',
}) => (
  <div
    class={cx(
      'hidden sm:inline-flex select-none bg-gradient-to-b from-blue to-purple text-white font-sohne-semibold rounded-r w-10 pt-3 pb-4 items-center justify-center absolute right-0 top-0 transform translate-x-full',
      topMarginClass,
    )}
    style={{ writingMode: 'vertical-rl' }}
    onClick={() => onClick()}
    role="button"
  >
    <w-icon name="info" class="mb-3"></w-icon>
    {text}
  </div>
);

export default TabLabel;
//translate-x-1/2
