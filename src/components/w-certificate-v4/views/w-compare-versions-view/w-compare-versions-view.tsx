import { Component, Prop, h, Element, State, Listen } from '@stencil/core';
import {
  BLOCKCHAIN_CONFIG,
  TIMESTAMP_CHECK_URL,
} from '../../../../config/blockchain.config';
import { CertificateV4Strings } from '../../../../i18n';
import {
  fetchRevisions,
  WPContent,
  WPRevision,
} from '../../../../utils/certificate-data';
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

  @State() allRevisions: WPRevision[];

  @Listen('choose')
  chooseHandler(event: CustomEvent<WPRevision>) {
    this.transactionId = event.detail.transactionId;
  }

  async componentWillLoad() {
    this.allRevisions = [this.content];
    this.transactionId = this.allRevisions[0].transactionId;
  }

  async componentDidLoad() {
    this.content.revisions = await fetchRevisions(this.content);

    const { revisions, ...otherProps } = this.content;

    if (revisions) {
      this.allRevisions = [otherProps, ...revisions];

      this.transactionId = this.allRevisions[0].transactionId;
      return;
    }
  }

  render() {
    return (
      <div class="px-3 pt-7 pb-10 flex flex-col items-center relative">
        <div class="px-7 w-full">
          <CertificateHeader
            strings={this.strings}
            viewBlockchainUrl={`${
              BLOCKCHAIN_CONFIG[this.content.blockchain].explorer
            }${this.content.transactionId}`}
            timestampCheckUrl={`${TIMESTAMP_CHECK_URL}?hash=${this.content.hash}`}
          />
        </div>
        <p
          class="text-black text-base text-center mx-auto mt-2"
          style={{ width: '26rem' }}
        >
          {this.strings.thatIsImportantText}
        </p>

        <w-date-time-select class="mt-2 relative top-7 z-10" />

        <ContentPreview
          revisions={this.allRevisions}
          viewInd={0}
          view="clean"
          strings={this.strings}
        />

        {this.allRevisions.length > 1 ? (
          <w-date-time-select class="mt-9" openToTop={true} />
        ) : null}
      </div>
    );
  }
}
