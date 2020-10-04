// @flow
import * as React from "react";
import { render } from "@testing-library/react";
import { Page } from "./index";

describe("Row", () => {
  it("renders", () => {
    const container = render(<Page>I'm a page</Page>);
    expect(container.baseElement.firstChild).toMatchSnapshot();
  });
});
