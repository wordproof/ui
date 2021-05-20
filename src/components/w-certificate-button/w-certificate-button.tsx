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
   * text on the button, if not specified defaults to 'View this content's Timestamp certificate'
   */
  @Prop() text: string;

  /**
   * shape of the button ('box' | 'text' | 'pill')
   */
  @Prop() shape: CertificateButtonShape | '' = 'text';

  /**
   * variant of the box button
   */
  @Prop() variant: string;

  /**
   * color of the text and pill button
   */
  @Prop() color: string;

  /**
   * color of the text and pill button
   */
  @Prop() icon: CertificateTextButtonIcon;

  defaultLinkColor: string;

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
    const event = new MouseEvent('click');
    this.hostElement.dispatchEvent(event);
  }

  getButtonText() {
    return this.text ? this.text : this.strings.defaultButtonText;
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
          color={this.color as CertificatePillButtonVariants}
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
