type Values<T> = T[keyof T];

export const Icon = {
  comment: 'comment',
  eye: 'eye',
  close: 'close',
  closeCircle: 'close-circle',
  checkCircle: 'check-circle',
  clock: 'clock',
  inkPen: 'ink-pen',
  timesCircle: 'times-circle',
  arrowDown: 'arrow-down',
  questionCircle: 'question-circle',
  eyeLarge: 'eye-large',
  blockchain: 'blockchain',
} as const;

export type IconName = Values<typeof Icon>;
