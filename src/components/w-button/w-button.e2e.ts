import { newE2EPage } from '@stencil/core/testing';

describe('w-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<w-button></w-button>');
    const element = await page.find('w-button');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the props', async () => {
    const page = await newE2EPage();

    await page.setContent('<w-button></w-button>');
    const component = await page.find('w-button');
    const element = await page.find('w-button > button');

    component.setProperty('type', 'submit');
    await page.waitForChanges();
    expect(element.getAttribute('type')).toEqual(`submit`);

    component.setProperty('disabled', '');
    await page.waitForChanges();
    expect(element.getAttribute('disabled')).toEqual(``);

    component.setProperty('size', 'xs');
    await page.waitForChanges();
    expect(element.classList.contains('text-xs')).toEqual(true);
  });
});
