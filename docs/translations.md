# Translations

A `t` function is located in the `client/services/intl/context.ts` context object as a property.

## InitIntl

Eats the `IntlRaw` type and provides you with the `Intl` type:

```js
const Root = () => (
  <InitIntl intl={raw}>
    {intl => (
      <IntlProvider value={intl}>
        <App />
      </IntlProvider>
    )}
  </InitIntl>
);
```

## Text

A component that uses the `t` function internally. Has three props:

```js
type Props = {
  t: string; // the translation key
  values: { [key: string]: string }; // placeholder values
  html: boolean; // optional flag that allows adding inner HTML
};
```

Note that the `html` prop also wraps the translation in an extra `<span>`.

## Keys

**Every** translation key **must** be wrapped in the global `__` function:

```js
const keys = {
  key1: __("value1"),
  key2: __("value2"),
}

<Text t={__("key")} />
```

This allows easy collecting and optimization, as well as static analysis of the translation keys.
