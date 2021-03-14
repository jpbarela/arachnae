// @flow
import * as React from "react";
import {
  Table,
  TableBody,
  TableData,
  TableHead,
  TableHeader,
  TableRow,
} from "../Table";
import type { TextAlign } from "../commonTypes";

type DataTableProps = {
  columns: Array<ColumnProps>,
  data: Array<any>,
  borderWidth?: string,
};

type ColumnProps = {
  header?: string,
  textAlign?: TextAlign,
  width?: string,
};

type DataElementProps = {
  item: string,
  borderWidth?: string,
  textAlign?: TextAlign,
  width?: string,
};

export function DataTable({
  borderWidth,
  columns,
  data,
}: DataTableProps): React.Node {
  return (
    <Table>
      <TableHead>
        <TableRow>
          {columns.map((column, index) => (
            <ColumnHeader
              key={column.header || index}
              header={column.header}
              width={column.width}
            />
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((row, i) => {
          return (
            <TableRow key={i}>
              {row.map((element, j) => (
                <DataElement
                  key={`${i}_${j}`}
                  item={element}
                  textAlign={columns[j].textAlign}
                  width={columns[j].width}
                  borderWidth={borderWidth}
                />
              ))}
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}

function ColumnHeader({ header, width }: ColumnProps) {
  return (
    <TableHeader textAlign="center" width={width}>
      {header}
    </TableHeader>
  );
}

function DataElement({
  borderWidth,
  item,
  textAlign,
  width,
}: DataElementProps) {
  return (
    <TableData borderWidth={borderWidth} textAlign={textAlign} width={width}>
      {item}
    </TableData>
  );
}
