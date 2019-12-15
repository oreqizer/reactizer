# @reactizer/session

Utilities for session stuff.

## API

Local and session storages are checked for existence.

```js
import { cookies, localStorage, sessionStorage } from "@reactizer/session";

const key = "key";
const value = "value";

cookies.save(key, value);
cookies.load(key);
cookies.remove(key);

// Same API for 'localStorage' and 'sessionStorage'
```

## License

MIT
