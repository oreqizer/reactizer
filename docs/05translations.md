# Translations

A `translate` function is located in the `client/services/intl/context.js` context object as a property.

## Text component

Uses the `translate` function internally. Has three props:

```js
type Props = {
  t: string, // the translation key
  values?: Values, // placeholder values
  html?: boolean, // optional flag that allows adding inner HTML
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
