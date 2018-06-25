// @flow strict
export type Intl = {|
  locale: string,
  translations: { [key: string]: string },
|};

// eslint-disable-next-line import/prefer-default-export
export const intlDefault: Intl = {
  locale: "en",
  translations: {},
};
