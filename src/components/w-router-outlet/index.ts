export type Route = {
  hash: string;
  renderer: Function;
  default?: boolean;
  minHeight?: string;
  maxHeight?: string;
  height?: string;
  mobile?:boolean
};

export const TRIGGER_HASH = 'wordproof';

export const router = {
  isTriggered(): boolean {
    return location.hash.includes(TRIGGER_HASH);
  },

  getHref(view: string): string {
    return `${window.location.pathname}${
      window.location.search
    }#${TRIGGER_HASH}${view ? '-' + view : ''}`;
  },

  clearHash() {
    history.pushState(
      history.state,
      document.title,
      window.location.pathname + window.location.search,
    );
  },

  back() {
    window.history.go(-1);
  },

  go(view: string = '') {
    window.location.hash = `${TRIGGER_HASH}${view ? '-' + view : ''}`;
  },

  replace(view: string = '') {
    window.location.replace(router.getHref(view));
  },
};
