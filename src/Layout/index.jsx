// @flow
import * as React from "react";
import { StyleSheet, css } from "aphrodite";

type FlexAlignType = "center" | "space-between";

type RowType = {
  justifyContent: FlexAlignType,
  children?: React.Node,
};

export function Row({ justifyContent, children }: RowType) {
  return (
    <div className={css([styles.row, styles[justifyContent]])}>{children}</div>
  );
}

Row.defaultProps = {
  justifyContent: "space-between",
};

const styles = StyleSheet.create({
  row: {
    display: "flex",
    padding: "5px 0",
  },
  center: {
    justifyContent: "center",
  },
  "space-between": {
    justifyContent: "space-between",
  },
});
