//External
import {Component, Prop, h, State, Element, Listen, Host, Fragment,} from '@stencil/core';

//Internal
import {CertificateV4Strings} from '../../i18n';
import {CertificateView, CertificateViewKeys, NO_DATA_CERTIFICATE_COMMENT_NODE_TEXT,} from './types';
import {router, Route} from '../w-router-outlet';

import { getLocaleStrings,  getComponentClosestLanguage } from '../../utils/locale';
import {disableDebug, enableDebug, LogSources} from '../../utils/debug';
import {WPContent, parsePage} from '../../utils/certificate-data/index';

import {BLOCKCHAIN_CONFIG, TIMESTAMP_CHECK_URL } from '../../config/blockchain.config';

import AboutView from './views/AboutView';
import OverviewView from './views/OverviewView';

@Component({
  tag: 'w-certificate',
  styleUrl: 'w-certificate.css',
  shadow: true,
})
export class WCertificateV4 {
  @Element() hostElement: HTMLElement;

  /**
   * @slot The slot will always be rendered. Set text as a prop.
   */

  /**
   * Hides the icon on certificate link.
   */
  @Prop() noIcon: boolean = false;

  /**
   * Change the certificate link text.
   */
  @Prop() linkText: string;

  /**
   * Enables debug information logging to the console.
   */
  @Prop() debug: boolean = false;

  /**
   * Determines if revisions are shown in the certificate.
   */
  @Prop({mutable: true}) showRevisions: string | boolean;

  /**
   * Render without button inside, if a button is used outside this element.
   */
  @Prop() renderWithoutButton: boolean = false;

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
    },
  ] as Route[];

  currentView: CertificateViewKeys = CertificateView.overview;
  strings: CertificateV4Strings;
  slotTextContent: string = '';
  slotShouldRender: boolean = true;
  locale: string;

  @State() content: WPContent;
  @State() viewBlockchainUrl: string;
  @State() timestampCheckUrl: string;

  /**
   * Listen for keydown to close the modal.
   * @param keyboardEvent
   */
  @Listen('keydown', {target: 'body'})
  handleKeyDown(keyboardEvent: KeyboardEvent) {
    if (keyboardEvent.key === 'Escape') {
      this.hideModal();
    }
  }

  /**
   * Opens the certificate on DOM event.
   * @event wordproofCertificateOpen
   */
  @Listen('wordproofCertificateOpen', {target: 'window'})
  handleCertificateOpenEvent() {
    this.showModal();
  }

  /**
   * Opens the certificate on mouse click event from children.
   * @event click
   */
  @Listen('click')
  handleMouseClickEvent() {
    this.showModal();
  }

  async componentWillLoad(): Promise<void> {
    this.showRevisions = this.showRevisions !== 'false';

    if (this.debug)
      enableDebug(LogSources.parsePage);

    const content = await parsePage();

    if (this.debug)
      disableDebug(LogSources.parsePage);

    if (content !== null) {
      this.content = content;
      this.strings = (await getLocaleStrings(this.hostElement)) as CertificateV4Strings;
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

  /**
   * Returns HTML for the certificate button.
   */
  getButtonContents() {
    if (this.renderWithoutButton) {
      return (<Fragment></Fragment>);
    }

    if (this.slotShouldRender) {
      return (
        <slot>
          <w-certificate-button
            text={this.linkText}
            shape="text"
            icon={this.noIcon ? 'none' : 'wordproof'}
          ></w-certificate-button>
        </slot>
      );
    } else {
      return (
        <w-certificate-button
          text={this.slotTextContent}
          shape="text"
          icon={this.noIcon ? 'none' : 'wordproof'}
        ></w-certificate-button>
      );
    }
  }

  /**
   * Returns HTML for modal contents.
   */
  getModalContents() {
    return (
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
    );
  }

  render() {
    return this.content ? (
      <Host>
        { this.getButtonContents() }
        { this.getModalContents() }
      </Host>
    ) : (
      <Host
        innerHTML={`<!--${NO_DATA_CERTIFICATE_COMMENT_NODE_TEXT}-->`}
      ></Host>
    );
  }
}
