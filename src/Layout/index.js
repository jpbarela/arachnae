// @flow
import * as React from "react";
import { createUseStyles } from "react-jss";

type FlexAlignType = "center" | "space-between" | "start";

export type ContainerProps = {
  backgroundColor?: string,
  border?: string,
  borderBottom?: string,
  borderLeft?: string,
  borderRight?: string,
  boderTop?: string,
  height?: string,
  padding?: string,
  paddingBottom?: string,
  paddingLeft?: string,
  paddingRight?: string,
  paddingTop?: string,
  width?: string,
};

export type LayoutProps = {
  height?: string,
  width?: string,
};

type RowType = {
  justifyContent: FlexAlignType,
  alignItems: FlexAlignType,
  container?: ContainerProps,
  children?: React.Node,
  className?: string,
};

export function Row({
  alignItems,
  justifyContent,
  container,
  children,
  className,
}: RowType & LayoutProps): React.Node {
  const classes = useRowStyles({ alignItems, justifyContent });
  const containerClasses = useContainerStyles(container || {});

  return (
    <div
      className={[classes.row, containerClasses.container, className]
        .join(" ")
        .trim()}
    >
      {children}
    </div>
  );
}

Row.defaultProps = {
  alignItems: "start",
  justifyContent: "space-between",
};

const useRowStyles = createUseStyles({
  row: {
    display: "flex",
    padding: "0.375rem 0",
    alignItems: ({ alignItems }: { alignItems: FlexAlignType }) => alignItems,
    justifyContent: ({ justifyContent }: { justifyContent: FlexAlignType }) =>
      justifyContent,
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

export const useContainerStyles: (
  container: ContainerProps
) => {
  container: string,
} = createUseStyles({
  container: {
    backgroundColor: (container) => container.backgroundColor,
    border: (container) => container.border,
    borderBottom: (container) => container.borderBottom,
    borderLeft: (container) => container.borderLeft,
    borderRight: (container) => container.borderRight,
    borderTop: (container) => container.borderTop,
    height: (container) => container.height,
    padding: (container) => container.padding,
    paddingBottom: (container) => container.paddingBottom,
    paddingLeft: (container) => container.paddingLeft,
    paddingRight: (container) => container.paddingRight,
    paddingTop: (container) => container.paddingTop,
    width: (container) => container.width,
  },
});
