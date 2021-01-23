import React from "react";
import { defaultTheme } from "../src/Theme";
import { ThemeProvider } from "react-jss";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={defaultTheme}>
      <Story />
    </ThemeProvider>
  ),
];
