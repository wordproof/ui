type Values<T> = T[keyof T];

export const Icon = {
  'comment': 'comment',
  'eye': 'eye',
  'close': 'close',
  'closeCircle': 'close-circle',
  'checkCircle': 'check-circle',
  'clock': 'clock',
  'inkPen': 'ink-pen',
  'timesCircle': 'times-circle',
  'arrowDown': 'arrow-down',
  'questionCircle': 'question-circle',
  'eyeLarge': 'eye-large',
  'blockchain': 'blockchain',
  'accessibility': 'accessibility',
  'hamburger': 'hamburger',
  'hamburger-close': 'hamburger-close',
  'arrow-right': 'arrow-right',
  'dots': 'dots',
  'check-ring': 'check-ring',
  'check': 'check',
  'api': 'api',
  'shopify': 'shopify',
  'wordpress': 'wordpress',
  'gear': 'gear',
  'search': 'search',
  'calendar': 'calendar',
  'shield': 'shield',
} as const;

export type IconName = Values<typeof Icon>;
