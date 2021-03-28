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
import { sortDataByColumn } from "./arrayUtils";
import { DownSort, Sort, UpSort } from "../Icons";
import { createUseStyles } from "react-jss";

type ColumnProps = {
  formatFunction?: (any) => React.Node,
  header?: string,
  sortable?: boolean,
  textAlign?: TextAlign,
  width?: string,
};

type ColumnHeaderProps = {
  ascending: boolean,
  header?: string,
  isSorted?: boolean,
  sortable?: boolean,
  width?: string,
  setSort?: () => void,
};

type DataTableProps = {
  columns: Array<ColumnProps>,
  data: Array<any>,
  borderWidth?: string,
};

type DataElementProps = {
  item: string,
  borderWidth?: string,
  textAlign?: TextAlign,
  width?: string,
  formatFunction?: (any) => React.Node,
};

export function DataTable({
  borderWidth,
  columns,
  data,
}: DataTableProps): React.Node {
  const classes = useDataTableStyles();
  const [tableData, setTableData] = React.useState(Object.assign(data));
  const [sortIndex, setSortIndex] = React.useState<?number>();
  const [ascending, setAscending] = React.useState(true);

  function sortData(index: number) {
    let ascendingToUse = ascending;
    if (index === sortIndex) {
      ascendingToUse = !ascending;
      setAscending(ascendingToUse);
    }
    setTableData(sortDataByColumn(tableData, index, ascendingToUse));
    setSortIndex(index);
  }

  return (
    <Table width="100%">
      <TableHead>
        <TableRow>
          {columns.map((column, index) => (
            <ColumnHeader
              key={column.header || index}
              header={column.header}
              width={column.width}
              sortable={column.sortable}
              isSorted={sortIndex === index}
              ascending={ascending}
              setSort={() => sortData(index)}
            />
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {tableData.map((row, i) => {
          return (
            <TableRow key={i}>
              {row.map((element, j) => (
                <DataElement
                  key={`${i}_${j}`}
                  item={element}
                  textAlign={columns[j].textAlign}
                  width={columns[j].width}
                  borderWidth={borderWidth}
                  formatFunction={columns[j].formatFunction}
                />
              ))}
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}

function ColumnHeader({
  ascending,
  header,
  isSorted,
  sortable,
  width,
  setSort,
}: ColumnHeaderProps) {
  return (
    <TableHeader textAlign="center" width={width}>
      {header}{" "}
      {sortable && setSort ? (
        <SortIndicator
          ascending={ascending}
          isSorted={!!isSorted}
          setSort={setSort}
        />
      ) : null}
    </TableHeader>
  );
}

function SortIndicator({
  ascending,
  isSorted,
  setSort,
}: {
  ascending: boolean,
  isSorted: boolean,
  setSort: () => void,
}) {
  const classes = useDataTableStyles();

  return (
    <div className={classes.sortIndicator} onClick={setSort}>
      {isSorted ? (
        ascending ? (
          <UpSort aria-label="ascending sort" />
        ) : (
          <DownSort aria-label="descending sort" />
        )
      ) : (
        <Sort aria-label="sortable" />
      )}
    </div>
  );
}

function DataElement({
  borderWidth,
  item,
  textAlign,
  width,
  formatFunction,
}: DataElementProps) {
  return (
    <TableData borderWidth={borderWidth} textAlign={textAlign} width={width}>
      {formatFunction ? formatFunction(item) : item}
    </TableData>
  );
}

const useDataTableStyles = createUseStyles({
  sortIndicator: {
    display: "inline-block",
  },
});
