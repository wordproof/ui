import { getLocaleStrings } from './locale';

describe('getComponentClosestLanguage', () => {
  it('returns empty string for no names defined', () => {
    const el = new HTMLElement();

    expect(getLocaleStrings(el)).toEqual('en');
  });
});
