type CertificateLinkKeys = ['defaultLinkText'][number];
export type CertificateLinkStrings = Record<CertificateLinkKeys, string>;

type CertificateKeys = [
  'contentIsWordProof',
  'contentHasNotChangedTitle',
  'contentHasNotChangedText',
  'whyIsThisImportnat',
  'lastEdit',
  'discoverHowTitle',
  'discoverHowText',
  'viewPreviousVersions',
  'publishedBy',
  'importanceTitle',
  'importanceParagraph1',
  'importanceParagraph2',
  'importanceParagraph3',
  'importanceParagraph4',
  'ariaModalTitle',
  'ariaModalDescription',
][number];
export type CertificateStrings = Record<CertificateKeys, string>;

type ModalStringKeys = ['ariaClose'][number];
export type ModalStrings = Record<ModalStringKeys, string>;
