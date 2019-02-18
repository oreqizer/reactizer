# General

Try to keep things as **simple as possible**. Remember - whenever you have to think about a solution for more than 5 minutes, take a break and try a different approach.

## Ramda

Import as `import * as R from "ramda";`. We have a _Babel_ plugin that transforms it into granular imports.

Feel free to use native `map`, `filter`, `reduce` etc. _Ramda_ is mainly useful in cases where you need composition, currying or a more complicated data manipulation. Just avoid any mutations.

## Date-fns

Import granularly:

```js
import format from "date-fns/format";
```

Use for manipulating with native `Date` objects whenever you need some date/time work.
