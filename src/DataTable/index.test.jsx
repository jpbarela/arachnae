// @flow
import * as React from "react";
import { render, screen } from "../test-utils";
import { DataTable } from "./index";
import userEvent from "@testing-library/user-event";

describe("DataTable", () => {
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
          ["a", 1, new Date(2021, 0, 1).toDateString()],
          ["b", 2, new Date(2021, 1, 1).toDateString()],
          ["c", 3, new Date(2021, 2, 1).toDateString()],
        ]}
      />
    );
    expect(container.baseElement.firstChild).toMatchSnapshot();
  });

  it("sorts the data", () => {
    render(
      <DataTable
        columns={[
          {
            header: "Strings",
            textAlign: "left",
            sortable: true,
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
          ["a", 1, new Date(2021, 0, 1).toDateString()],
          ["b", 2, new Date(2021, 1, 1).toDateString()],
          ["c", 3, new Date(2021, 2, 1).toDateString()],
        ]}
      />
    );

    const sortIndicator = screen.getByLabelText("sortable");
    expect(sortIndicator).toBeInTheDocument();
    userEvent.click(sortIndicator.closest("div"));
    const ascendingSortIndicator = screen.getByLabelText("ascending sort");
    expect(ascendingSortIndicator).toBeInTheDocument();
    userEvent.click(ascendingSortIndicator);
    const descendingSortIndicator = screen.getByLabelText("descending sort");
    expect(descendingSortIndicator).toBeInTheDocument();
  });

  it("resets ascending on multi column sorts", () => {
    render(
      <DataTable
        columns={[
          {
            header: "Strings",
            textAlign: "left",
            sortable: true,
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
            sortable: true,
          },
        ]}
        data={[
          ["a", 1, new Date(2021, 0, 1).toDateString()],
          ["b", 2, new Date(2021, 1, 1).toDateString()],
          ["c", 3, new Date(2021, 2, 1).toDateString()],
        ]}
      />
    );

    const sortIndicators = screen.getAllByLabelText("sortable");
    expect(sortIndicators.length).toBe(2);
    const firstButton = sortIndicators[0].closest("div");
    const secondButton = sortIndicators[1].closest("div");
    userEvent.click(firstButton);
    expect(screen.getByLabelText("ascending sort")).toBeInTheDocument();
    userEvent.click(secondButton);
    expect(screen.getByLabelText("ascending sort")).toBeInTheDocument();
  });
});
