// @flow
import * as React from "react";
import { render } from "@testing-library/react";
import { SectionHeading, Title } from "./index";

describe("Typography", () => {
  describe("SectionHeader", () => {
    it("renders", () => {
      const container = render(
        <SectionHeading>Section Heading</SectionHeading>
      );
      expect(container.baseElement.firstChild).toMatchSnapshot();
    });
  });

  describe("NumericInput", () => {
    it("renders", () => {
      const container = render(<Title>Title</Title>);
      expect(container.baseElement.firstChild).toMatchSnapshot();
    });
  });
});
