import { Component, Prop, h, Element } from '@stencil/core';
import { SerpCertificateStrings } from '../../i18n';

@Component({
  tag: 'w-serp-certificate',
  styleUrl: 'w-serp-certificate.css',
  shadow: true,
})
export class WSerpCertificate {
  @Element() hostElement: HTMLElement;

  strings: SerpCertificateStrings = {
    timestamped: 'Timestanped',
    someWebsitesChoose:
      "Some websites choose to anchor the fingerprint of their content on the blockchain. This is called 'timestamping'.",
    withTimestampsYouCan:
      'With timestamps, you can verify if and how information changed over time, and what individual or organization published it.',
    certificate: 'Certificate',
    whatIsThis: 'What id this?',
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

  render() {
    return (
      <div>
        <div>{this.strings.someWebsitesChoose}</div>
        <div>{this.firstTimestamped}</div>
        <div>{this.lastEdited}</div>
        <div>{this.publishedBy}</div>
      </div>
    );
  }
}
