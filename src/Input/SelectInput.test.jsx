// @flow
import * as React from "react";
import { render } from "@testing-library/react";
import { SelectInput } from "./index";
import { ThemeProvider } from "react-jss";
import { defaultTheme } from "../Theme";

describe("SelectInput", () => {
  it("renders", () => {
    const container = render(
      <ThemeProvider theme={defaultTheme}>
        <SelectInput
          options={[
            { value: "1", name: "One" },
            { value: "2", name: "Two" },
          ]}
        />
      </ThemeProvider>
    );
    expect(container.baseElement.firstChild).toMatchSnapshot();
  });
});
