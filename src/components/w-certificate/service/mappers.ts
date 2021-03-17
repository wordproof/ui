import { WPRevision } from '.';

export const oldDataMapper = (src: any): WPRevision => {
  const { transactionId, hash, content, date, revisions } = src;

  return {
    transactionId,
    hash,
    content,
    date,
    ...(revisions
      ? { revisions: revisions.map(revision => oldDataMapper(revision)) }
      : {}),
  };
};
