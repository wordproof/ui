import {
  Component,
  Prop,
  h,
  State,
  Element,
  Listen,
  Host,
} from '@stencil/core';
import { CertificateV4Strings } from '../../i18n';
import {
  getLocaleStrings,
  getComponentClosestLanguage,
} from '../../utils/locale';
import OverviewView from './views/OverviewView';
import { router, Route } from '../w-router-outlet';
import { WPContent, parsePage } from '../../utils/certificate-data/index';
import { CertificateView, CertificateViewKeys, NO_DATA_CERTIFICATE_COMMENT_NODE_TEXT } from './types';

@Component({
  tag: 'w-certificate-v4',
  styleUrl: 'w-certificate-v4.css',
  shadow: true,
})
export class WCertificateV4 {
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
          // strings={this.strings}
          // lastEdited={new Date(this.content.date)}
          // publishedBy=""
          // locale={this.locale}
          // hasRevisions={this.content.revisions !== undefined}
          // hasChanged={this.content.hasChanged}
        />
      ),
      default: true,
    },
  ] as Route[];

  currentView: CertificateViewKeys = CertificateView.overview;

  strings: CertificateV4Strings;

  @State() content: WPContent;

  locale: string;

  @Listen('keydown', { target: 'body' })
  handleKeyDown(ev: KeyboardEvent) {
    if (ev.key === 'Escape') {
      this.hideModal();
    }
  }

  async componentWillLoad(): Promise<void> {
    const content = await parsePage();
    if (content !== null) {
      this.content = content;
      this.strings = (await getLocaleStrings(
        this.hostElement,
      )) as CertificateV4Strings;
      this.locale = getComponentClosestLanguage(this.hostElement);
      this.visible = router.isTriggered();
    }
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
    return this.content ? (
      <Host>
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
          <w-router-outlet routes={this.routes} />
        </w-modal>
      </Host>
    ) : (
      <Host
        innerHTML={`<!--${NO_DATA_CERTIFICATE_COMMENT_NODE_TEXT}-->`}
      ></Host>
    );
  }
}
