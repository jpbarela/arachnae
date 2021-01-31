// @flow
import * as React from "react";
import { render } from "../test-utils";
import { Button } from "./index";

describe("Button", () => {
  it("renders with no style", () => {
    const container = render(<Button name="Press Me" />);
    expect(container.baseElement.firstChild).toMatchSnapshot();
  });

  it("renders with link style", () => {
    const container = render(<Button name="Click Me" style="link" />);
    expect(container.baseElement.firstChild).toMatchSnapshot();
  });

  it("renders with button style", () => {
    const container = render(<Button name="Press Me" style="button" />);
    expect(container.baseElement.firstChild).toMatchSnapshot();
  });
});
