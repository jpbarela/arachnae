// @flow
import * as React from "react";
import { render } from "@testing-library/react";
import { Button } from "./index";
import { ThemeProvider } from "react-jss";
import { defaultTheme } from "../Theme";

describe("Button", () => {
  it("renders with no style", () => {
    const container = render(
      <ThemeProvider theme={defaultTheme}>
        <Button name="Press Me" />
      </ThemeProvider>
    );
    expect(container.baseElement.firstChild).toMatchSnapshot();
  });

  it("renders with link style", () => {
    const container = render(
      <ThemeProvider theme={defaultTheme}>
        <Button name="Click Me" style="link" />
      </ThemeProvider>
    );
    expect(container.baseElement.firstChild).toMatchSnapshot();
  });

  it("renders with button style", () => {
    const container = render(
      <ThemeProvider theme={defaultTheme}>
        <Button name="Click Me" style="button" />
      </ThemeProvider>
    );
    expect(container.baseElement.firstChild).toMatchSnapshot();
  });
});
