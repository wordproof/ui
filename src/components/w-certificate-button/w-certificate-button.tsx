import { Component, Prop, h, Element } from '@stencil/core';
import { CertificateButtonStrings } from '../../i18n';
import { getLocaleStrings } from '../../utils/locale';

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
   * variant of th button with certain shapet
   */
  @Prop() variant: string = '1';

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

  render() {
    return (
      <button
        class="bg-blue text-white"
        type="button"
        onClick={ev => this.onTriggerClick(ev)}
      >
        {this.text ? this.text : this.strings.defaultButtonText}
      </button>
    );
  }
}
