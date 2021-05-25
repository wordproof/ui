import { Component, Prop, h, Element, State } from '@stencil/core';
import { SerpCertificateStrings } from '../../i18n';
import { DateTimeFormatOptions, formatDate } from '../../utils/locale';
import TabLabel from '../w-certificate/components/tab-label';
import CertificateItem from './components/CertificateItem';

const DATE_FORMAT_OPTIONS = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
} as DateTimeFormatOptions;

const LOCALE = 'en-US';

@Component({
  tag: 'w-serp-certificate',
  styleUrl: 'w-serp-certificate.css',
  shadow: true,
})
export class WSerpCertificate {
  @Element() hostElement: HTMLElement;

  strings: SerpCertificateStrings = {
    timestamped: 'Timestamped',
    someWebsitesChoose:
      "Some websites choose to anchor the fingerprint of their content on the blockchain. This is called 'timestamping'.",
    withTimestampsYouCan:
      'With timestamps, you can verify if and how information changed over time, and what individual or organization published it.',
    certificate: 'Certificate',
    whatIsThis: 'What is this?',
    firstTimestamped: 'First timestamped',
    lastEdited: 'Last edited',
    publishedBy: 'Published by',
  };

  /**
   * date string when content was first timestamped
   */
  @Prop() firstTimestamped: string = '';

  /**
   * date string when content was last edited
   */
  @Prop() lastEdited: string = '';

  /**
   * name of an individual or company that published the content
   */
  @Prop() publishedBy: string = '';

  @State() showCertificate: boolean = true;

  render() {
    return (
      <div class="w-128 h-96 px-12 py-8 rounded-lg bg-white relative flex flex-col justify-items-center">
        <TabLabel
          onClick={() => {
            this.showCertificate = !this.showCertificate;
          }}
          text={
            this.showCertificate
              ? this.strings.whatIsThis
              : this.strings.certificate
          }
          topMarginClass="mt-24"
        />

        <div class="flex items-center justify-center">
          <div class="w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-r from-blue to-purple text-white">
            <w-icon fit class="w-6 h-6" name="shield"></w-icon>
          </div>
          <h2 class="ml-4 text-xl font-sohne-semibold font-semibold text-black">
            {this.strings.timestamped}
          </h2>
        </div>

        <div class="shadow-md rounded mx-auto mt-8 px-6 font-sohne bg-white w-full divide-y divide-gray-400">
          <CertificateItem
            label={this.strings.firstTimestamped}
            text={formatDate(
              this.firstTimestamped,
              LOCALE,
              DATE_FORMAT_OPTIONS,
            )}
            checked={true}
          />

          <CertificateItem
            label={this.strings.lastEdited}
            text={formatDate(this.lastEdited, LOCALE, DATE_FORMAT_OPTIONS)}
            checked={true}
          />

          <CertificateItem
            label={this.strings.publishedBy}
            text={this.publishedBy}
            checked={true}
          />
        </div>

        <div class="flex-grow flex items-end justify-center">
          <w-logo
            fit
            text
            whiteOnBlue
            textLarge
            class="h-6 inline-flex"
          ></w-logo>
        </div>
      </div>
    );
  }
}
