// @flow
import * as React from "react";
import { render } from "@testing-library/react";
import { Input, NumericInput } from "./index";
import { StyleSheetTestUtils } from "aphrodite";

describe("Inputs", () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  describe("Input", () => {
    it("renders", () => {
        const container = render(<Input />);
        expect(container.baseElement.firstChild).toMatchSnapshot();
      });
  })

  describe("NumericInput", () => {
    it("renders", () => {
        const container = render(<NumericInput />);
        expect(container.baseElement.firstChild).toMatchSnapshot();
      });
  })
});
