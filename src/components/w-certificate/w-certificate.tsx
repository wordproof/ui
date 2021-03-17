import { Component, Prop, h, State, Element, Listen } from '@stencil/core';
import { CertificateView, CertificateViewKeys } from './types';
import { CertificateStrings } from '../../i18n';
import {
  getLocaleStrings,
  getComponentClosestLanguage,
} from '../../utils/locale';
import OverviewView from './views/OverviewView';
import ImportanceView from './views/ImportanceView';
import { router, Route } from '../w-router-outlet';
import { fetchContent, WPContent } from './service';
import { parsePage } from './service/parsers';

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
          lastEdited={new Date(this.content.date)}
          publishedBy="Sebastiaan van der Lans"
          locale={this.locale}
          hasRevisions={this.content.revisions !== undefined}
        />
      ),
      default: true,
    },
    {
      hash: CertificateView.importance,
      renderer: () => <ImportanceView strings={this.strings} />,
    },
    {
      hash: CertificateView.compare,
      renderer: () => (
        <w-certificate-versions-view
          strings={this.strings}
          content={this.content}
          locale={this.locale}
          raw={false}
          hasRevisions={this.content.revisions !== undefined}
        ></w-certificate-versions-view>
      ),
    },
    {
      hash: CertificateView.raw,
      renderer: () => (
        <w-certificate-versions-view
          strings={this.strings}
          content={this.content}
          locale={this.locale}
          raw={true}
          hasRevisions={this.content.revisions !== undefined}
        ></w-certificate-versions-view>
      ),
    },
  ] as Route[];

  currentView: CertificateViewKeys = CertificateView.importance;

  strings: CertificateStrings;

  content: WPContent;

  locale: string;

  @Listen('keydown', { target: 'body' })
  handleKeyDown(ev: KeyboardEvent) {
    if (ev.key === 'Escape') {
      this.hideModal();
    }
  }

  async componentWillLoad(): Promise<void> {
    this.strings = (await getLocaleStrings(
      this.hostElement,
    )) as CertificateStrings;
    this.visible = router.isTriggered();
    this.locale = getComponentClosestLanguage(this.hostElement);
    // this.content = await fetchContent();
    this.content = await parsePage();
  }

  showModal() {
    router.go();
    this.visible = true;
  }

  hideModal() {
    this.visible = false;
    router.go();
    router.clearHash();
  }

  render() {
    return (
      <div>
        <w-certificate-link
          noIcon={this.noIcon}
          onClick={() => this.showModal()}
        >
          {this.linkText ? this.linkText : null}
        </w-certificate-link>
        <w-modal
          rounded="lg"
          visible={this.visible}
          onClose={() => this.hideModal()}
        >
          {/* <w-button
            slot="close"
            icon="close-circle"
            class="text-teal mr-3 w-6 h-6"
          ></w-button> */}

          <w-router-outlet routes={this.routes} />
        </w-modal>
      </div>
    );
  }
}
