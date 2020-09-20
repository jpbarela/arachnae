// @flow
import * as React from "react";
import { render } from "@testing-library/react";
import { Table, TableBody, TableData, TableHead, TableHeader, TableRow } from "./index";
import { StyleSheetTestUtils } from "aphrodite";

describe("Row", () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it("renders", () => {
    const container = render(
    <Table>
        <TableHead>
            <TableRow><TableHeader>Name</TableHeader><TableHeader>Salary</TableHeader></TableRow>
        </TableHead>
        <TableBody>
          <TableRow><TableData>Joe</TableData><TableData>$100</TableData></TableRow>
          <TableRow><TableData>Jane</TableData><TableData>$150</TableData></TableRow>
        </TableBody>
    </Table>
    );
    expect(container.baseElement.firstChild).toMatchSnapshot();
  });
});
