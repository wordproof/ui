import { Component, Prop, h, State, Watch } from '@stencil/core';
import { WPRevision } from '../../service';
import ContentPreview from './ContentPreview';
import { RevisionOption } from './types';

@Component({
  tag: 'w-certificate-versions-compare',
  shadow: true,
})
export class WCertificateVersionsCompare {
  @Prop() allRevisions: WPRevision[];

  @Prop() allOptions: RevisionOption[];

  //@State() transactionId: string;

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
    //this.transactionId = this.allRevisions[newValue].transactionId;
  }

  componentWillLoad() {
    this.oldRevisionValue = 1;
    this.newRevisionValue = 0;
  }

  render() {
    return (
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
            view={'clean'}
            viewInd={this.oldRevisionValue}
            classes="hidden sm:block"
          />
          <ContentPreview
            revisions={this.allRevisions}
            view={'diff'}
            viewInd={this.oldRevisionValue}
            diffInd={this.newRevisionValue}
          />
        </div>
      </div>
    );
  }
}
