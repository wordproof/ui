import { newSpecPage } from '@stencil/core/testing';
import { WButton } from './w-button';

describe('w-button', () => {
  it('renders a default button', async () => {
    const { root } = await newSpecPage({
      components: [WButton],
      html: /*html*/ `<w-button></w-button>`,
    });

    expect(root).toEqualHtml(/*html*/ `
      <w-button>
        <button
        class="bg-gradient-to-r active:bg-gray-900 border border-transparent duration-150 ease-in-out focus:border-blue focus:outline-none focus:shadow-outline-blue font-sohne-bold from-blue hover:bg-gray-700 inline-flex items-center outline-none px-5 py-2 rounded-full text-base text-white to-purple transition"
        type="button"></button>
      </w-button>
    `);
  });

  it('renders a text button', async () => {
    const { root } = await newSpecPage({
      components: [WButton],
      html: /*html*/ `<w-button text></w-button>`,
    });

    expect(root).toEqualHtml(/*html*/ `
      <w-button text="">
        <button
        class="active:bg-gray-900 duration-150 ease-in-out focus:outline-none focus:shadow-outline-blue font-sohne-bold hover:text-gray-800 inline-flex items-center outline-none text-base text-gray-600 transition underline"
        type="button"></button>
      </w-button>
    `);
  });

  it('sets "type" attribute', async () => {
    const { root } = await newSpecPage({
      components: [WButton],
      html: /*html*/ `<w-button type="submit"></w-button>`,
    });

    expect(root).toEqualHtml(/*html*/ `
      <w-button type="submit">
        <button
        class="text-base bg-gradient-to-r active:bg-gray-900 border border-transparent duration-150 ease-in-out focus:border-blue focus:outline-none focus:shadow-outline-blue font-sohne-bold from-blue hover:bg-gray-700 inline-flex items-center outline-none px-5 py-2 rounded-full text-white to-purple transition"
        type="submit"></button>
      </w-button>
    `);
  });

  it('sets "disabled" attribute', async () => {
    const { root } = await newSpecPage({
      components: [WButton],
      html: /*html*/ `<w-button disabled></w-button>`,
    });

    expect(root).toEqualHtml(/*html*/ `
      <w-button disabled="">
        <button
        class="bg-gradient-to-r active:bg-gray-900 border border-transparent duration-150 ease-in-out focus:border-blue focus:outline-none focus:shadow-outline-blue font-sohne-bold from-blue hover:bg-gray-700 inline-flex items-center outline-none px-5 py-2 rounded-full text-base text-white to-purple transition"
        disabled=""
        type="button"></button>
      </w-button>
    `);
  });

  it('adds Tailwind text size class depending on "size" property', async () => {
    const { root } = await newSpecPage({
      components: [WButton],
      html: /*html*/ `<w-button size="xs"></w-button>`,
    });

    expect(root).toEqualHtml(/*html*/ `
      <w-button size="xs">
        <button
        class="text-xs bg-gradient-to-r active:bg-gray-900 border border-transparent duration-150 ease-in-out focus:border-blue focus:outline-none focus:shadow-outline-blue font-sohne-bold from-blue hover:bg-gray-700 inline-flex items-center outline-none px-5 py-2 rounded-full text-white to-purple transition"
        type="button"></button>
      </w-button>
    `);
  });
});
