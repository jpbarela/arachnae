// @flow
import * as React from "react";

type TextProps = {
  children?: React.Node,
};

export function Title({ children }: TextProps): React.Node {
  return <h1>{children}</h1>;
}

export function SectionHeading({ children }: TextProps): React.Node {
  return <h2>{children}</h2>;
}
