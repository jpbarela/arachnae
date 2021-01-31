// @flow
export type ButtonThemeType = {
  primary: string,
};

export type InputType = {
  borderColor: string,
};

export type ThemeType = {
  background: string,
  button: ButtonThemeType,
  color: string,
  fontFamily: string,
  input: InputType,
};

export const defaultTheme: ThemeType = {
  background: "white",
  button: {
    primary: "blue",
    color: "white",
  },
  color: "black",
  fontFamily: "Helvetica, sans-serif",
  input: {
    borderColor: "blue",
  },
};
