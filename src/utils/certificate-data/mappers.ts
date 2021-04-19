import { sha256 } from 'js-sha256';
import { WPRevision } from '.';

export const mapOldData = (src: any): WPRevision => {
  const { transactionId, hash, content, date, revisions, blockchain } = src;

  return {
    transactionId,
    hash,
    content,
    date,
    ...(revisions
      ? { revisions: revisions.map(revision => mapOldData(revision)) }
      : {}),
    hasChanged: false,
    hashLinkContent: {},
    blockchain,
  };
};
export const mapNewData = (src: any): WPRevision => {
  const { identifier: transactionId, hash, hashLinkContent, blockchain } = src;

  const content = hashLinkContent
    ? hashLinkContent.text
    : 'Failed to fetch raw content';

  const date = hashLinkContent ? hashLinkContent.dateCreated : 'Invalid date';

  const computedHash = hashLinkContent
    ? sha256(JSON.stringify(hashLinkContent))
    : '';

  // console.warn({ hash, computedHash });

  return {
    transactionId,
    hash,
    content,
    date,
    hasChanged: hash !== computedHash,
    hashLinkContent,
    blockchain,
  };
};
