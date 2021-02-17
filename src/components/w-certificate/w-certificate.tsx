import { Component, Prop, h, State, Element } from '@stencil/core';
import {
  CertificateViews,
  CertificateView,
  CertificateViewKeys,
} from './types';
import { CertificateStrings } from '../../i18n';
import { getLocaleStrings } from '../../utils/locale';
import renderHeader from './components/header';
import renderOverview from './views/overview';
import renderImportance from './views/importance';
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

  views: CertificateViews = {
    [CertificateView.overview]: () =>
      renderOverview({
        strings: this.strings,
        lastEdited: new Date('2020-02-16 2:20'),
        publishedBy: 'Sebastiaan van der Lans',
        locale: 'en',
      }),
    [CertificateView.importance]: () =>
      renderImportance({
        strings: this.strings,
      }),
  };

  currentView: CertificateViewKeys = CertificateView.importance;

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

          {this.views[this.currentView]()}
        </w-modal>
      </div>
    );
  }
}
