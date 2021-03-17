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
export const newDataMapper = (src: any): WPRevision => {
  const {
    identifier: transactionId,
    hash,
    text: content,
    dateCreated: date,
  } = src;

  return {
    transactionId,
    hash,
    content,
    date,
  };
};
