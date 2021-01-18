// @flow
import * as React from "react";
import { createUseStyles, useTheme } from "react-jss";

type ButtonProps = {
  onClick?: () => void,
  name: string,
};

function baseButton({ onClick, name, classString }: ButtonProps & { classString: string }): React.Node {
  const theme = useTheme();
  const classes = useButtonStyles(theme);

  return (
    <button type="button" onClick={onClick} className={classes[classString]}>
      {name}
    </button>
  );
}

export function Button({ onClick, name }: ButtonProps): React.Node {
  return baseButton({ onClick, name, classString: "button" })
}

export function Link({ onClick, name }: ButtonProps): React.Node {
  return baseButton({ onClick, name, classString: "link" })
}

const useButtonStyles = createUseStyles((theme) => ({
  button: {
    background: theme.button.primary,
    borderRadius: "10px",
    borderStyle: "none",
  },
  link: {
    border: 0,
    background: "inherit",
    textDecoration: "underline",
    color: theme.link.color,
  },
}));
