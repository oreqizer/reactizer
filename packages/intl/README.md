# @reactizer/intl

A minimalistic `node-polyglot` based **React** hooks-based i18n solution.

## API

API of the `t` function found in the context mirrors `node-polyglot`'s [API](https://airbnb.io/polyglot.js/).

### Core

Mount your provider:
```js
import { IntlProvider } from "@reactizer/intl";

const locale = {
  id: "en-GB",
  translations: {/* ... */},
};

<IntlProvider locale={locale} onChange={id => fetch(/* ... */)}>
  <Root />
</IntlProvider>
```

Use the `useIntl` hook (or `IntlConsumer`):
```js
import { useIntl } from "@reactizer/intl";

const MyComponent = () => {
  const intl = useIntl();
  
  return (
    /* ... */
  );
};
```

### Translate

There's a `Translate` component:

```js
import Translate from "@reactizer/intl/lib/Translate";

<Translate t="lmao" />
```

## License

MIT
