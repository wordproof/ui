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
import TabLabel from '../../components/tab-label';
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

  @Prop() which: number;

  @Prop() to: number;

  @Prop() view: string;

  @State() transactionId: string;

  @State() allRevisions: WPRevision[];

  @State() currentRevisionIndex: number = 0;

  @State() diffRevisionIndex: number | null = null;

  @State() showCode: boolean = false;

  revisionDateOptions: DateTimeOption[];
  @State() baseRevisionOptions: DateTimeOption[];
  @State() diffRevisionOptions: DateTimeOption[];

  async componentWillLoad() {
    this.allRevisions = [this.content];
    this.revisionDateOptions = [
      { value: new Date(this.content.date), index: 0 },
    ];
    this.baseRevisionOptions = this.revisionDateOptions;
    this.diffRevisionOptions = [];
    this.currentRevisionIndex = 0;
    this.diffRevisionIndex = null;
    this.updateBaseAndDiffOptions();

    this.transactionId = this.allRevisions[0].transactionId;

    this.showCode = this.view === 'raw';
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

      this.setBaseRevisionIndex(
        this.which < this.allRevisions.length - 1 ? this.which : 0,
      );
      this.setDiffRevisionIndex(
        this.to > this.which && this.to < this.allRevisions.length
          ? this.to
          : null,
      );
    }
  }

  updateBaseAndDiffOptions() {
    if (this.revisionDateOptions.length === 1) {
      this.baseRevisionOptions = this.revisionDateOptions;
      this.diffRevisionOptions = [];
    }

    this.baseRevisionOptions = this.revisionDateOptions.slice(
      0,
      this.diffRevisionIndex === null
        ? this.revisionDateOptions.length - 1
        : this.diffRevisionIndex,
    );

    this.diffRevisionOptions = this.revisionDateOptions.slice(
      this.currentRevisionIndex + 1,
      this.revisionDateOptions.length,
    );
  }

  setBaseRevisionIndex(revisionIndex: number) {
    this.currentRevisionIndex = revisionIndex;
    this.updateBaseAndDiffOptions();
  }

  setDiffRevisionIndex(revisionIndex: number) {
    this.diffRevisionIndex = revisionIndex;
    this.updateBaseAndDiffOptions();
  }

  renderFlexibleSpace() {
    return (
      <div class="flex-grow" style={{ flex: '0.1 2 1rem' }}>
        {' '}
      </div>
    );
  }

  render() {
    return (
      <div
        class="px-3 pt-7 pb-7 h-full flex flex-col relative"
        style={{ lineHeight: '1.5' }}
      >
        <TabLabel onClick={() => router.go(CertificateView.importance)} />

        <div class="px-7 w-full">
          <CertificateHeader
            strings={this.strings}
            viewBlockchainUrl={this.viewBlockchainUrl}
            timestampCheckUrl={this.timestampCheckUrl}
          />
        </div>
        <p
          class="text-black text-base font-sohne text-center mx-auto mt-2 hide-small-height"
          style={{ width: '26rem' }}
        >
          {this.strings.thatIsImportantText}
        </p>

        {this.renderFlexibleSpace()}

        <div class="h-6 flex justify-center">
          <w-date-time-select
            options={this.baseRevisionOptions}
            selected={this.currentRevisionIndex}
            onChange={(ev: InputEvent) => {
              this.setBaseRevisionIndex(Number(ev.data));
            }}
          />
        </div>

        <ContentPreview
          revisions={this.allRevisions}
          viewInd={this.currentRevisionIndex}
          view={this.showCode ? 'raw' : 'clean'}
          strings={this.strings}
        />

        {this.renderFlexibleSpace()}

        <div class="h-6 flex justify-center">
          {this.diffRevisionIndex !== null ? (
            <w-date-time-select
              openToTop={true}
              options={this.diffRevisionOptions}
              selected={this.diffRevisionIndex}
              onChange={(ev: InputEvent) => {
                this.setDiffRevisionIndex(Number(ev.data));
              }}
            />
          ) : null}
        </div>

        {this.diffRevisionIndex !== null ? (
          <ContentPreview
            revisions={this.allRevisions}
            viewInd={this.currentRevisionIndex}
            diffInd={this.diffRevisionIndex}
            view={this.showCode ? 'raw' : 'diff'}
            strings={this.strings}
          />
        ) : null}

        {this.renderFlexibleSpace()}

        <div class="h-12 flex justify-center">
          <BaseButton
            outlined
            text={
              this.showCode ? this.strings.viewContent : this.strings.viewCode
            }
            onClick={() => {
              this.showCode = !this.showCode;
              router.replace(
                `${CertificateView.compare}?which=${
                  this.currentRevisionIndex
                }&to=${this.diffRevisionIndex}&view=${
                  this.showCode ? 'raw' : 'clean'
                }`,
              );
            }}
          />
        </div>
      </div>
    );
  }
}
