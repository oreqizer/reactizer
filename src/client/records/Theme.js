// @flow strict
export type Theme = {|
  id: string,
  name: string,
  colors: {|
    primary: string,
  |},
|};

export type ThemeProps = {
  theme: Theme,
};

// eslint-disable-next-line import/prefer-default-export
export const themeDefault: Theme = {
  id: "main",
  name: "Reactizer",
  colors: {
    primary: "deepskyblue",
  },
};
