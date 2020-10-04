// @flow
import * as React from "react";
import { createUseStyles, useTheme } from "react-jss";
import type { ThemeType } from "../Theme";

type PageProps = {
  children?: React.Node,
};

export function Page({ children }: PageProps): React.Node {
  const theme = useTheme();
  const classes = usePageStyles(theme);

  return <div className={classes.page}>{children}</div>;
}

const usePageStyles = createUseStyles((theme: ThemeType) => ({
  page: {
    backgroundColor: theme.background,
    color: theme.color,
    fontFamily: theme.fontFamily,
    height: "100%",
    margin: 0,
    padding: "20px",
  },
}));
