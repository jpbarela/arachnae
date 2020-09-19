// @flow
import * as React from "react";
import { render } from "@testing-library/react";
import { Row } from "./index";
import { StyleSheetTestUtils } from "aphrodite";

describe("Row", () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it("renders", () => {
    const container = render(<Row>I'm a row</Row>);
    expect(container.baseElement.firstChild).toMatchSnapshot();
  });
});
