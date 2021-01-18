// @flow
import * as React from "react";
import { createUseStyles } from "react-jss";

type FlexAlignType = "center" | "space-between" | "start";

type RowType = {
  justifyContent: FlexAlignType,
  children?: React.Node,
};

export function Row({ justifyContent, children }: RowType): React.Node {
  const classes = useRowStyles({ justifyContent });

  return <div className={classes.row}>{children}</div>;
}

Row.defaultProps = {
  justifyContent: "space-between",
};

const useRowStyles = createUseStyles({
  row: {
    display: "flex",
    padding: "5px 0",
    justifyContent: props => props.justifyContent,
  },
});
