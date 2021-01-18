// @flow
import * as React from "react";
import { render } from "@testing-library/react";
import { Button, Link } from "./index";
import { ThemeProvider } from "react-jss";
import { defaultTheme } from "../Theme";

describe("Button", () => {
  it("renders", () => {
    const container = render(
      <ThemeProvider theme={defaultTheme}>
        <Button name="Press Me" />
      </ThemeProvider>
    );
    expect(container.baseElement.firstChild).toMatchSnapshot();
  });
});

describe("Link", () => {
  it("renders", () => {
    const container = render(
      <ThemeProvider theme={defaultTheme}>
        <Link name="Click Me" />
      </ThemeProvider>
    );
    expect(container.baseElement.firstChild).toMatchSnapshot();
  });
});
