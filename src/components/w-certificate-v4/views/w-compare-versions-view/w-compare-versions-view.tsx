import { Component, Prop, h, Element, State } from '@stencil/core';
import { CertificateV4Strings } from '../../../../i18n';
import {
  fetchRevisions,
  WPContent,
  WPRevision,
} from '../../../../utils/certificate-data';
import { DateTimeOption } from '../../../w-date-time-select/w-date-time-select';
import { router } from '../../../w-router-outlet';
import BaseButton from '../../components/base-button';
import CertificateHeader from '../../components/certificate-header';
import ContentPreview from '../../components/ContentPreview';
import { CertificateView } from '../../types';
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

  @Prop() viewBlockchainUrl: string;

  @Prop() timestampCheckUrl: string;

  @State() transactionId: string;

  @State() allRevisions: WPRevision[];

  @State() currentRevisionIndex: number = 0;

  @State() diffRevisionIndex: number | null = null;

  revisionDateOptions: DateTimeOption[];
  @State() currentRevisionOptions: DateTimeOption[];
  @State() diffRevisionOptions: DateTimeOption[];

  async componentWillLoad() {
    this.allRevisions = [this.content];
    this.revisionDateOptions = [
      { value: new Date(this.content.date), index: 0 },
    ];
    this.currentRevisionOptions = this.revisionDateOptions;
    this.diffRevisionOptions = [];
    this.transactionId = this.allRevisions[0].transactionId;
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

      this.setCurrentRevisionIndex(0);
      this.setDiffRevisionIndex(null);
    }
  }

  setCurrentRevisionIndex(revisionIndex: number) {
    this.currentRevisionIndex = revisionIndex;
    this.currentRevisionOptions = this.revisionDateOptions.slice(
      revisionIndex + 1,
    );
    this.diffRevisionOptions = this.revisionDateOptions.slice(
      revisionIndex + 1,
    );
  }

  setDiffRevisionIndex(revisionIndex: number) {
    this.diffRevisionIndex = revisionIndex;
    this.currentRevisionOptions = this.revisionDateOptions.slice(
      0,
      revisionIndex,
    );
    this.diffRevisionOptions = this.revisionDateOptions.slice(revisionIndex);
  }

  render() {
    return (
      <div class="px-3 pt-7 pb-10 " style={{ lineHeight: '1.5' }}>
        <div class="px-7 w-full">
          <CertificateHeader
            strings={this.strings}
            viewBlockchainUrl={this.viewBlockchainUrl}
            timestampCheckUrl={this.timestampCheckUrl}
          />
        </div>
        <p
          class="text-black text-base font-sohne text-center mx-auto mt-2"
          style={{ width: '26rem' }}
        >
          {this.strings.thatIsImportantText}
        </p>

        <div class="mt-2 relative top-7 z-40 h-12 flex justify-center">
          <w-date-time-select
            options={this.revisionDateOptions}
            selected={this.currentRevisionIndex}
            onChange={(ev: InputEvent) => {
              this.setCurrentRevisionIndex(Number(ev.data));
            }}
          />
        </div>

        <ContentPreview
          revisions={this.allRevisions}
          viewInd={this.currentRevisionIndex}
          view="clean"
          strings={this.strings}
        />

        <div class="mt-2 relative top-7 h-12 flex justify-center">
          {this.allRevisions.length > 1 ? (
            <w-date-time-select
              openToTop={true}
              options={this.revisionDateOptions}
              selected={this.diffRevisionIndex}
              onChange={(ev: InputEvent) => {
                this.setDiffRevisionIndex(Number(ev.data));
              }}
            />
          ) : (
            <BaseButton
              text={this.strings.viewCode}
              onClick={() => {
                router.go(
                  `${CertificateView.raw}?revision=${this.diffRevisionIndex}`,
                );
              }}
            />
          )}
        </div>

        {this.diffRevisionIndex !== null ? (
          <ContentPreview
            revisions={this.allRevisions}
            viewInd={this.currentRevisionIndex}
            diffInd={this.diffRevisionIndex}
            view="diff"
            strings={this.strings}
          />
        ) : null}

        {this.diffRevisionIndex !== null ? (
          <div class="mt-10 h-12 flex justify-center">
            <BaseButton
              text={this.strings.viewCode}
              onClick={() => {
                router.go(
                  `${CertificateView.raw}?revision=${this.diffRevisionIndex}`,
                );
              }}
            />
          </div>
        ) : null}
      </div>
    );
  }
}
