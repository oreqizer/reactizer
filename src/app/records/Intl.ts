export type Values = { [key: string]: string | number };
export type Translate = (key: string, values?: Values) => string;

export type IntlRaw = {
  id: string;
  translations: { [key: string]: string };
};

export type Intl = {
  id: string;
  translations: { [key: string]: string };
  t: Translate;
};

// eslint-disable-next-line import/prefer-default-export
export const intlDefault: Intl = {
  id: "en",
  translations: {},
  t: id => id,
};
