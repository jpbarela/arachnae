// @flow
export type ButtonThemeType = {
  primary: string,
};

export type LinkThemeType = {
  color: string,
};

export type ThemeType = {
  background: string,
  button: ButtonThemeType,
  color: string,
  fontFamily: string,
  link: LinkThemeType,
};

export const defaultTheme: ThemeType = {
  button: {
    primary: "blue",
    color: "white",
  },
  color: "black",
  background: "white",
  fontFamily: "Helvetica, sans-serif",
  link: {
    color: "blue",
  },
};
