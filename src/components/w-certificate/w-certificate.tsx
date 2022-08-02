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
   * Specify shared identifier to allow pages with multiple certificates.
   */
  @Prop() sharedIdentifier: string = '';

  /**
   * Hides the icon on certificate link.
   */
  @Prop() noIcon: boolean = false;

  /**
   * Change the certificate link text.
   */
  @Prop() linkText: string;

  /**
   * The datetime the post was last modified. Used to show the visitor
   * if the post is edited after the last timestamp. This is a visual
   * notice, not a security feature.
   */
  @Prop() lastModified: string;

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

  /**
   * Add Identity provider.
   */
  @Prop() identityProvider: string;

  /**
   * Add Identity name.
   */
  @Prop() identityName: string;

  /**
   * Add Identity profile picture.
   */
  @Prop() identityProfilePicture: string;

  /**
   * State used for when the modal is visable to the user.
   */
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
          identityProvider={this.identityProvider}
          identityName={this.identityName}
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
   * Opens the certificate on event fired on the window.
   *
   * Only active if rendered without button and thus
   * does not have a certificate button as child.
   *
   * Will use sharedIdentifier if set to allow use of multiple certificates per page.
   * @event wordproofCertificateOpen
   */
  @Listen('wordproofCertificateOpen', {target: 'window'})
  handleCertificateOpenEvent(event) {
    if (this.renderWithoutButton && event.detail === this.sharedIdentifier) {
      this.showModal();
    }
  }

  /**
   * Opens the certificate on mouse click event from children.
   *
   * Only active if the certificate is rendered with button as child.
   *
   * @event click
   */
  @Listen('click')
  handleMouseClickEvent() {
    if (!this.renderWithoutButton) {
      this.showModal();
    }
  }

  async componentWillLoad(): Promise<void> {
    this.showRevisions = this.showRevisions !== 'false';

    if (this.debug)
      enableDebug(LogSources.parsePage);

    const content = await parsePage();

    if (this.debug) {
      disableDebug(LogSources.parsePage);
    }

    if (content !== null) {

      // Check if content is modified after the last timestamp.
      if (this.lastModified) {
        const lastTimestamped = new Date(content.date);
        const lastModified = new Date(this.lastModified);

        // @ts-ignore
        const difference = lastTimestamped - lastModified;
        const differenceInSeconds = Math.abs(difference) / 1000;

        // We regard changes within 5 seconds after the timestamp as not changed.
        if (differenceInSeconds > 5) {
          content.hasChanged = true;
        }
      }

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
