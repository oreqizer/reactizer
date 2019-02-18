# Flow

Write types **as specific as possible**. No `any`, `Object` nor `Function`!

Make sure to have `// @flow strict` everywhere! Be as *specific as possible*. Use exact object types and type unions:

```js
type Kek = {|
  lol: string,
  bur: "lmao" | "rofl",
|}
```

> No need to use +
