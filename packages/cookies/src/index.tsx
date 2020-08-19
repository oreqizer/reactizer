import * as React from "react";
import { cookies } from "@reactizer/session";

export const COOKIE_AGREED = "@reactizer/cookies::agreed";
export const COOKIE_SETTINGS = "@reactizer/cookies::settings";

export type Settings = {
  preferences: boolean;
  analytics: boolean;
  marketing: boolean;
};

export type Cookies = {
  agreed: boolean;
  settings: Settings;
  onAgree: () => void;
  onChange: (settings: Settings) => void;
};

export const cookiesDefault: Cookies = {
  agreed: true,
  settings: {
    preferences: false,
    analytics: false,
    marketing: false,
  },
  onAgree: () => null,
  onChange: () => null,
};

const context: React.Context<Cookies> = React.createContext(cookiesDefault);

const { Consumer: CookiesConsumer, Provider } = context;

type Props = {
  children: React.ReactElement;
};

const CookiesProvider = ({ children }: Props) => {
  const [agreed, setAgreed] = React.useState<boolean>(true);
  const [settings, setSettings] = React.useState<Settings>(cookiesDefault.settings);

  const handleAgree = React.useCallback(() => {
    const now = new Date();

    cookies.save(COOKIE_AGREED, "true", {
      expires: now.setFullYear(now.getFullYear() + 1),
    });
    setAgreed(true);
  }, []);

  const handleChange = React.useCallback((val: Settings) => {
    cookies.save(COOKIE_SETTINGS, JSON.stringify(val));
    setSettings(val);
  }, []);

  React.useEffect(() => {
    setAgreed(Boolean(cookies.load(COOKIE_AGREED)));

    const val = cookies.load(COOKIE_SETTINGS);
    if (val) {
      setSettings(JSON.parse(val));
    }
  }, []);

  return (
    <Provider
      value={{
        agreed,
        settings,
        onAgree: handleAgree,
        onChange: handleChange,
      }}
    >
      {children}
    </Provider>
  );
};

const useCookies = () => React.useContext(context);

export { CookiesProvider, CookiesConsumer, useCookies };
