import { Component, h, Element, Prop, State } from '@stencil/core';
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
import { ContentPreviewType } from '../../../../utils/content-preview';
import { DateTimeOption } from '../../../w-date-time-select/w-date-time-select';
import CertificateHeader from '../../components/certificate-header';
import ContentPreview from '../../components/ContentPreview';
@Component({
  tag: 'w-version-view',
  styleUrl: 'w-version-view.css',
  shadow: true,
})
export class WVersionView {
  @Element() hostElement: HTMLElement;

  @Prop() strings: CertificateV4Strings;

  @Prop() content: WPContent;

  @Prop() locale: string;

  @Prop() view: Exclude<ContentPreviewType, 'diff'>;

  @Prop() revision: number;

  @State() transactionId: string;

  @State() allRevisions: WPRevision[];

  @State() currentRevisionIndex: number;

  revisionDateOptions: DateTimeOption[];

  setCurrentRevisionIndex(revisionIndex: number) {
    this.currentRevisionIndex =
      revisionIndex >= 0 && revisionIndex < this.allRevisions.length
        ? revisionIndex
        : 0;
  }

  async componentDidLoad() {
    this.content.revisions = await fetchRevisions(this.content);

    const { revisions, ...otherProps } = this.content;

    if (revisions) {
      this.allRevisions = [otherProps, ...revisions].sort(
        (revisionA, revisionB) =>
          new Date(revisionB.date).getTime() -
          new Date(revisionA.date).getTime(),
      );

      this.transactionId = this.allRevisions[0].transactionId;
      this.revisionDateOptions = this.allRevisions.map((revision, index) => ({
        value: new Date(revision.date),
        index,
      }));

      this.setCurrentRevisionIndex(this.revision);
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
        {this.currentRevisionIndex !== undefined ? (
          <div class="w-full flex flex-col items-center">
            <w-date-time-select
              class="mt-2 relative top-7 z-40"
              options={this.revisionDateOptions}
              selected={this.currentRevisionIndex}
              onChange={(ev: InputEvent) => {
                console.warn({
                  index: ev.data,
                  revision: this.allRevisions[ev.data],
                });

                this.setCurrentRevisionIndex(Number(ev.data));
              }}
            />

            <ContentPreview
              revisions={this.allRevisions}
              viewInd={this.currentRevisionIndex}
              view={this.view}
              strings={this.strings}
            />
          </div>
        ) : null}
      </div>
    );
  }
}
