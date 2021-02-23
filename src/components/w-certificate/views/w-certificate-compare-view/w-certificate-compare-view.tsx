import { Component, Prop, h, Element, State, Watch } from '@stencil/core';
import { CertificateStrings } from '../../../../i18n';
import { router } from '../../../w-router-outlet';
import Button from '../../components/Button';
import { WPContent, WPRevision } from '../../service';
import Footer from '../../components/Footer';
import ContentPreview from './ContentPreview';

interface RevisionOption {
  label: string;
  value: number;
}
@Component({
  tag: 'w-certificate-compare-view',
  shadow: true,
})
export class WCertificateLink {
  @Element() hostElement: HTMLElement;

  @Prop() strings: CertificateStrings;

  @Prop() content: WPContent;

  @Prop() locale: string;

  @Prop() raw: boolean;

  @State() transactionId: string;

  @State() oldOptions: RevisionOption[];

  @State() newOptions: RevisionOption[];

  @State() oldRevisionValue: number;
  @Watch('oldRevisionValue')
  watchOldRevisionValue(newValue: number) {
    this.newOptions = this.allOptions.filter(option => option.value < newValue);
  }

  @State() newRevisionValue: number;
  @Watch('newRevisionValue')
  watchNewRevisionValue(newValue: number) {
    this.oldOptions = this.allOptions.filter(option => option.value > newValue);
    this.transactionId = this.allRevisions[newValue].transactionId;
  }

  allRevisions: WPRevision[];
  allOptions: RevisionOption[];

  componentWillLoad() {
    const { revisions, ...otherProps } = this.content;

    this.allRevisions = [otherProps, ...revisions];

    this.allOptions = this.allRevisions.map((revision, ind) => ({
      label: `${this.formatOptionLabel(revision.date, ind)}`,
      value: ind,
    }));

    this.oldRevisionValue = 1;
    this.newRevisionValue = 0;
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

        <div>
          <div class="flex flex-col sm:flex-row mx-3 sm:space-x-4 sm:mx-4 sm:mt-3 sm:mb-4">
            <w-input-select
              value={this.oldRevisionValue}
              class="w-full"
              onInput={(ev: InputEvent) => {
                this.oldRevisionValue = Number(ev.data);
              }}
            >
              {this.oldOptions.map(option => (
                <w-input-select-option
                  value={option.value}
                  label={option.label}
                ></w-input-select-option>
              ))}
            </w-input-select>
            <w-input-select
              value={this.newRevisionValue}
              class="w-full"
              onInput={(ev: InputEvent) => {
                this.newRevisionValue = Number(ev.data);
              }}
            >
              {this.newOptions.map(option => (
                <w-input-select-option
                  value={option.value}
                  label={option.label}
                ></w-input-select-option>
              ))}
            </w-input-select>
          </div>

          <div class="flex flex-col mx-3 my-2 sm:flex-row sm:space-x-4 sm:mx-4 sm:mt-3 sm:mb-4">
            <ContentPreview
              revisions={this.allRevisions}
              view="clean"
              viewInd={this.oldRevisionValue}
              classes="hidden sm:block"
            />
            <ContentPreview
              revisions={this.allRevisions}
              view="diff"
              viewInd={this.oldRevisionValue}
              diffInd={this.newRevisionValue}
            />
          </div>
        </div>

        <Footer
          strings={this.strings}
          raw={this.raw}
          transactionId={this.transactionId}
        />
      </div>
    );
  }
}
