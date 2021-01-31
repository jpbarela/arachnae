// @flow
import * as React from "react";
import { createUseStyles } from "react-jss";

type TextProps = {
  color?: string,
  children?: React.Node,
};

export type TextStyleProps = {
  color?: string,
};

export function Title({ color, children }: TextProps): React.Node {
  const classes = useTextStyles({ color });

  return <h1 className={classes.text}>{children}</h1>;
}

export function SectionHeading({ color, children }: TextProps): React.Node {
  const classes = useTextStyles({ color });

  return <h2 className={classes.text}>{children}</h2>;
}

export const useTextStyles: (TextStyleProps) => {
  text: string,
} = createUseStyles({
  text: {
    color: ({ color }: { color: string }) => color,
  },
});
