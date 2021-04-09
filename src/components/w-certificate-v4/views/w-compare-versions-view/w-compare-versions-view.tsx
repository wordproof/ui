import { Component, Prop, h, Element, State, Listen } from '@stencil/core';
import { CertificateV4Strings } from '../../../../i18n';
import { WPContent, WPRevision } from '../../../../utils/certificate-data';
import { RevisionOption } from './types';
import { formatDate } from '../../../../utils/locale';
import CertificateHeader from '../../components/certificate-header';
import ContentPreview from './components/ContentPreview';
@Component({
  tag: 'w-compare-versions-view',
  styleUrl: 'w-compare-versions-view.css',
  shadow: true,
})
export class WCertificateVersionsView {
  @Element() hostElement: HTMLElement;

  @Prop() strings: CertificateV4Strings;

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
      // prefix = `${this.strings.recent} `;
    }
    if (ind === this.content.revisions.length) {
      // prefix = `${this.strings.firstTimestamp} `;
    }

    return `${prefix}${formatDate(dateStr, this.locale)}`;
  }

  render() {
    return (
      <div class="px-3 pt-7 pb-10 flex flex-col items-center relative">
        <div class="px-7 w-full"><CertificateHeader strings={this.strings} /></div>
        <p
          class="text-black text-base text-center mx-auto mt-2"
          style={{ width: '26rem' }}
        >
          {this.strings.thatIsImportantText}
        </p>

        <w-input-date class="mt-2 relative top-7 z-10"/>

        <div class="w-full rounded border border-light-blue flex">
          <div class="w-40"></div>
          <ContentPreview revisions={this.allRevisions} viewInd={0}/>
        </div>

        <w-input-date class="mt-9"/>

        {/* {this.raw ? (
          <w-certificate-versions-raw
            allRevisions={this.allRevisions}
            allOptions={this.allOptions}
          ></w-certificate-versions-raw>
        ) : (
          <w-certificate-versions-compare
            allRevisions={this.allRevisions}
            allOptions={this.allOptions}
          ></w-certificate-versions-compare>
        )} */}
      </div>
    );
  }
}
