type DebugComponentSettings = Partial<Record<string, boolean>>;

let state: DebugComponentSettings = {};

export const enableDebug = (source: string): void => {
  state[source] = true;
};

export const disableDebug = (source: string): void => {
  state[source] = false;
};

export const debugEnabled = (source: string): boolean => {
  return state[source] === true;
};

export const getDebugLogFunction = (source: string) => (
  message: string,
): void => {
  // if (debugEnabled(source)) {
  console.warn(`${source}: ${message}`);
  // }
};
