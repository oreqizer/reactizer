const available = () => "localStorage" in window && window.localStorage;

export const load = (key: string): string | null =>
  available() ? window.localStorage.getItem(key) : null;

export const save = (key: string, value: string) => {
  if (available()) {
    try {
      window.localStorage.setItem(key, value);
    } catch (e) {
      // Pass
    }
  }
};

export const remove = (key: string) => {
  if (available()) {
    window.localStorage.removeItem(key);
  }
};
