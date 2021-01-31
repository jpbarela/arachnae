// @flow
import * as React from "react";
import { createUseStyles } from "react-jss";

type FlexAlignType = "center" | "space-between" | "start";

export type LayoutProps = {
  height?: string,
  width?: string,
};

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
  height,
  width,
}: RowType & LayoutProps): React.Node {
  const classes = useRowStyles({ backgroundColor, justifyContent });
  const layoutClasses = useLayoutStyles({ height, width });

  return (
    <div className={[classes.row, layoutClasses.layout, className].join(", ")}>
      {children}
    </div>
  );
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

export const useLayoutStyles: (LayoutProps) => {
  layout: string,
} = createUseStyles({
  layout: {
    height: ({ height }) => height,
    width: ({ width }) => width,
  },
});
