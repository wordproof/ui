import { WPRevision } from '.';

export const mapOldData = (src: any): WPRevision => {
  const { transactionId, hash, content, date, revisions } = src;

  return {
    transactionId,
    hash,
    content,
    date,
    ...(revisions
      ? { revisions: revisions.map(revision => mapOldData(revision)) }
      : {}),
  };
};
export const mapNewData = (src: any): WPRevision => {
  const { identifier: transactionId, hash, text, dateCreated: date } = src;

  return {
    transactionId,
    hash,
    content: text ? text : 'Failed to fetch raw content',
    date,
  };
};
