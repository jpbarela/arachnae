// @flow
import * as React from "react";
import { render } from "@testing-library/react";
import { Page } from "./index";
import { ThemeProvider } from "react-jss";
import { defaultTheme } from "../Theme";

describe("Row", () => {
  it("renders", () => {
    const container = render(
      <ThemeProvider theme={defaultTheme}>
        <Page>I'm a page</Page>
      </ThemeProvider>
    );
    expect(container.baseElement.firstChild).toMatchSnapshot();
  });
});
