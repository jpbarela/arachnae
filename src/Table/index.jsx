// @flow
import * as React from "react";
import { StyleSheet, css } from "aphrodite";

type TableProps = {
  children?: React.Node,
};

type TableDataProps = {
  center?: boolean,
  colSpan?: number,
  rowSpan?: number,
  styles?: any,
  children?: React.Node,
};

type TableHeaderProps = TableDataProps & {
  scope?: string,
};

export function Table({ children }: TableProps) {
  return <table className={css(tableStyles.table)}>{children}</table>;
}

export function TableBody({ children }: TableProps) {
  return <tbody>{children}</tbody>;
}

export function TableRow({ children }: TableProps) {
  return <tr>{children}</tr>;
}

export function TableHead({ children }: TableProps) {
  return <thead>{children}</thead>;
}

export function TableHeader({
  center,
  colSpan,
  rowSpan,
  scope,
  children,
  styles,
}: TableHeaderProps) {
  return (
    <th
      className={css([center && tableStyles.center, styles])}
      colSpan={colSpan ? colSpan : 1}
      rowSpan={rowSpan ? rowSpan : 1}
      scope={scope}
    >
      {children}
    </th>
  );
}

export function TableData({
  center,
  colSpan,
  rowSpan,
  children,
  styles,
}: TableDataProps) {
  return (
    <td
      className={css([
        tableStyles.tableData,
        center && tableStyles.center,
        styles,
      ])}
      colSpan={colSpan ? colSpan : 1}
      rowSpan={rowSpan ? rowSpan : 1}
    >
      {children}
    </td>
  );
}

const tableStyles = StyleSheet.create({
  center: {
    textAlign: "center",
  },
  table: {
    borderCollapse: "collapse",
  },
  tableData: {
    border: "1px",
    borderStyle: "solid",
    margin: 0,
    padding: "5px 5px",
  },
});
