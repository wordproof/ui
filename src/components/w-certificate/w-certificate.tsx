import { Component, Prop, h, State, Element } from '@stencil/core';
@Component({
  tag: 'w-certificate',
  styleUrl: 'w-certificate.css',
  shadow: true,
})
export class WCertificate {
  @Element() hostElement: HTMLElement;

  strings: Record<string, string>;

  /**
   * hides icon on certificate link
   */
  @Prop() noIcon: boolean = false;

  /**
   * custom certificate link text
   */
  @Prop() linkText: string;

  @State() visible: boolean = false;

  render() {
    return (
      <div>
        <w-certificate-link
          noIcon={this.noIcon}
          onClick={() => (this.visible = !this.visible)}
        >
          {this.linkText ? this.linkText : null}
        </w-certificate-link>
        <w-modal
          visible={this.visible}
          onClose={() => (this.visible = false)}
        ></w-modal>
      </div>
    );
  }
}
