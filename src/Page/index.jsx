// @flow
import * as React from "react";
import { StyleSheet, css } from "aphrodite";

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
  return (
    <div
      className={css(pageStyles.page)}
      style={{ backgroundColor, color, fontFamily }}
    >
      {children}
    </div>
  );
}

const pageStyles = StyleSheet.create({
  page: {
    margin: 0,
    padding: "20px",
    height: "100%",
  },
});
