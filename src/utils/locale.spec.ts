import { getLocaleStrings, BASE_URL } from './locale';
import fetchMock, { enableFetchMocks } from 'jest-fetch-mock';
import faker from 'faker';

describe('getComponentClosestLanguage', () => {
  it('returns empty string for no names defined', async () => {
    enableFetchMocks();

    const key = faker.random.word();
    const value = faker.random.word();

    fetchMock.mockResponse(JSON.stringify({ [key]: value }));

    const el = document.createElement('div');
    el.setAttribute('lang', 'nl');

    const strings = await getLocaleStrings(el);

    expect(fetchMock.mock.calls[0][0]).toEqual(
      `${BASE_URL}/i18n/div.i18n.nl.json`,
    );
    expect(strings[key]).toEqual(value);
  });
});
