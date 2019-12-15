import cookie from "js-cookie";

type Options = {
  expires?: number | Date;
  domain?: string;
  path?: string;
  secure?: boolean;
};

export const load = (key: string): string | null => cookie.get(key) || null;

export const save = (key: string, value: string, opts?: Options) => {
  cookie.set(key, value, opts);
};

export const remove = (key: string, opts?: Options) => {
  cookie.remove(key, opts);
};
