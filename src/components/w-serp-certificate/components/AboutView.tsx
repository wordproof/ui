import { FunctionalComponent, h } from '@stencil/core';
import { SerpCertificateStrings } from '../../../i18n';

interface AboutViewProps {
  strings: SerpCertificateStrings;
}

const AboutView: FunctionalComponent<AboutViewProps> = ({ strings }) => (
  <div>
    <p class="mt-8">{strings.someWebsitesChoose}</p>
    <p class="mt-4">{strings.withTimestampsYouCan}</p>
  </div>
);

export default AboutView;
