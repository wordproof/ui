import { Component, Prop, h, State, Element } from '@stencil/core';
import { CertificateStrings } from '../../i18n';
import { getLocaleStrings } from '../../utils/locale';
@Component({
  tag: 'w-certificate',
  styleUrl: 'w-certificate.css',
  shadow: true,
})
export class WCertificate {
  @Element() hostElement: HTMLElement;

  /**
   * hides icon on certificate link
   */
  @Prop() noIcon: boolean = false;

  /**
   * custom certificate link text
   */
  @Prop() linkText: string;

  @State() visible: boolean = true;

  strings: CertificateStrings;

  async componentWillLoad(): Promise<void> {
    this.strings = await getLocaleStrings(this.hostElement);
  }

  render() {
    return (
      <div>
        <w-certificate-link
          noIcon={this.noIcon}
          onClick={() => (this.visible = !this.visible)}
        >
          {this.linkText ? this.linkText : null}
        </w-certificate-link>
        <w-modal
          rounded="lg"
          visible={this.visible}
          onClose={() => (this.visible = false)}
        >
          <w-button
            slot="close"
            icon="close-circle"
            class="text-teal mr-2 mt-2"
          ></w-button>

          <div class="flex p-3 items-center">
            <w-logo fit double-colored text text-large class="h-8"></w-logo>
            <p class="ml-auto mr-8 text-blue font-sohne">{this.strings.contentIsWordProof}</p>
          </div>
        </w-modal>
      </div>
    );
  }
}
