import { sha256 } from 'js-sha256';
import { WPRevision } from '.';

/**
 * Map content using the old schema.
 * @param source
 */
export const mapOldData = (source: any): WPRevision => {
  const { transactionId, hash, content, date, revisions, blockchain } = source;

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

/**
 * Map content using the new schema.
 * @param source
 */
export const mapNewData = (source: any): WPRevision => {
  const { identifier: transactionId, hash, hashLinkContent, blockchain } = source;

  console.log(source);
  console.log(hashLinkContent);

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
