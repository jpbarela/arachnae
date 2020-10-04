// @flow
export type ButtonThemeType = {
  primary: string,
};

export type ThemeType = {
  button: ButtonThemeType,
};

export const defaultTheme: ThemeType = {
  button: {
    primary: "blue",
  },
};
