// eslint-disable-next-line no-undef
declare var window: Window & typeof globalThis;
declare var __: (key: string) => string;

interface Window {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  __INTL__: any; // can't import here
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  __THEME__: any; // can't import here
}
