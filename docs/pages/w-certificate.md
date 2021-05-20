# w-certificate

The Certificate component is rendered as a link which opens a WordProof certificate modal.
The modal is also triggered by adding `#wordproof` hash tag to the url of the page that contains it.

<ShowElement>
  <w-certificate></w-certificate>
</ShowElement>

<ShowElement><w-certificate>slotted text</w-certificate></ShowElement>

<ShowElement>
  <w-certificate><span>slotted text in span</span></w-certificate>
</ShowElement>

<ShowElement>
  <w-certificate><w-certificate-button>slotted text in w-certificate-button</w-certificate-button></w-certificate>
</ShowElement>

## API

!!!include(src/components/w-certificate/readme.md)!!!
