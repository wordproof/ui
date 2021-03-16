import { Component, Prop, h, Event, Element, Watch } from '@stencil/core';
import cx from 'classnames';
import EventEmitter from 'events';
import { ModalStrings } from '../../i18n';
import { getLocaleStrings } from '../../utils/locale';

@Component({
  tag: 'w-modal',
  styleUrl: 'w-modal.css',
  shadow: true,
})
export class WModal {
  @Element() hostElement: HTMLElement;

  /**
   * controls visibility of the modal
   */
  @Prop() visible: boolean = false;

  @Watch('visible')
  watchHandler(newValue: boolean) {
    this.hostElement.setAttribute('aria-hidden', String(!newValue));
  }

  /**
   * controls visibility of the modal
   */
  @Prop() rounded: string | boolean = false;

  /**
   * class names added to wrapper element of the modal
   */
  @Prop() wrapClassName: string = '';

  /**
   * class names added to modal element of the modal
   */
  @Prop() modalClassName: string = '';

  /**
   * class names added to backdrop element of the modal
   */
  @Prop() backdropClassName: string = '';

  /**
   * class names added to content wrapper element of the modal
   */
  @Prop() contentClassName: string = '';

  /**
   * class names added to content wrapper element of the modal
   */

  @Prop() ariaModalTitle: string = 'Modal';

  /**
   * class names added to content wrapper element of the modal
   */
  @Prop() ariaModalDescription: string = 'Modal description';

  @Event() close: EventEmitter;

  backdropEl: EventTarget;

  strings: ModalStrings;

  async componentWillLoad(): Promise<void> {
    this.strings = await getLocaleStrings(this.hostElement);
    this.hostElement.setAttribute('aria-hidden', String(this.visible));
  }

  onBackdropClick(ev: MouseEvent) {
    if (ev.target === this.backdropEl) {
      ev.stopPropagation();
      this.close.emit('close');
    }
  }

  onClose(ev: MouseEvent) {
    ev.stopPropagation();
    this.close.emit('close');
  }

  render() {
    return (
      <div
        class={cx(
          'fixed top-0 left-0 w-full h-full flex items-center justify-center cursor-default',
          {
            ['hidden']: !this.visible,
          },
          this.wrapClassName,
        )}
      >
        <div class="sr-only" id="ariaLabel">
          {this.ariaModalTitle}
        </div>
        <div class="sr-only" id="ariaDescription">
          {this.ariaModalDescription}
        </div>
        <div
          class={cx(
            'absolute bg-black opacity-50 top-0 left-0 w-full h-full',
            this.backdropClassName,
          )}
          ref={el => (this.backdropEl = el as HTMLDivElement)}
          onClick={ev => this.onBackdropClick(ev)}
        ></div>

        <div
          class={cx(
            'bg-white z-50 relative w-11/12 md:max-w-4xl',
            {
              [`rounded-${this.rounded}`]: this.rounded,
            },
            this.modalClassName,
          )}
          onClick={ev => ev.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-labelledby="ariaLabel"
          aria-describedby="ariaDescription"
        >
          <div
            class="absolute top-0 right-0"
            onClick={ev => this.onClose(ev)}
            aria-label={this.strings.ariaClose}
            tabindex="0"
          >
            <w-button
              icon="close-circle"
              class="block text-teal mr-2 mt-2"
            ></w-button>
          </div>

          <div class={this.contentClassName}>
            <slot />
          </div>
        </div>
      </div>
    );
  }
}
