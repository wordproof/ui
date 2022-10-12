import { FunctionalComponent, h } from '@stencil/core';
import CheckBullet from '../../w-certificate/components/check-bullet';

interface CertificateItemProps {
  checked: boolean;
  text: string;
  label: string;
}

const CertificateItem: FunctionalComponent<CertificateItemProps> = ({
  text,
  label,
  checked,
}) => (
  <div class="py-5 flex flex-wrap items-center justify-center sm:justify-start">
    <CheckBullet checked={checked} />
    <div class="text-gray-600 ml-4">{label}</div>
    <div class="text-black ml-2 mt-2 sm:mt-0 sm:text-lg">{text}</div>
  </div>
);

export default CertificateItem;
