import { Component, Prop, h, Element, State, Listen } from '@stencil/core';
import { CertificateStrings } from '../../../../i18n';
import { router } from '../../../w-router-outlet';
import Button from '../../components/Button';
import { WPContent, WPRevision } from '../../service';
import Footer from '../../components/Footer';
import { RevisionOption } from './types';
@Component({
  tag: 'w-certificate-versions-view',
  styleUrl: 'w-certificate-versions-view.css',
  shadow: true,
})
export class WCertificateVersionsView {
  @Element() hostElement: HTMLElement;

  @Prop() strings: CertificateStrings;

  @Prop() content: WPContent;

  @Prop() locale: string;

  @Prop() raw: boolean;

  @State() transactionId: string;

  allRevisions: WPRevision[];
  allOptions: RevisionOption[];

  @Listen('choose')
  chooseHandler(event: CustomEvent<WPRevision>) {
    this.transactionId = event.detail.transactionId;
  }

  componentWillLoad() {
    const { revisions, ...otherProps } = this.content;

    this.allRevisions = [otherProps, ...revisions];

    this.allOptions = this.allRevisions.map((revision, ind) => ({
      label: `${this.formatOptionLabel(revision.date, ind)}`,
      value: ind,
    }));
  }

  formatOptionLabel(dateStr: string, ind: number): string {
    let prefix = '';
    if (ind === 0) {
      prefix = `${this.strings.recent} `;
    }
    if (ind === this.content.revisions.length) {
      prefix = `${this.strings.firstTimestamp} `;
    }

    const date = new Date(dateStr).toLocaleDateString(this.locale, {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: 'numeric',
      minute: '2-digit',
      second: '2-digit',
    });

    return `${prefix}${date}`;
  }

  render() {
    return (
      <div>
        <w-certificate-header>
          <div slot="left">
            <Button onClick={router.back} text={this.strings.previous} />
          </div>
          <p slot="right">
            {this.raw
              ? this.strings.checkYourself
              : this.strings.browsePreviousVersions}
          </p>
        </w-certificate-header>

        {this.raw ? (
          <w-certificate-versions-raw
            allRevisions={this.allRevisions}
            allOptions={this.allOptions}
          ></w-certificate-versions-raw>
        ) : (
          <w-certificate-versions-compare
            allRevisions={this.allRevisions}
            allOptions={this.allOptions}
          ></w-certificate-versions-compare>
        )}

        <Footer
          strings={this.strings}
          raw={this.raw}
          transactionId={this.transactionId}
        />
      </div>
    );
  }
}
