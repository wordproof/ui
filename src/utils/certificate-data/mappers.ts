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

  const computedHash = hashLinkContent
    ? sha256(JSON.stringify(hashLinkContent))
    : '';

  let content = 'Failed to fetch raw content';
  let date = 'Invalid date';

  /**
   * Get data from new hashInput
   */
  if ("text" in hashLinkContent)
    content = hashLinkContent.text

  if ("dateCreated" in hashLinkContent)
    date = hashLinkContent.dateCreated

  /**
   * Get data from old hashInput
   */
  if ("content" in hashLinkContent)
    content = hashLinkContent.content

  if ("date" in hashLinkContent)
    date = hashLinkContent.date

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
