import wCertificateLinkStrings from '../i18n/w-certificate-link.i18n.en.json';
import wCertificateButtonStrings from '../i18n/w-certificate-button.i18n.en.json';
import wCertificateStrings from '../i18n/w-certificate.i18n.en.json';
import wDateTimeSelectStrings from '../i18n/w-date-time-select.i18n.en.json';
import wModalStrings from '../i18n/w-modal.i18n.en.json';

export const EnglishStrings = {
  'w-certificate-link': wCertificateLinkStrings,
  'w-certificate-button': wCertificateButtonStrings,
  'w-certificate': wCertificateStrings,
  'w-date-time-select': wDateTimeSelectStrings,
  'w-modal': wModalStrings,
};

type CertificateLinkKeys = ['defaultLinkText'][number];
export type CertificateLinkStrings = Record<CertificateLinkKeys, string>;

type CertificateButtonKeys = [
  'defaultButtonText',
  'contentCertificate',
][number];
export type CertificateButtonStrings = Record<CertificateButtonKeys, string>;

type CertificateKeys = [
  'contentIsWordProof',
  'contentIsNotWordProof',
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
  'checkYourself',
  'ariaModalTitle',
  'ariaModalDescription',
  'recent',
  'firstTimestamp',
  'explanation',
  'timestampCheck',
  'compare',
  'viewOnBlockchain',
  'rawInput',
  'previous',
  'browsePreviousVersions',
  'verifyFingerprintTitle',
  'verifyFingerprintText',
  'viewTimestamp',
  'contentHasChangedTitle',
  'contentHasChangedText',
][number];
export type CertificateStrings = Record<CertificateKeys, string>;

type ModalStringKeys = ['ariaClose'][number];
export type ModalStrings = Record<ModalStringKeys, string>;

type CertificateV4Keys = [
  'compareVersions',
  'thatIsImportantText',
  'aboutWordproof',
  'todaysRevision',
  'selectDayToCompare',
  'contentCertificate',
  'thisContent',
  'hasNotChanged',
  'hasChanged',
  'lastEdited',
  'publishedBy',
  'explainThis',
  'timestampChecker',
  'viewOnTheBlockchain',
  'changed',
  'removed',
  'viewCode',
  'viewContent',
  'mostRecent',
  'whatIsTimestamp',
  'withTimestampYouCan',
  'wantToKnowMore',
  'goBack',
  'showContent',
][number];
export type CertificateV4Strings = Record<CertificateV4Keys, string>;

type DateTimeSelectStringKeys = [
  'todaysVersion',
  'selectDayToCompare',
  'today',
  'mostRecent',
][number];
export type DateTimeSelectStrings = Record<DateTimeSelectStringKeys, string>;

export type i18nStrings = Record<string, unknown>;
