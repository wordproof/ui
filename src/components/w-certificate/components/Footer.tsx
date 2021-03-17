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
  hasRevisions: boolean;
}
const Footer: FunctionalComponent<FooterProps> = ({
  strings,
  raw,
  transactionId,
  hasRevisions,
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
        ? router.getHref(CertificateView.compare)
        : router.getHref(CertificateView.raw),
      label: raw ? strings.compare : strings.rawInput,
      classes: 'hidden md:inline-flex',
      disabled: !hasRevisions,
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
          disabled={link['disabled']}
        />
      ))}
    </div>
  );
};

export default Footer;
