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
  background: "white",
  button: {
    primary: "blue",
    color: "white",
  },
  color: "black",
  fontFamily: "Helvetica, sans-serif",
};
