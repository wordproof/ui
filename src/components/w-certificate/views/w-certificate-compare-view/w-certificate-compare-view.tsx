import { Component, Prop, h, Element, State } from '@stencil/core';
import { CertificateStrings } from '../../../../i18n';
import { router } from '../../../w-router-outlet';
import Button from '../../components/Button';
import { WPContent } from '../../service';

@Component({
  tag: 'w-certificate-compare-view',
  shadow: true,
})
export class WCertificateLink {
  @Element() hostElement: HTMLElement;

  @Prop() strings: CertificateStrings;

  @Prop() content: WPContent;

  @Prop() locale: string;

  formatOptionLabel(dateStr: string, ind: number): string {
    let prefix = '';
    if (ind === 0) {
      prefix = `${this.strings.recent} `;
    }
    if (ind === this.content.revisions.length - 1) {
      prefix = `${this.strings.firstTimestamp} `;
    }

    const date = new Date(dateStr).toLocaleDateString(this.locale, {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: 'numeric',
      minute: 'numeric',
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

  @State() selectedLeft: number = 0;
  @State() selectedRight: number = 1;

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
          <div class="flex flex-col sm:flex-row sm:space-x-4 mx-4 mt-3 mb-4">
            <w-input-select value={this.selectedLeft} class="w-full">
              {this.content.revisions.map((revision, ind) => (
                <w-input-select-option
                  value={ind}
                  label={this.formatOptionLabel(revision.date, ind)}
                ></w-input-select-option>
              ))}
            </w-input-select>
            <w-input-select
              value={this.selectedRight}
              class="w-full my-2 sm:my-0"
            >
              {this.content.revisions.map((revision, ind) => (
                <w-input-select-option
                  value={ind}
                  label={this.formatOptionLabel(revision.date, ind)}
                ></w-input-select-option>
              ))}
            </w-input-select>
          </div>

          <div class="flex flex-col sm:flex-row sm:space-x-4 mx-4 mt-3 mb-4">
            <div
              class="w-full max-w-full py-5 px-4 rounded-lg border border-gray-300 overflow-y-scroll text-gray-800"
              style={{ maxHeight: '280px' }}
            >
              <div
                class="w-full break-all"
                innerHTML={this.cleanUp(
                  this.content.revisions[this.selectedRight].content,
                )}
              ></div>
            </div>
            <div
              class="w-full max-w-full py-5 px-4 rounded-lg border border-gray-300 overflow-y-scroll text-gray-800"
              style={{ maxHeight: '280px' }}
            >
              <div
                class="w-full break-all"
                innerHTML={this.cleanUp(
                  this.content.revisions[this.selectedRight].content,
                )}
              ></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
