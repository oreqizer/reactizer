// @flow strict
export type IntlRaw = {|
  locale: string,
  translations: { [key: string]: string },
|};

export type Intl = {|
  ...IntlRaw,
  t: (key: string, values?: { [key: string]: string }) => string,
|};

// eslint-disable-next-line import/prefer-default-export
export const intlDefault: Intl = {
  locale: "en",
  translations: {},
  t: id => id,
};
