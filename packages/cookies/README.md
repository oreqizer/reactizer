# @reactizer/cookies

An utility for handling **GDPR** cookie compliance.

## API

Exports an `useCookies` hook, a `CookiesProvider` and a `CookiesConsumer`.

Just hook the `CookiesProvider` up on the client:

```typescript jsx
import { CookiesProvider } from "@reactizer/cookies";

<CookiesProvider>
  <Root />
</CookiesProvider>;
```

Then use the `useCookies` hook:

```typescript
import { useCookies } from "@reactizer/cookies";

const Component = () => {
  const cookies = useCookies();
};
```

Types:

```typescript
export enum Level {
  NECESSARY = "necessary",
  PREFERENCES = "preferences",
  ANALYTICS = "analytics",
  MARKETING = "marketing",
}

export type Settings = {
  preferences: boolean;
  analytics: boolean;
  marketing: boolean;
};

// The context type
export type Cookies = {
  agreed: boolean;
  settings: Settings;
  onAgree: () => void; // marks cookies as agreed
  onChange: (settings: Settings) => void; // changes cookie settings
};
```

## License

MIT
