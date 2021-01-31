import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "react-jss";
import { defaultTheme } from "./Theme";

const AllTheProviders = ({ children }) => {
  return <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>;
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
