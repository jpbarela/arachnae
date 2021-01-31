// @flow
import * as React from "react";
import { createUseStyles } from "react-jss";

type FlexAlignType = "center" | "space-between" | "start";

type RowType = {
  justifyContent: FlexAlignType,
  backgroundColor?: string,
  children?: React.Node,
  className?: string,
};

export function Row({
  justifyContent,
  backgroundColor,
  children,
  className,
}: RowType): React.Node {
  const classes = useRowStyles({ backgroundColor, justifyContent });

  return <div className={[classes.row, className].join(", ")}>{children}</div>;
}

Row.defaultProps = {
  justifyContent: "space-between",
};

const useRowStyles = createUseStyles({
  row: {
    display: "flex",
    padding: "5px 0",
    justifyContent: ({ justifyContent }: { justifyContent: FlexAlignType }) =>
      justifyContent,
    backgroundColor: ({ backgroundColor }: { backgroundColor: string }) =>
      backgroundColor,
  },
});
