// @flow
import * as React from "react";
import { Table, TableBody, TableHeader, TableRow } from "../Table";
import { createUseStyles } from "react-jss";

type DataTableProps = {
  columns: Array<ColumnProp>,
  data: Array<Any>,
};

type ColumnProps = {
  header: string,
  textAlign: TextAlign,
  width: string,
};

type TextAlign = "left" | "right" | "center";

type DataElementProps = {
  textAlign: TextAlign,
  width: string,
  item: string,
};

export function DataTable({ columns, data }: DataTableProps) {
  return (
    <Table>
      <TableRow>
        {columns.map((columnProps) => (
          <ColumnHeader {...ColumnProps} />
        ))}
      </TableRow>
      {data.map((row) => {
        return (
          <TableRow>
            {row.map((element, index) => (
              <DataElement
                item={element.item}
                textAlign={element.textAlign}
                width={element.width}
              />
            ))}
          </TableRow>
        );
      })}
    </Table>
  );
}

function ColumnHeader({ header }: ColumnProps) {
  return <TableHeader>{header}</TableHeader>;
}

function DataElement({ item, textAlign, width }: DataTableProps) {
  const useDataStyles = useDataTableStysles({ textAlign, width });

  return <TableBody className={useDataStyles.tableData}>{item}</TableBody>;
}

const useDataTableStysles = createUseStyles({
  tableData: {
    textAlign: ({ textAlign }) => textAlign,
    width: ({ width }) => width,
  },
});
