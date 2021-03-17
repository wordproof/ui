import { WPRevision } from '.';

export const oldDataMapper = (src: any): WPRevision => {
  const { transactionId, hash, title, content, date, revisions } = src;

  return {
    transactionId,
    hash,
    title,
    content,
    date,
    ...(revisions
      ? { revisions: revisions.map(revision => oldDataMapper(revision)) }
      : {}),
  };
};
