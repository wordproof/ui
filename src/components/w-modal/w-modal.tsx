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
  watchHandler(show: boolean) {
    this.hostElement.setAttribute('aria-hidden', String(!show));
  }

  /**
   * controls visibility of the modal
   */
  @Prop() rounded: 'sm' | 'md' | 'lg' | boolean = false;

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
    this.strings = (await getLocaleStrings(this.hostElement)) as ModalStrings;
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
        style={{ ['z-index']: '999997' }}
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
            'bg-white relative w-11/12 md:max-w-3xl',
            {
              [`rounded-${this.rounded}`]: ['sm', 'md', 'lg'].includes(
                String(this.rounded),
              ),
              [`rounded`]: this.rounded === true,
            },
            this.modalClassName,
          )}
          style={{ ['z-index']: '999998' }}
          onClick={ev => ev.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-labelledby="ariaLabel"
          aria-describedby="ariaDescription"
        >
          <button
            class="absolute top-0 sm:top-2 right-0 sm:right-2 focus:outline-none z-30"
            // style={{ ['z-index']: '999999' }}
            onClick={ev => this.onClose(ev)}
            aria-label={this.strings.ariaClose}
            tabindex="0"
          >
            <slot name="close">
              <w-icon
                fit
                name="close-circle"
                class="w-6 h-6 text-teal"
              ></w-icon>
            </slot>
          </button>

          <div class={this.contentClassName}>
            <slot />
          </div>
        </div>
      </div>
    );
  }
}
