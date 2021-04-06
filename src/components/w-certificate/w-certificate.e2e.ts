import { newE2EPage } from '@stencil/core/testing';
import { NO_DATA_CERTIFICATE_COMMENT_NODE_TEXT } from './types';

describe('w-certificate', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<w-certificate></w-certificate>');
    const element = await page.find('w-certificate');
    expect(element).toHaveClass('hydrated');
  });

  it('renders a comment node inside shadow DOM if there are NO certificate data on the page', async () => {
    const page = await newE2EPage();

    await page.setContent('<w-certificate></w-certificate>');
    const element = await page.find('w-certificate');
    const commentText = element.shadowRoot.host.childNodes[0]['_nodeValue'];

    expect(commentText).toEqual(NO_DATA_CERTIFICATE_COMMENT_NODE_TEXT);
  });
});
