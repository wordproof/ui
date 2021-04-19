import { Component, Prop, h, Element, State, Listen } from '@stencil/core';
import { CertificateStrings } from '../../../../i18n';
import { router } from '../../../w-router-outlet';
import Button from '../../components/Button';
import { WPContent, WPRevision } from '../../../../utils/certificate-data';
import Footer from '../../components/Footer';
import { RevisionOption } from './types';
import { formatDate } from '../../../../utils/locale';
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

  @Prop() hasRevisions: boolean;

  @State() transactionId: string;

  allRevisions: WPRevision[];
  allOptions: RevisionOption[];

  @Listen('choose')
  chooseHandler(event: CustomEvent<WPRevision>) {
    this.transactionId = event.detail.transactionId;
  }

  componentWillLoad() {
    const { revisions, ...otherProps } = this.content;

    if (revisions) {
      this.allRevisions = [otherProps, ...revisions];

      this.allOptions = this.allRevisions.map((revision, ind) => ({
        label: this.formatOptionLabel(revision.date, ind),
        value: ind,
      }));

      this.transactionId = this.allRevisions[0].transactionId;
      return;
    }

    this.allRevisions = [this.content];
    this.allOptions = [
      {
        label: formatDate(this.content.date, this.locale),
        value: 0,
      },
    ];
    this.transactionId = this.allRevisions[0].transactionId;
  }

  formatOptionLabel(dateStr: string, ind: number): string {
    let prefix = '';
    if (ind === 0) {
      prefix = `${this.strings.recent} `;
    }
    if (ind === this.content.revisions.length) {
      prefix = `${this.strings.firstTimestamp} `;
    }

    return `${prefix}${formatDate(dateStr, this.locale)}`;
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
          hasRevisions={this.hasRevisions}
        />
      </div>
    );
  }
}
