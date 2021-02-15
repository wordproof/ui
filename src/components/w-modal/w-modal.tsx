import { Component, Prop, h } from '@stencil/core';
import cx from 'classnames';

@Component({
  tag: 'w-modal',
  styleUrl: 'w-modal.css',
  shadow: true,
})
export class WModal {
  /**
   * controls visibility of the modal
   */
  @Prop({ mutable: true }) visible: boolean = false;

  backdropEl: EventTarget;

  close() {
    this.visible = false;
  }

  onBackdropClick(ev: MouseEvent) {
    if (ev.target === this.backdropEl) {
      ev.stopPropagation();
      this.close();
    }
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
          class="bg-white w-2/3 h-2/3 z-50"
          onClick={ev => ev.stopPropagation()}
        >
          <slot />
        </div>
      </div>
    );
  }
}
