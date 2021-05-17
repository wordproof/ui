import { Component, h, Element } from '@stencil/core';

@Component({
  tag: 'w-input-select-option',
  styleUrl: 'w-input-select-option.css',
  shadow: true,
})
export class WInputSelectOption {
  @Element() hostElement: HTMLElement;

  render() {
    return <option class="hidden"></option>;
  }
}
