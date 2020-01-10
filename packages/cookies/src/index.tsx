import * as React from "react";
import { cookies } from "@reactizer/session";

export const COOKIE_AGREED = "@reactizer/cookies::agreed";
export const COOKIE_SETTINGS = "@reactizer/cookies::settings";

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

export type Cookies = {
  agreed: boolean;
  settings: Settings;
  onAgree: () => void;
  onChange: (settings: Settings) => void;
};

export const cookiesDefault: Cookies = {
  agreed: false,
  settings: {
    preferences: false,
    analytics: false,
    marketing: false,
  },
  onAgree: () => {},
  onChange: () => {},
};

const context: React.Context<Cookies> = React.createContext(cookiesDefault);

const { Consumer: CookiesConsumer, Provider } = context;

type Props = {
  children: React.ReactElement;
};

const CookiesProvider = ({ children }: Props) => {
  const [agreed, setAgreed] = React.useState<boolean>(false);
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
    if (cookies.load(COOKIE_AGREED)) {
      setAgreed(true);
    }

    const raw = cookies.load(COOKIE_SETTINGS);
    if (raw) {
      const val = JSON.parse(raw);

      setSettings(val);
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