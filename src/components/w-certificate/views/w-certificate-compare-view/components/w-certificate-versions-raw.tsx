import {
  Component,
  Prop,
  h,
  State,
  Watch,
  Event,
  EventEmitter,
} from '@stencil/core';
import { WPRevision } from '../../../../../utils/certificate-data';
import ContentPreview from './ContentPreview';
import { RevisionOption } from '../types';

@Component({
  tag: 'w-certificate-versions-raw',
  shadow: true,
})
export class WCertificateVersionsRaw {
  @Prop() allRevisions: WPRevision[];

  @Prop() allOptions: RevisionOption[];

  @Event() choose: EventEmitter<WPRevision>;

  @State() oldOptions: RevisionOption[];

  @State() revisionValue: number = 0;
  @Watch('revisionValue')
  watchRevisionValue(newValue: number) {
    this.choose.emit(this.allRevisions[newValue]);
  }

  render() {
    return (
      <div>
        <div class="flex flex-col sm:flex-row mx-3 sm:space-x-4 sm:mx-4 sm:mt-3 sm:mb-4">
          <w-input-select
            value={this.revisionValue}
            class="w-full"
            onInput={(ev: InputEvent) => {
              this.revisionValue = Number(ev.data);
            }}
          >
            {this.allOptions.map(option => (
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
            view={'raw'}
            viewInd={this.revisionValue}
            classes="hidden sm:block"
          />
          <ContentPreview
            revisions={this.allRevisions}
            view={'render'}
            viewInd={this.revisionValue}
          />
        </div>
      </div>
    );
  }
}
