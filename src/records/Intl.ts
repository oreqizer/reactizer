export type Values = { [key: string]: string | number };
export type Translate = (key: string, values?: Values) => string;

export type IntlRaw = {
  locale: string;
  translations: { [key: string]: string };
};

export type Intl = {
  locale: string;
  translations: { [key: string]: string };
  t: Translate;
};

// eslint-disable-next-line import/prefer-default-export
export const intlDefault: Intl = {
  locale: "en",
  translations: {},
  t: id => id,
};
