export const LogSources = {
  parsePage: 'parse-page',
} as const;

type LogSourceType = typeof LogSources;
export type LogSource = LogSourceType[keyof LogSourceType];

type DebugComponentSettings = Partial<Record<LogSource, boolean>>;

let state: DebugComponentSettings = {};

export const enableDebug = (source: LogSource): void => {
  state[source] = true;
  console.warn(`${source}: debug logging enabled`);
};

export const disableDebug = (source: LogSource): void => {
  state[source] = false;
};

export const debugEnabled = (source: LogSource): boolean => {
  return state[source] === true;
};

export const getDebugLogFunction = (source: LogSource) => (
  message: string,
): void => {
  if (debugEnabled(source)) {
    console.warn(`${source}: ${message}`);
  }
};
