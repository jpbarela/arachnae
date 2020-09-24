// @flow
import * as React from "react";
import { render } from "@testing-library/react";
import { Page } from "./index";
import { StyleSheetTestUtils } from "aphrodite";

describe("Row", () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it("renders", () => {
    const container = render(<Page>I'm a page</Page>);
    expect(container.baseElement.firstChild).toMatchSnapshot();
  });
});
