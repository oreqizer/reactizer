const available = () => "sessionStorage" in window && window.sessionStorage;

export const load = (key: string): string | null =>
  available() ? window.sessionStorage.getItem(key) : null;

export const save = (key: string, value: string) => {
  if (available()) {
    try {
      window.sessionStorage.setItem(key, value);
    } catch (e) {
      // Pass
    }
  }
};

export const remove = (key: string) => {
  if (available()) {
    window.sessionStorage.removeItem(key);
  }
};
