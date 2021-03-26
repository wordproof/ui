import { FunctionalComponent, h } from '@stencil/core';
import { CertificateStrings } from '../../../i18n';
import { router } from '../../w-router-outlet';
import Banner from '../components/Banner';
import OverviewCard from '../components/OverviewCard';
import { CertificateView } from '../types';

interface OverviewViewProps {
  strings: CertificateStrings;
  lastEdited: Date;
  publishedBy: string;
  locale: string;
  hasRevisions: boolean;
  hasChanged: boolean;
}

const OverviewView: FunctionalComponent<OverviewViewProps> = ({
  strings,
  lastEdited,
  publishedBy,
  locale,
  hasRevisions,
  hasChanged,
}) => (
  <div>
    <w-certificate-header>
      <w-logo
        slot="left"
        fit
        double-colored
        text
        text-large
        class="h-8"
      ></w-logo>
      <p slot="right">{strings.contentIsWordProof}</p>
    </w-certificate-header>

    <div class="flex flex-row">
      <div class="hidden md:block md:w-1/3 overflow-hidden rounded-bl-lg">
        <Banner hasChanged={hasChanged} />
      </div>

      <div class="w-full md:w-2/3 p-2 md:py-7 md:px-6 text-left space-y-4">
        {/* <OverviewCard
          icon="ink-pen"
          title={
            hasChanged
              ? strings.contentHasChangedTitle
              : strings.contentHasNotChangedTitle
          }
          text={
            hasChanged
              ? strings.contentHasChangedText
              : strings.contentHasNotChangedText
          }
          link={strings.whyIsThisImportnat}
          onLinkClick={() => {
            router.go(CertificateView.importance);
          }}
          checked={!hasChanged}
          checkedText={`${strings.lastEdit} ${lastEdited.toLocaleDateString(
            locale,
            {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: 'numeric',
              minute: 'numeric',
            },
          )}`}
        /> */}
        <OverviewCard
          icon="clock"
          title={
            hasRevisions
              ? strings.discoverHowTitle
              : strings.verifyFingerprintTitle
          }
          text={
            hasRevisions
              ? strings.discoverHowText
              : strings.verifyFingerprintText
          }
          link={
            hasRevisions ? strings.viewPreviousVersions : strings.viewTimestamp
          }
          onLinkClick={() => {
            if (hasRevisions) {
              router.go(CertificateView.compare);
              return;
            }
            router.go(CertificateView.raw);
          }}
          checked={true}
          checkedText={`${strings.publishedBy} ${publishedBy}`}
        />
      </div>
    </div>
  </div>
);

export default OverviewView;
