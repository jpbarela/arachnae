// @flow
export type ButtonThemeType = {
  primary: string,
};

export type ThemeType = {
  background: string,
  button: ButtonThemeType,
  color: string,
  fontFamily: string,
};

export const defaultTheme: ThemeType = {
  button: {
    primary: "blue",
  },
  color: "black",
  background: "white",
  fontFamily: "Helvetica, sans-serif",
};
