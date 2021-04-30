import { Component, h, Element, Prop, State, VNode } from '@stencil/core';
import { format } from 'date-fns';
import { CertificateV4Strings } from '../../../../i18n';
import {
  fetchRevisions,
  WPContent,
  WPRevision,
} from '../../../../utils/certificate-data';
import { ContentPreviewType } from '../../../../utils/content-preview';
import { getButtonTextFunction } from '../../../w-date-time-select/components/OpenButton';
import { DateTimeOption } from '../../../w-date-time-select/w-date-time-select';
import { router } from '../../../w-router-outlet';
import BaseButton from '../../components/base-button';
import CertificateHeader from '../../components/certificate-header';
import ContentPreview from '../../components/ContentPreview';
import { CertificateView } from '../../types';
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

  @Prop() viewBlockchainUrl: string;

  @Prop() timestampCheckUrl: string;

  @State() transactionId: string;

  @State() allRevisions: WPRevision[];

  @State() currentRevisionIndex: number;

  revisionDateOptions: DateTimeOption[];
  diffRevisionOptions: DateTimeOption[];
  diffRevisionIndex: number;

  setCurrentRevisionIndex(revisionIndex: number) {
    this.currentRevisionIndex =
      revisionIndex >= 0 && revisionIndex < this.allRevisions.length
        ? revisionIndex
        : 0;

    this.updateUrl();
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

  getButtonText(): string {
    if (this.view === 'raw') {
      return this.strings.viewContent;
    }

    if (this.view === 'clean') {
      return this.strings.viewCode;
    }

    return '';
  }

  getRoute(): string {
    if (this.view === 'raw') {
      return `${CertificateView.content}?revision=${this.currentRevisionIndex}`;
    }

    if (this.view === 'clean') {
      return `${CertificateView.raw}?revision=${this.currentRevisionIndex}`;
    }

    return '';
  }

  updateUrl() {
    router.replace(`${this.view}?revision=${this.currentRevisionIndex}`);
  }

  getOpenButtonText: getButtonTextFunction = (
    options: DateTimeOption[],
    selected: number | null,
  ): VNode => {
    if (selected === 0) {
      return (
        <span>
          {this.strings.mostRecent}
          <span class="opacity-40 ml-2">
            {format(options[0].value, 'MMMM d, yyyy')}
          </span>
        </span>
      );
    }

    const foundOption = options.find(option => option.index === selected);

    if (foundOption !== undefined) {
      return <span>{format(foundOption.value, 'MMMM d, yyyy')}</span>;
    }

    return <span>{this.strings.mostRecent}</span>;
  };

  setDiffRevisionIndex(revisionIndex: number) {
    this.diffRevisionIndex = revisionIndex;
    this.diffRevisionOptions = this.revisionDateOptions.slice(revisionIndex);
  }

  render() {
    return (
      <div
        class="px-3 pt-7 pb-10 flex flex-col items-center relative"
        style={{ lineHeight: '1.5', minHeight: '634px' }}
      >
        <div class="px-7 w-full">
          <CertificateHeader
            strings={this.strings}
            viewBlockchainUrl={this.viewBlockchainUrl}
            timestampCheckUrl={this.timestampCheckUrl}
          />
        </div>
        <p
          class="text-black text-base text-center mx-auto mt-2 h-12 font-sohne"
          style={{ width: '26rem' }}
        >
          {this.strings.thatIsImportantText}
        </p>

        <div class="w-full flex flex-col items-center style={{height:'471px'}}">
          <div class="h-12">
            {this.currentRevisionIndex !== undefined ? (
              <w-date-time-select
                class="mt-2 relative top-7 z-40"
                options={this.revisionDateOptions}
                selected={this.currentRevisionIndex}
                onChange={(ev: InputEvent) => {
                  this.setCurrentRevisionIndex(Number(ev.data));
                }}
                getButtonText={this.getOpenButtonText.bind(this)}
              />
            ) : null}
          </div>

          <div class="w-full" style={{ height: '320px' }}>
            {this.currentRevisionIndex !== undefined ? (
              <ContentPreview
                revisions={this.allRevisions}
                viewInd={this.currentRevisionIndex}
                view={this.view}
                strings={this.strings}
              />
            ) : null}
          </div>

          <div class="flex mt-10">
            {this.currentRevisionIndex !== undefined ? (
              <w-date-time-select
                class="z-40 mr-3"
                options={this.revisionDateOptions.slice(
                  this.currentRevisionIndex + 1,
                )}
                selected={null}
                openToTop={true}
                onChange={(ev: InputEvent) => {
                  const toRevisionIndex = Number(ev.data);
                  router.replace(
                    `${CertificateView.compare}?which=${this.currentRevisionIndex}&to=${toRevisionIndex}&view=content`,
                  );
                }}
              />
            ) : null}

            <BaseButton
              outlined
              text={this.getButtonText()}
              onClick={() => {
                router.replace(this.getRoute());
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}
