import { Component, Prop, h, State, Element } from '@stencil/core';
import { CertificateView, CertificateViewKeys } from './types';
import { CertificateStrings } from '../../i18n';
import { getLocaleStrings } from '../../utils/locale';
import Header from './components/Header';
import OverviewView from './views/OverviewView';
import ImportanceView from './views/ImportanceView';
import { routerTriggered, Route } from '../w-router-outlet';

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

  routes = [
    {
      hash: CertificateView.overview,
      renderer: () => (
        <OverviewView
          strings={this.strings}
          lastEdited={new Date('2020-02-16 2:20')}
          publishedBy="Sebastiaan van der Lans"
          locale="en"
        />
      ),
      default: true,
    },
    {
      hash: CertificateView.importance,
      renderer: () => <ImportanceView strings={this.strings} />,
    },
  ] as Route[];

  currentView: CertificateViewKeys = CertificateView.importance;

  strings: CertificateStrings;

  async componentWillLoad(): Promise<void> {
    this.strings = await getLocaleStrings(this.hostElement);
    this.visible = routerTriggered();
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

          <Header strings={this.strings} />

          <w-router-outlet routes={this.routes} />
        </w-modal>
      </div>
    );
  }
}
