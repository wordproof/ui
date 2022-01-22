import { Component, Prop, h, Element, Host } from '@stencil/core';
import { CertificateButtonStrings } from '../../i18n';
import { getLocaleStrings } from '../../utils/locale';
import CertificateBoxButton, {
  CertificateBoxButtonVariants,
} from './components/CertificateBoxButton';
import CertificateClassicButton from './components/CertificateClassicButton';
import CertificatePillButton, {
  CertificatePillButtonVariants,
} from './components/CertificatePillButton';
import CertificateTextButton, {
  CertificateTextButtonIcon,
} from './components/CertificateTextButton';

export type CertificateButtonShape = 'box' | 'text' | 'pill' | 'classic';

@Component({
  tag: 'w-certificate-button',
  styleUrl: 'w-certificate-button.css',
  shadow: true,
})
export class WCertificateButton {
  @Element() hostElement: HTMLElement;

  strings: CertificateButtonStrings;

  /**
   * @slot - slot text content is used as text on the button
   * it overrides the value of the `text` attribute (see below)
   */

  /**
   * Specify the text on the button, if not specified defaults to 'View this content's Timestamp certificate'
   */
  @Prop() text: string;

  /**
   * Specify the shape of the button ('box' | 'text' | 'pill')
   */
  @Prop() shape: CertificateButtonShape | '' = 'text';

  /**
   * Specify the variant used.
   */
  @Prop() variant: string;

  /**
   * Specify the color of the icon and tet.
   */
  @Prop() color: string;

  /**
   * Change the icon of the button.
   */
  @Prop() icon: CertificateTextButtonIcon;

  defaultLinkColor: string;

  slotTextContent: string = '';

  async componentWillLoad(): Promise<void> {
    this.strings = (await getLocaleStrings(
      this.hostElement,
    )) as CertificateButtonStrings;

    if (this.shape === 'classic') {
      const linkElem = document.createElement('a');
      this.hostElement.append(linkElem);

      const compStyles = window.getComputedStyle(linkElem);
      this.defaultLinkColor = compStyles.getPropertyValue('color');

      linkElem.remove();
    }
  }

  onTriggerClick(ev: MouseEvent) {
    ev.stopPropagation();
    const event = new MouseEvent('click', { bubbles: true, composed: true });
    this.hostElement.dispatchEvent(event);
  }

  getButtonText() {
    if (this.slotTextContent) {
      return this.slotTextContent;
    }

    if (this.text) {
      return this.text;
    }

    return this.strings.defaultButtonText;
  }

  render() {
    if (this.shape === 'text' || !this.shape) {
      return (
        <CertificateTextButton
          color={/^#([0-9A-F]{6})$/i.test(this.color) ? this.color : ''}
          text={this.getButtonText()}
          onClick={ev => this.onTriggerClick(ev)}
          icon={this.icon}
        />
      );
    }

    if (this.shape === 'classic') {
      return (
        <CertificateClassicButton
          color={this.defaultLinkColor}
          text={this.getButtonText()}
          onClick={ev => this.onTriggerClick(ev)}
        />
      );
    }

    if (this.shape === 'pill') {
      return (
        <CertificatePillButton
          variant={this.variant as CertificatePillButtonVariants}
          text={this.getButtonText()}
          onClick={ev => this.onTriggerClick(ev)}
        />
      );
    }

    if (this.shape === 'box') {
      return (
        <Host style={this.variant === 'fluid' ? { width: '100%' } : {}}>
          <CertificateBoxButton
            variant={
              this.variant
                ? (this.variant as CertificateBoxButtonVariants)
                : 'rounded'
            }
            strings={this.strings}
            text={this.getButtonText()}
            onClick={ev => this.onTriggerClick(ev)}
          />
        </Host>
      );
    }

    return null;
  }
}
