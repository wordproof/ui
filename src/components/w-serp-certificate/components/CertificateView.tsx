import { FunctionalComponent, h } from '@stencil/core';
import { SerpCertificateStrings } from '../../../i18n';
import { DateTimeFormatOptions, formatDate } from '../../../utils/locale';
import CertificateItem from './CertificateItem';

interface CertificateViewProps {
  strings: SerpCertificateStrings;
  firstTimestamped: string;
  lastEdited: string;
  publishedBy: string;
}

const DATE_FORMAT_OPTIONS = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
} as DateTimeFormatOptions;

const LOCALE = 'en-US';

const CertificateView: FunctionalComponent<CertificateViewProps> = ({
  strings,
  firstTimestamped,
  lastEdited,
  publishedBy,
}) => (
  <div class="shadow-md rounded mx-auto mt-8 px-6 font-sohne bg-white w-full divide-y divide-gray-400">
    <CertificateItem
      label={strings.firstTimestamped}
      text={formatDate(firstTimestamped, LOCALE, DATE_FORMAT_OPTIONS)}
      checked={true}
    />

    <CertificateItem
      label={strings.lastEdited}
      text={formatDate(lastEdited, LOCALE, DATE_FORMAT_OPTIONS)}
      checked={true}
    />

    <CertificateItem
      label={strings.publishedBy}
      text={publishedBy}
      checked={true}
    />
  </div>
);

export default CertificateView;
