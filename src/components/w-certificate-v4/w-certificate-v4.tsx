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
import {
  CertificateView,
  CertificateViewKeys,
  NO_DATA_CERTIFICATE_COMMENT_NODE_TEXT,
} from './types';

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
          strings={this.strings}
          lastEdited={this.content.date}
          publishedBy=""
          locale={this.locale}
          // hasRevisions={this.content.revisions !== undefined}
          hasChanged={this.content.hasChanged}
        />
      ),
      default: true,
    },
    {
      hash: CertificateView.compare,
      renderer: () => (
        <w-compare-versions-view
          strings={this.strings}
          content={this.content}
          locale={this.locale}
          raw={false}
          hasRevisions={this.content.revisions !== undefined}
        ></w-compare-versions-view>
      ),
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
          rounded
          visible={this.visible}
          onClose={() => this.hideModal()}
          modalClassName="md:max-w-4xl"
        >
          <w-icon
            slot="close"
            name="close"
            class="mr-8 mt-8 inline-block"
          ></w-icon>
          <w-router-outlet routes={this.routes} />
          <div class="w-full flex">
            <w-logo
              fit
              text
              whiteOnBlue
              textLarge
              class="mb-10 h-6 mx-auto block"
            ></w-logo>
            {/* <div class="mx-auto text-blue opacity-40">{strings.contentCertificate}</div> */}
          </div>
        </w-modal>
      </Host>
    ) : (
      <Host
        innerHTML={`<!--${NO_DATA_CERTIFICATE_COMMENT_NODE_TEXT}-->`}
      ></Host>
    );
  }
}
