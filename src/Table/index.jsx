// @flow
import * as React from "react";
import { createUseStyles } from "react-jss";

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

export function Table({ children }: TableProps): React.Node {
  const classes = useTableStyles();

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
  center,
  colSpan,
  rowSpan,
  scope,
  children,
  styles,
}: TableHeaderProps): React.Node {
  const classes = useTableStyles();

  return (
    <th
      className={center && classes.center}
      style={styles}
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
}: TableDataProps): React.Node {
  const classes = useTableStyles();

  return (
    <td
      className={`${classes.tableData} ${center ? classes.center : ""}`}
      style={styles}
      colSpan={colSpan ? colSpan : 1}
      rowSpan={rowSpan ? rowSpan : 1}
    >
      {children}
    </td>
  );
}

const useTableStyles = createUseStyles({
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
