import { FunctionalComponent, h } from '@stencil/core';
import { IconName } from '../../w-icon/types';

interface IconProps {
  name: IconName;
}

const Icon: FunctionalComponent<IconProps> = ({ name }) => (
  <w-icon
    fit
    name={name}
    style={{
      width: '1em',
      height: '1em',
    }}
  />
);

export default Icon;
