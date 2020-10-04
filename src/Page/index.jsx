// @flow
import * as React from "react";
import { createUseStyles } from "react-jss";

type PageProps = {
  backgroundColor?: string,
  color?: string,
  fontFamily?: string,
  children?: React.Node,
};

export function Page({
  backgroundColor,
  color,
  fontFamily,
  children,
}: PageProps): React.Node {
  const classes = usePageStyles();

  return (
    <div
      className={classes.page}
      style={{ backgroundColor, color, fontFamily }}
    >
      {children}
    </div>
  );
}

const usePageStyles = createUseStyles({
  page: {
    margin: 0,
    padding: "20px",
    height: "100%",
  },
});
