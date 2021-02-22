import { Component, h } from '@stencil/core';
@Component({
  tag: 'w-certificate-header',
})
export class WCertificateHeader {
  render() {
    return (
      <div class="flex p-3 sm:p-4 items-center border-b-2 border-gray-400">
        <slot name="left" />
        <div class="hidden md:block ml-auto mr-8 text-blue font-sohne">
          <slot name="right" />
        </div>
      </div>
    );
  }
}
