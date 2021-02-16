import { Component, Prop, h, Event } from '@stencil/core';
import cx from 'classnames';
import EventEmitter from 'events';

@Component({
  tag: 'w-modal',
  styleUrl: 'w-modal.css',
  shadow: true,
})
export class WModal {
  /**
   * controls visibility of the modal
   */
  @Prop() visible: boolean = false;

  /**
   * controls visibility of the modal
   */
  @Prop() rounded: string | boolean = false;

  @Event() close: EventEmitter;

  backdropEl: EventTarget;

  onBackdropClick(ev: MouseEvent) {
    if (ev.target === this.backdropEl) {
      ev.stopPropagation();
      this.close.emit('close');
    }
  }

  onClose(ev: MouseEvent) {
    ev.stopPropagation();
    this.close.emit('close');
    console.warn('close');
  }

  render() {
    return (
      <div
        class={cx(
          'fixed top-0 left-0 w-full h-full flex items-center justify-center cursor-default',
          {
            ['hidden']: !this.visible,
          },
        )}
      >
        <div
          class="absolute bg-black opacity-50 top-0 left-0 w-full h-full"
          ref={el => (this.backdropEl = el as HTMLDivElement)}
          onClick={ev => this.onBackdropClick(ev)}
        ></div>

        <div
          class={cx('bg-white w-2/3 h-2/3 z-50 relative', {
            [`rounded-${this.rounded}`]: this.rounded,
          })}
          onClick={ev => ev.stopPropagation()}
        >
          <div class="absolute top-0 right-0" onClick={ev => this.onClose(ev)}>
            <slot name="close">
              <w-button
                icon="close"
                class="block text-blue mr-2 mt-2"
              ></w-button>
            </slot>
          </div>

          <slot></slot>
        </div>
      </div>
    );
  }
}
