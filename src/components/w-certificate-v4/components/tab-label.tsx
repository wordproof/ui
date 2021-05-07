import { FunctionalComponent, h } from '@stencil/core';
import cx from 'classnames';

interface TabLabelProps {
  onClick: Function;
}

const TabLabel: FunctionalComponent<TabLabelProps> = ({ onClick }) => (
  <div
    class={cx(
      'select-none bg-gradient-to-b from-blue to-purple text-white font-sohne-semibold rounded-r w-10 pt-3 pb-4 inline-flex items-center justify-center absolute right-0 top-0 mt-32 transform translate-x-full',
    )}
    style={{ writingMode: 'vertical-rl' }}
    onClick={() => onClick()}
    role="button"
  >
    <w-icon name="info" class="mb-3"></w-icon>
    About WordProof
  </div>
);

export default TabLabel;
//translate-x-1/2
