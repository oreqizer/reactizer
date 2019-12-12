import * as React from "react";
import Polyglot from "node-polyglot";

export type Values = { [key: string]: string | number };
export type Translate = (key: string, values?: Values) => string;

export type Locale = {
  id: string;
  translations: { [key: string]: string };
};

export type Intl = Locale & {
  onChange: (id: string) => Promise<void>;
  t: Translate;
};

export const intlDefault: Intl = {
  id: "en",
  translations: {},
  onChange: () => Promise.resolve(),
  t: id => id,
};

const context: React.Context<Intl> = React.createContext(intlDefault);

const { Consumer: IntlConsumer, Provider } = context;

type Props = {
  locale: Locale;
  onChange: (id: string) => Promise<Locale>;
  children: React.ReactElement;
};

const IntlProvider = ({ locale, onChange, children }: Props) => {
  const [loc, setLocale] = React.useState(locale);

  const handleChange = React.useCallback(id => onChange(id).then(setLocale), [onChange]);

  const intl: Intl = React.useMemo(
    () => ({
      ...loc,
      onChange: handleChange,
      t: (k, v) => new Polyglot({ locale: loc.id, phrases: loc.translations }).t(k, v),
    }),
    [handleChange, loc],
  );

  return <Provider value={intl}>{children}</Provider>;
};

const useIntl = () => React.useContext(context);

export { IntlProvider, IntlConsumer, useIntl };