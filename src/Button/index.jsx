// @flow
import * as React from "react";
import { createUseStyles, useTheme } from "react-jss";

type ButtonProps = {
  onClick?: () => void,
  name: string,
  color?: string,
};

function baseButton({
  onClick,
  name,
  color,
  classString,
}: ButtonProps & { classString: string }): React.Node {
  const theme = useTheme();
  const classes = useButtonStyles({ color });

  return (
    <button type="button" onClick={onClick} className={classes[classString]}>
      {name}
    </button>
  );
}

export function Button(props: ButtonProps): React.Node {
  return baseButton({ ...props, classString: "button" });
}

export function Link(props: ButtonProps): React.Node {
  return baseButton({ ...props, classString: "link" });
}

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
      color: theme.link.color,
    },
  };
});
