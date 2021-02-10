import { newE2EPage } from '@stencil/core/testing';

describe('w-input-text', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<w-input-text></w-input-text>');
    const element = await page.find('w-input-text');
    expect(element).toHaveClass('hydrated');
  });
});
