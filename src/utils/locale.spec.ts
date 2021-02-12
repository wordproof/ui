import { getComponentClosestLanguage } from './locale';

describe('getComponentClosestLanguage', () => {
  it('returns empty string for no names defined', () => {
    const el = new HTMLElement();

    expect(getComponentClosestLanguage(el)).toEqual('en');
  });
});
