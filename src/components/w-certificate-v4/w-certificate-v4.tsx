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
import {
  BLOCKCHAIN_CONFIG,
  TIMESTAMP_CHECK_URL,
} from '../../config/blockchain.config';
import { disableDebug, enableDebug, LogSources } from '../../utils/debug';
import AboutView from './views/AboutView';

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

  /**
   * enables debug information logging to the console
   */
  @Prop() debug: boolean = false;

  /**
   * shows or hides revisions, default value is `true`
   */
  @Prop({ mutable: true }) showRevisions: string | boolean;

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
          hasChanged={this.content.hasChanged}
          showRevisions={this.showRevisions as boolean}
        />
      ),
      default: true,
      mobile: true,
      height: '590px',
    },
    {
      hash: CertificateView.compare,
      renderer: (params: URLSearchParams) => (
        <w-compare-versions-view
          strings={this.strings}
          content={this.content}
          locale={this.locale}
          viewBlockchainUrl={this.viewBlockchainUrl}
          timestampCheckUrl={this.timestampCheckUrl}
          which={parseInt(params.get('which'))}
          to={parseInt(params.get('to'))}
          view={params.get('view')}
        ></w-compare-versions-view>
      ),
      minHeight: 'calc(634px)',
      height: 'calc(100vh - 2rem)',
    },
    {
      hash: CertificateView.content,
      renderer: (params: URLSearchParams) => {
        const revision = parseInt(params.get('revision'));
        const view = params.get('view');

        return (
          <w-version-view
            strings={this.strings}
            content={this.content}
            locale={this.locale}
            view={view === 'raw' || view === 'clean' ? view : 'clean'}
            revision={revision}
            viewBlockchainUrl={this.viewBlockchainUrl}
            timestampCheckUrl={this.timestampCheckUrl}
            showRevisions={this.showRevisions as boolean}
          ></w-version-view>
        );
      },
      minHeight: '634px',
      mobile: true,
    },
    {
      hash: CertificateView.importance,
      renderer: () => (
        <AboutView
          strings={this.strings}
          hasChanged={this.content.hasChanged}
        />
      ),
      mobile: true,
      height: '692px',
    },
  ] as Route[];

  currentView: CertificateViewKeys = CertificateView.overview;

  strings: CertificateV4Strings;

  @State() content: WPContent;

  @State() viewBlockchainUrl: string;

  @State() timestampCheckUrl: string;

  locale: string;

  @Listen('keydown', { target: 'body' })
  handleKeyDown(ev: KeyboardEvent) {
    if (ev.key === 'Escape') {
      this.hideModal();
    }
  }

  async componentWillLoad(): Promise<void> {
    this.showRevisions = this.showRevisions !== 'false';

    if (this.debug) {
      enableDebug(LogSources.parsePage);
    }

    const content = await parsePage();

    if (this.debug) {
      disableDebug(LogSources.parsePage);
    }

    if (content !== null) {
      this.content = content;
      this.strings = (await getLocaleStrings(
        this.hostElement,
      )) as CertificateV4Strings;
      this.locale = getComponentClosestLanguage(this.hostElement);
      this.visible = router.isTriggered();

      this.viewBlockchainUrl = `${
        BLOCKCHAIN_CONFIG[this.content.blockchain].explorer
      }${this.content.transactionId}`;

      this.timestampCheckUrl = `${TIMESTAMP_CHECK_URL}?hash=${this.content.hash}`;
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
          <w-router-outlet
            routes={this.routes}
            showRevisions={this.showRevisions as boolean}
          />
        </w-modal>
      </Host>
    ) : (
      <Host
        innerHTML={`<!--${NO_DATA_CERTIFICATE_COMMENT_NODE_TEXT}-->`}
      ></Host>
    );
  }
}
