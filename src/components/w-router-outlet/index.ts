export type Route = {
  hash: string;
  renderer: Function;
  default?: boolean;
};

export const TRIGGER_HASH = 'wordproof';

export const routerTriggered = (): boolean =>
  location.hash.includes(TRIGGER_HASH);
