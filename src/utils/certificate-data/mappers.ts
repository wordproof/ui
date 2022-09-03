import {sha256} from 'js-sha256';
import {WPRevision} from '.';
import {getDebugLogFunction, LogSources} from '../debug';

const debugLog = getDebugLogFunction(LogSources.parsePage);

/**
 * Map content using the old schema.
 * @param source
 */
export const mapOldData = (source: any): WPRevision => {
  const {transactionId, hash, content, date, revisions, blockchain} = source;

  return {
    transactionId,
    hash,
    content,
    date,
    ...(revisions
      ? {revisions: revisions.map(revision => mapOldData(revision))}
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
  const {identifier: transactionId, hash, hashLinkContent, blockchain} = source;

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

  let hashChanged = hash !== computedHash;

  if (hashChanged) {

    debugLog('🚨⚠️ the hash and computed hash are not the same for items with hash ' + hash);

    /**
     * There is an issue with embedding content in the WordPress editor. When the url contains an '&',
     * this is correctly saved on both ends (my and the WP database), but when printed on the API endpoint the
     * unicode slash gets removed by WordPress. The &amp in the url gets translated to 'u0026' without \ in front of it.
     *
     * We should do something with the API endpoint to correctly print this information.
     *
     * If the text contains 'u0026', we do not display an outdated post to the user.
     */

    let regex = new RegExp('u0026', 'g');
    let containsAmp = regex.test(content);

    if (containsAmp) {
      hashChanged = false;
      debugLog('✅⚠ hashChanged set to false due to a unicode character present.');
    }
  }

  return {
    transactionId,
    hash,
    content,
    date,
    hasChanged: hashChanged,
    hashLinkContent,
    blockchain,
  };
};
