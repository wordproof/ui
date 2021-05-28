import { Component, Prop, h, Element } from '@stencil/core';

@Component({
  tag: 'w-card',
  styleUrl: 'w-card.css',
  shadow: true,
})
export class WCard {
  @Element() hostElement: HTMLElement;

  /**
   * widt of the card
   */
  @Prop() size: string = '';

  render() {
    return (
      <div class="p-10 shadow rounded">
        <slot />
      </div>
    );
  }
}
