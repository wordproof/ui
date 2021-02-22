type Values<T> = T[keyof T];

export const CertificateView = {
  overview: 'overview',
  importance: 'importance',
  compare: 'compare',
} as const;

export type CertificateViewKeys = Values<typeof CertificateView>;

export type CertificateViews = Record<CertificateViewKeys, Function>;
