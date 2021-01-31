// @flow
import * as React from "react";
import { createUseStyles, useTheme } from "react-jss";

type ButtonProps = {
  onClick?: () => void,
  name: string,
  style?: string,
};

export type ButtonStyleProps = {
  color?: string,
};
export function Button({
  onClick,
  name,
  color,
  style,
}: ButtonProps & ButtonStyleProps): React.Node {
  const theme = useTheme();
  const classes = useButtonStyles({ color });

  return (
    <button type="button" onClick={onClick} className={style && classes[style]}>
      {name}
    </button>
  );
}

Button.defaultProps = {
  style: "button",
};

export const useButtonStyles: (ButtonStyleProps) => {
  button: string,
  link: string,
} = createUseStyles((theme) => {
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
