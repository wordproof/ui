# w-certificate

The Certificate component is rendered as a link which opens a WordProof certificate modal.
The modal is also triggered by adding `#wordproof` hash tag to the url of the page that contains it.

<ShowElement>
  <w-certificate></w-certificate>
</ShowElement>

<ShowElement>
  <w-certificate link-text="Open me" no-icon="true"></w-certificate>
</ShowElement>

<ShowElement>
  <w-certificate shared-identifier="1" render-without-button="true"/>
  <w-certificate-button shared-identifier="1"/>
</ShowElement>

<ShowElement>
  <w-certificate shared-identifier="2" render-without-button="true" identity-provider="LinkedIn" identity-name="Marijn Bent" identity-profile-picture="https://avatars.dicebear.com/api/open-peeps/wordproof.png" identity-proof-url="#"/>
  <w-certificate-button icon="shield" text="" shared-identifier="2"/>
</ShowElement>

## API

!!!include(src/components/w-certificate/readme.md)!!!
