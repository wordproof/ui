import { newSpecPage } from '@stencil/core/testing';
import { WInputText } from './w-input-text';
import faker from 'faker';

describe('w-button', () => {
  it('renders a text input', async () => {
    const { root } = await newSpecPage({
      components: [WInputText],
      html: /*html*/ `<w-input-text></w-input-text>`,
    });

    expect(root).toEqualHtml(/*html*/ `
      <w-input-text>
        <mock:shadow-root>
          <div>
            <label class="block relative w-full">
              <input autocomplete="" class="bg-transparent block border border-gray-800 border-solid focus:border-blue focus:outline-none h-12 pl-2 rounded-md shadow-sm text-gray-800 text-lg w-full" inputmode="text" placeholder="" type="text">
              <span class="absolute text-blue"></span>
            </label>
          </div>
        </mock:shadow-root>
      </w-input-text>
    `);
  });

  it('renders an error message', async () => {
    const error = faker.random.word();

    const { root } = await newSpecPage({
      components: [WInputText],
      html: /*html*/ `<w-input-text error="${error}"></w-input-text>`,
    });

    expect(root).toEqualHtml(/*html*/ `
      <w-input-text error="${error}">
        <mock:shadow-root>
          <div>
            <label class="block relative w-full">
              <input autocomplete="" class="bg-transparent block border border-gray-800 border-solid focus:border-blue focus:outline-none h-12 pl-2 rounded-md shadow-sm text-gray-800 text-lg w-full" inputmode="text" placeholder="" type="text">
              <span class="absolute text-blue"></span>
            </label>
          </div>
          <div class="text-pink text-sm">${error}</div>
        </mock:shadow-root>
      </w-input-text>
    `);
  });

  it('renders a suffix', async () => {
    const suffix = faker.random.word();

    const { root } = await newSpecPage({
      components: [WInputText],
      html: /*html*/ `<w-input-text suffix="${suffix}"></w-input-text>`,
    });

    expect(root).toEqualHtml(/*html*/ `
      <w-input-text suffix="${suffix}">
        <mock:shadow-root>
          <div>
            <label class="block relative w-full">
            <input autocomplete="" class="bg-transparent block border border-gray-800 border-solid focus:border-blue focus:outline-none h-12 pl-2 pr-32 rounded-md shadow-sm text-gray-800 text-lg w-full" inputmode="text" placeholder="" type="text">
              <span class="absolute text-blue"></span>
              <div class="-translate-y-1/2 absolute bg-gray-200 border-gray-400 border-l pl-1 pr-1 py-2 right-0.5 rounder-r-md text-base text-gray-800 top-1/2 transform z-0">
                ${suffix}
              </div>
            </label>
          </div>
        </mock:shadow-root>
      </w-input-text>
    `);
  });
});
