interface Window {
  __INTL__: any; // can't import here
  __THEME__: any; // can't import here
  __URQL__: any; // can't import here
}

declare var window: Window & typeof globalThis;
declare var __: (key: string) => string;
