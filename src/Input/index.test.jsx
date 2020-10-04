// @flow
import * as React from "react";
import { render } from "@testing-library/react";
import { DateInput, Input, NumericInput } from "./index";
import { ThemeProvider } from "react-jss";
import { defaultTheme } from "../Theme";

describe("Inputs", () => {
  describe("Input", () => {
    it("renders", () => {
      const container = render(
        <ThemeProvider theme={defaultTheme}>
          <Input />
        </ThemeProvider>
      );
      expect(container.baseElement.firstChild).toMatchSnapshot();
    });
  });

  describe("NumericInput", () => {
    it("renders", () => {
      const container = render(
        <ThemeProvider theme={defaultTheme}>
          <NumericInput />
        </ThemeProvider>
      );
      expect(container.baseElement.firstChild).toMatchSnapshot();
    });
  });

  describe("DateInput", () => {
    it("renders", () => {
      const container = render(
        <ThemeProvider theme={defaultTheme}>
          <DateInput />
        </ThemeProvider>
      );
      expect(container.baseElement.firstChild).toMatchSnapshot();
    });
  });
});
