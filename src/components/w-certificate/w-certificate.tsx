import { Component, Prop, h, State, Element } from '@stencil/core';
import { CertificateStrings } from '../../i18n';
import { getLocaleStrings } from '../../utils/locale';
import renderHeader from './components/header';
import renderOverview from './views/overview';
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

          {renderHeader({ strings: this.strings })}

          {renderOverview({
            strings: this.strings,
            lastEdited: new Date('2020-02-16 2:20'),
            publishedBy: 'Sebastiaan van der Lans',
            locale: 'en',
          })}
        </w-modal>
      </div>
    );
  }
}
