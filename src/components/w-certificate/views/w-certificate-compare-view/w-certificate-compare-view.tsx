import { Component, Prop, h, Element, State, Watch } from '@stencil/core';
import { CertificateStrings } from '../../../../i18n';
import { router } from '../../../w-router-outlet';
import Button from '../../components/Button';
import { WPContent, WPRevision } from '../../service';
import { diffWords } from 'diff';
import Footer from '../../components/Footer';

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

  cleanUp(htmlStr: string) {
    const PARAGRAPH_DIVIDER = '!!WORDPROOF_RETURN!!';
    return htmlStr
      .replace(/<!-- \/wp:paragraph -->/gi, PARAGRAPH_DIVIDER)
      .replace(/(<([^>]+)>)/gi, '')
      .replace(new RegExp(PARAGRAPH_DIVIDER, 'gi'), '<br /><br />');
  }

  addDiffStyling(oldStr: string, newStr: string): string {
    return diffWords(oldStr, newStr)
      .map(change => {
        if (change.removed) {
          return `<span class="bg-red-200 text-red-600">${change.value}</span>`;
        }

        if (change.added) {
          return `<span class="bg-green-200 text-green-600">${change.value}</span>`;
        }

        return change.value;
      })
      .join('');
  }

  @State() oldRevisionValue: number;

  @State() newRevisionValue: number;

  @Watch('oldRevisionValue')
  watchOldRevisionValue(newValue: number) {
    this.newOptions = this.allOptions.filter(option => option.value < newValue);
    this.oldContent = this.cleanUp(this.allRevisions[newValue].content);
    if (this.newRevisionValue !== undefined) {
      this.newContent = this.addDiffStyling(
        this.oldContent,
        this.cleanUp(this.allRevisions[this.newRevisionValue].content),
      );
    }
  }

  @Watch('newRevisionValue')
  watchNewRevisionValue(newValue: number) {
    this.oldOptions = this.allOptions.filter(option => option.value > newValue);
    this.newContent = this.addDiffStyling(
      this.oldContent,
      this.cleanUp(this.allRevisions[newValue].content),
    );
    this.transactionId = this.allRevisions[newValue].transactionId;
  }

  allRevisions: WPRevision[];
  allOptions: RevisionOption[];

  @State() oldOptions: RevisionOption[];

  @State() newOptions: RevisionOption[];

  @State() oldContent: string;

  @State() newContent: string;

  @State() transactionId: string;

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

  render() {
    return (
      <div>
        <w-certificate-header>
          <div slot="left">
            <Button onClick={router.back} text={this.strings.previous} />
          </div>
          <p slot="right">{this.strings.browsePreviousVersions}</p>
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
            <div
              class="hidden sm:block w-full max-w-full py-5 px-4 rounded-lg border border-gray-300 overflow-y-scroll text-gray-800"
              style={{ maxHeight: '280px' }}
            >
              <div class="w-full break-all" innerHTML={this.oldContent}></div>
            </div>
            <div
              class="w-full max-w-full py-5 px-4 rounded-lg border border-gray-300 overflow-y-scroll text-gray-800"
              style={{ maxHeight: '280px' }}
            >
              <div class="w-full break-all" innerHTML={this.newContent}></div>
            </div>
          </div>
        </div>

        <Footer
          strings={this.strings}
          raw={true}
          transactionId={this.transactionId}
        />
      </div>
    );
  }
}
