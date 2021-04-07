import { newE2EPage } from '@stencil/core/testing';
import { scriptTagContent } from './service/w-certificate.service.old-schema.spec';
import { NO_DATA_CERTIFICATE_COMMENT_NODE_TEXT } from './types';

describe('w-certificate', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<w-certificate></w-certificate>');
    const element = await page.find('w-certificate');
    expect(element).toHaveClass('hydrated');
  });

  it('renders a comment node inside shadow DOM if there is NO certificate data on the page', async () => {
    const page = await newE2EPage();

    await page.setContent('<w-certificate></w-certificate>');
    const element = await page.find('w-certificate');
    const commentText = element.shadowRoot.host.childNodes[0]['_nodeValue'];

    expect(commentText).toEqual(NO_DATA_CERTIFICATE_COMMENT_NODE_TEXT);
  });

  it('renders w-certificate-link and w-modal elements inside shadow DOM if there is old schema data on the page', async () => {
    const page = await newE2EPage();

    await page.setContent(/*html*/ `
    <script type="application/ld+json" class="wordproof-schema">
        ${JSON.stringify(scriptTagContent)}
      </script>
      <w-certificate></w-certificate>
    `);
    const linkElement = await page.find('w-certificate >>> w-certificate-link');
    const modalElement = await page.find('w-certificate >>> w-modal');

    expect(linkElement).toBeDefined();
    expect(modalElement).toBeDefined();
  });
});
