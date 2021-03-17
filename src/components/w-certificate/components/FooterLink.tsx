import { FunctionalComponent, h } from '@stencil/core';
import { IconName } from '../../w-icon/types';

interface FooterLinkProps {
  icon: IconName;
  href: string;
  target?: string;
  label: string;
  classes: string;
  disabled: boolean;
}
const FooterLink: FunctionalComponent<FooterLinkProps> = ({
  icon,
  href,
  target,
  label,
  classes,
  disabled,
}) => {
  return disabled ? (
    <span
      class={`text-blue opacity-50 font-sohne-semibold p-3 md:max-w-1/4 md:p-4 text-sm items-center justify-center ${classes}`}
    >
      <w-icon name={icon} class="mr-2"></w-icon>
      {label}
    </span>
  ) : (
    <a
      class={`text-blue font-sohne-semibold p-3 md:max-w-1/4 md:p-4 text-sm items-center justify-center ${classes}`}
      href={href}
      target={target}
      rel="noopener noreferrer"
    >
      <w-icon name={icon} class="mr-2"></w-icon>
      {label}
    </a>
  );
};

export default FooterLink;
