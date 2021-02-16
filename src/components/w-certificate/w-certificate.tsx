import { Component, Prop, h, State, Element } from '@stencil/core';
import { CertificateStrings } from '../../i18n';
import { getLocaleStrings } from '../../utils/locale';
@Component({
  tag: 'w-certificate',
  styleUrl: 'w-certificate.css',
  shadow: true,
})
export class WCertificate {
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

  strings: CertificateStrings;

  async componentWillLoad(): Promise<void> {
    this.strings = await getLocaleStrings(this.hostElement);
  }

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
          rounded="lg"
          visible={this.visible}
          onClose={() => (this.visible = false)}
        >
          <w-button
            slot="close"
            icon="close-circle"
            class="text-teal mr-2 mt-2"
          ></w-button>

          <div class="">
            <div class="flex p-3 items-center border-b-2 border-gray-400">
              <w-logo fit double-colored text text-large class="h-8"></w-logo>
              <p class="hidden md:block ml-auto mr-8 text-blue font-sohne">
                {this.strings.contentIsWordProof}
              </p>
            </div>

            <div class="flex flex-row">
              <div class="hidden md:block md:w-1/3 overflow-hidden">
                {this.renderBanner()}
              </div>

              <div class="w-full md:w-2/3 p-2 md:py-4 md:px-6 text-left">
                {this.renderCard({
                  icon: 'ink-pen',
                  title: this.strings.contentHasNotChangedTitle,
                  text: this.strings.contentHasNotChangedText,
                  link: this.strings.whyIsThisImportnat,
                  onLinkClick: Function,
                  checked: true,
                  checkedText: `${this.strings.lastEdit} February 16, 2020 at 2:20 am`,
                })}
                {this.renderCard({
                  icon: 'clock',
                  title: this.strings.discoverHowTitle,
                  text: this.strings.discoverHowText,
                  link: this.strings.viewPreviousVersions,
                  onLinkClick: Function,
                  checked: true,
                  checkedText: `${this.strings.publishedBy} Sebastiaan van der Lans`,
                })}
              </div>
            </div>
          </div>
        </w-modal>
      </div>
    );
  }

  renderBanner() {
    return (
      <div class="relative h-full">
        <div
          class="bg-yellowAccent w-full h-full absolute"
          style={{ transform: 'skewX(166deg)', left: '-73px' }}
        ></div>
        <svg
          viewBox="0 0 77 76"
          width="154"
          height="152"
          class="relative"
          style={{
            top: '25px',
            left: '-15px',
            width: 'auto',
            height: '130px',
          }}
        >
          <g
            stroke="#FBB03B"
            stroke-width="1.23"
            fill="none"
            fill-rule="evenodd"
          >
            <path d="M51.24 27.47V50C51.212 63.92 39.92 75.19 26 75.19 12.08 75.19.788 63.92.76 50V27.47h50.48z"></path>
            <path d="M32.37 47.75a6.37 6.37 0 1 0-9.21 5.68l-3.53 7.07h12.74l-3.53-7.07a6.35 6.35 0 0 0 3.53-5.68zM.76 27.47h50.47v4.16H.76zM45.65 27.47v-7.13c0-6.158 4.992-11.15 11.15-11.15A11.15 11.15 0 0 1 68 20.34v7.13h8.38v-7.13A19.53 19.53 0 0 0 56.8.81c-10.786 0-19.53 8.744-19.53 19.53v7.13h8.38z"></path>
          </g>
        </svg>
        <svg
          viewBox="0 0 87 115"
          width="174"
          height="230"
          class="absolute"
          style={{
            bottom: '25px',
            left: '40px',
            width: 'auto',
            height: '170px',
          }}
        >
          <g transform="translate(0 8)" fill="none" fill-rule="evenodd">
            <path
              d="M21 38V26C21 11.64 32.64 0 47 0c14.328.044 25.92 11.672 25.92 26v12"
              stroke="#032BC4"
              stroke-width="14.17"
            ></path>
            <path
              d="M86.91 34v33A39.94 39.94 0 0 1 47 107 39.94 39.94 0 0 1 7 67V34h79.91z"
              fill="#032BC4"
            ></path>
            <circle fill="#000" cx="46.97" cy="63.52" r="10.08"></circle>
            <path
              fill="#000"
              d="M57.05 83.69H36.89l10.08-20.17zM7.02 31.42h79.89V38H7.02z"
            ></path>
            <circle fill="#01DCC6" cx="10.99" cy="89.97" r="10.97"></circle>
            <path
              stroke="#FFF"
              stroke-width="2.59"
              d="M3.99 90.94l4.77 4.88 8.23-11.14"
            ></path>
          </g>
        </svg>
      </div>
    );
  }

  renderCard({
    icon,
    title,
    text,
    link,
    onLinkClick,
    checked,
    checkedText,
  }: {
    icon: string;
    title: string;
    text: string;
    link: string;
    onLinkClick: Function;
    checked: boolean | null;
    checkedText: string;
  }) {
    return (
      <div class="border-2 border-solid border-gray-300 rounded-lg p-4 md:px-4 md:py-5 mb-3">
        <div class="flex flex-col">
          <div class="flex flex-col md:flex-row text-base text-gray-700">
            <div class="mb-2 md:m-0 md:w-1/12">
              <w-icon name={icon} class="text-black"></w-icon>
            </div>
            <div class="md:pl-3">
              <h3 class="text-lg text-black font-medium">{title}</h3>
              <p class="mb-2">{text}</p>
              <button
                class="text-darkblue font-medium"
                onClick={() => onLinkClick()}
              >
                &gt; {link}
              </button>
            </div>
          </div>
          <div class="flex flex-row text-sm mt-4 text-gray-600">
            <div class="w-1/12">
              <span class="float-right">
                {checked === null ? null : (
                  <w-icon
                    name={checked ? 'check-circle' : 'times-circle'}
                    class={checked ? 'text-teal' : 'text-pink'}
                  ></w-icon>
                )}
              </span>
            </div>
            <span class="pl-3">{checkedText}</span>
          </div>
        </div>
      </div>
    );
  }
}
