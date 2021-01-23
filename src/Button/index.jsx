// @flow
import * as React from "react";
import { createUseStyles, useTheme } from "react-jss";

type ButtonProps = {
  onClick?: () => void,
  name: string,
  color?: string,
  style?: string,
};

export function Button({
  onClick,
  name,
  color,
  style,
}: ButtonProps): React.Node {
  const theme = useTheme();
  const classes = useButtonStyles({ color });

  return (
    <button type="button" onClick={onClick} className={classes[style]}>
      {name}
    </button>
  );
}

Button.defaultProps = {
  style: "button",
};

const useButtonStyles = createUseStyles((theme) => {
  return {
    button: {
      background: theme.button.primary,
      borderRadius: "10px",
      borderStyle: "none",
      color: ({ color }) => color || theme.button.color,
    },
    link: {
      border: 0,
      background: "inherit",
      textDecoration: "underline",
      color: ({ color }) => color || theme.button.primary,
    },
  };
});
