import { FunctionalComponent, h } from '@stencil/core';

interface ShieldLogoProps {}

const ShieldLogo: FunctionalComponent<ShieldLogoProps> = ({}) => (
  <span class="w-13 h-13 rounded-full bg-gradient-to-r from-blue to-purple grid place-items-center">
    <w-icon fit name="shield" class="w-9 h-9 text-white" />
  </span>
);

export default ShieldLogo;
