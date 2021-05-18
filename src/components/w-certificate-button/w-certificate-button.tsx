import { Component, Prop, h, Element } from '@stencil/core';
import { CertificateButtonStrings } from '../../i18n';
import { getLocaleStrings } from '../../utils/locale';
import CertificateBoxButton, {
  CertificateBoxButtonVariants,
} from './components/CertificateBoxButton';
import CertificatePillButton, {
  CertificatePillButtonVariants,
} from './components/CertificatePillButton';
import CertificateTextButton, {
  CertificateTextButtonVariants,
} from './components/CertificateTextButton';

export type CertificateButtonShape = 'box' | 'text' | 'pill';

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
  @Prop() shape: CertificateButtonShape = 'box';

  /**
   * variant of the button with certain shape
   */
  @Prop() variant: string;

  async componentWillLoad(): Promise<void> {
    this.strings = (await getLocaleStrings(
      this.hostElement,
    )) as CertificateButtonStrings;
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
    if (this.shape === 'text') {
      return (
        <CertificateTextButton
          color={this.variant as CertificateTextButtonVariants}
          text={this.getButtonText()}
          onClick={ev => this.onTriggerClick(ev)}
        />
      );
    }

    if (this.shape === 'pill') {
      return (
        <CertificatePillButton
          color={this.variant as CertificatePillButtonVariants}
          text={this.getButtonText()}
          onClick={ev => this.onTriggerClick(ev)}
        />
      );
    }

    if (this.shape === 'box') {
      return (
        <CertificateBoxButton
          variant={this.variant as CertificateBoxButtonVariants}
          strings={this.strings}
          text={this.getButtonText()}
          onClick={ev => this.onTriggerClick(ev)}
        />
      );
    }

    return null;
  }
}
