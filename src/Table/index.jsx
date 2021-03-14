// @flow
import * as React from "react";
import { createUseStyles } from "react-jss";
import type { TextAlign } from "../commonTypes";

type TableProps = {
  children?: React.Node,
};

type TableDataProps = {
  borderWidth?: string,
  colSpan?: number,
  rowSpan?: number,
  styles?: any,
  textAlign?: TextAlign,
  width?: string,
  children?: React.Node,
};

type TableHeaderProps = TableDataProps & {
  scope?: string,
};

export function Table({ children }: TableProps): React.Node {
  const classes = useTableStyles({});

  return <table className={classes.table}>{children}</table>;
}

export function TableBody({ children }: TableProps): React.Node {
  return <tbody>{children}</tbody>;
}

export function TableRow({ children }: TableProps): React.Node {
  return <tr>{children}</tr>;
}

export function TableHead({ children }: TableProps): React.Node {
  return <thead>{children}</thead>;
}

export function TableHeader({
  colSpan,
  rowSpan,
  scope,
  textAlign,
  width,
  children,
  styles,
}: TableHeaderProps): React.Node {
  const classes = useTableStyles({ textAlign, width });

  return (
    <th
      className={classes.tableHeader}
      style={styles}
      colSpan={colSpan ? colSpan : 1}
      rowSpan={rowSpan ? rowSpan : 1}
      scope={scope}
    >
      {children}
    </th>
  );
}

TableHeader.defaultProps = {
  textAlign: "center",
};

export function TableData({
  borderWidth,
  colSpan,
  rowSpan,
  children,
  textAlign,
  width,
  styles,
}: TableDataProps): React.Node {
  const classes = useTableStyles({ borderWidth, textAlign, width });

  return (
    <td
      className={classes.tableData}
      style={styles}
      colSpan={colSpan ? colSpan : 1}
      rowSpan={rowSpan ? rowSpan : 1}
    >
      {children}
    </td>
  );
}

TableData.defaultProps = { borderWidth: "1px", textAlign: "right" };

const useTableStyles = createUseStyles({
  table: {
    borderCollapse: "collapse",
  },
  tableData: {
    borderWidth: ({ borderWidth }) => borderWidth,
    borderStyle: "solid",
    margin: 0,
    padding: "5px 5px",
    textAlign: ({ textAlign }) => textAlign,
    width: ({ width }) => width,
  },
  tableHeader: {
    textAlign: ({ textAlign }) => textAlign,
    width: ({ width }) => width,
  },
});
