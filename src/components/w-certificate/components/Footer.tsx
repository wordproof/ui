import { FunctionalComponent, h } from '@stencil/core';
import { CertificateStrings } from '../../../i18n';
import { Icon } from '../../w-icon/types';
import FooterLink from './FooterLink';
import { router } from '../../w-router-outlet/index';
import { CertificateView } from '../types';

interface FooterProps {
  strings: CertificateStrings;
  raw: boolean;
  transactionId: string;
}
const Footer: FunctionalComponent<FooterProps> = ({
  strings,
  raw,
  transactionId,
}) => {
  const links = [
    {
      icon: Icon.questionCircle,
      href: router.getHref(CertificateView.importance),
      label: strings.explanation,
      classes: 'inline-flex',
    },
    {
      icon: Icon.closeCircle,
      href: 'https://wordproof.io/check/',
      target: '_blank',
      label: strings.timestampCheck,
      classes: 'hidden md:inline-flex',
    },
    {
      icon: Icon.eyeLarge,
      href: raw
        ? router.getHref(CertificateView.raw)
        : router.getHref(CertificateView.compare),
      label: raw ? strings.rawInput : strings.compare,
      classes: 'hidden md:inline-flex',
    },
    {
      icon: Icon.blockchain,
      href: `https://bloks.io/transaction/${transactionId}`,
      target: '_blank',
      label: strings.viewOnBlockchain,
      classes: 'inline-flex',
    },
  ];

  return (
    <div class="my-2 mx-3 sm:m-4 rounded-lg flex items-center flex-wrap flex-grow justify-around md:justify-between px-4 border border-gray-300 bg-light-blue">
      {links.map(link => (
        <FooterLink
          icon={link.icon}
          href={link.href}
          target={link.target}
          label={link.label}
          classes={link.classes}
        />
      ))}

      {/* <a
        class="text-blue font-sohne-semibold p-3 md:max-w-1/4 md:p-4 text-sm items-center justify-center inline-flex"
        href=""
        target="_blank"
        rel="noopener noreferrer"
      >
        <w-icon name={Icon.questionCircle}></w-icon>
        {strings.explanation}
      </a>
      <a
        class="text-blue font-sohne-semibold p-3 md:max-w-1/4 md:p-4 text-sm items-center justify-center hidden md:inline-flex"
        href="https://wordproof.io/check/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <w-icon name={Icon.closeCircle}></w-icon>
        {strings.timestampCheck}
      </a>
      <a
        class="text-blue font-sohne-semibold p-3 md:max-w-1/4 md:p-4 text-sm items-center justify-center hidden md:inline-flex"
        href=""
        target="_blank"
        rel="noopener noreferrer"
      >
        <w-icon name={Icon.eyeLarge}></w-icon>
        {strings.rawInput}
      </a>
      <a
        class="text-blue font-sohne-semibold p-3 md:max-w-1/4 md:p-4 text-sm items-center justify-center inline-flex"
        href="https://bloks.io/transaction/4cbf491c3d0d28e3b0ad2848f0fa5769afb31fc609390ae5fe06893e4730c018"
        target="_blank"
        rel="noopener noreferrer"
      >
        <w-icon name={Icon.blockchain}></w-icon>
        {strings.viewOnBlockchain}
      </a> */}
    </div>
  );
};

export default Footer;
