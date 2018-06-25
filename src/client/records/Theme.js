// @flow strict
export type Theme = {|
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
  name: "Reactizer",
  colors: {
    primary: "deepskyblue",
  },
};
