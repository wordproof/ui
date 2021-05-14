import { FunctionalComponent, h } from '@stencil/core';
import cx from 'classnames';
import { IconName } from '../../w-icon/types';

interface IconProps {
  show?: boolean;
  name: IconName;
}

const Icon: FunctionalComponent<IconProps> = ({ show = true, name }) => (
  <w-icon
    fit
    name={name}
    class={cx({ ['hidden']: !show })}
    style={{
      width: '1em',
      height: '1em',
    }}
  />
);

export default Icon;
