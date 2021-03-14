// @flow
import * as React from "react";
import { render } from "../test-utils";
import { DataTable } from "./index";

describe("Button", () => {
  it("renders", () => {
    const container = render(
      <DataTable
        columns={[
          {
            header: "Strings",
            textAlign: "left",
          },
          {
            header: "Numbers",
            textAlign: "center",
            width: "8rem",
          },
          {
            header: "Dates",
            textAlign: "right",
            width: "25rem",
          },
        ]}
        data={[
          ["a", 1, Date(2021, 0, 1)],
          ["b", 2, Date(2021, 1, 1)],
          ["c", 3, Date(2021, 2, 1)],
        ]}
      />
    );
    expect(container.baseElement.firstChild).toMatchSnapshot();
  });
});
