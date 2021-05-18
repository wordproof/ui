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
        type="button"
        class="flex items-center focus:outline-none relative"
        onClick={ev => this.onTriggerClick(ev)}
      >
        <slot>{this.strings.defaultButtonText}</slot>
      </button>
    );
  }
}
