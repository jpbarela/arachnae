// @flow
import * as React from "react";
import { createUseStyles, useTheme } from "react-jss";

type ButtonProps = {
  onClick?: () => void,
  name: string,
};

export function Button({ onClick, name }: ButtonProps): React.Node {
  const theme = useTheme();
  const classes = useButtonStyles(theme);

  return (
    <button onClick={onClick} className={classes.button}>
      {name}
    </button>
  );
}

const useButtonStyles = createUseStyles((theme) => ({
  button: {
    background: theme.button.primary,
    borderRadius: "10px",
    borderStyle: "none",
  },
}));
