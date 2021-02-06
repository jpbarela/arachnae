// @flow
import * as React from "react";
import { createUseStyles, useTheme } from "react-jss";

type ButtonProps = {
  onClick?: () => void,
  name: string,
  disabled?: boolean,
  type?: string,
};

export type ButtonStyleProps = {
  color?: string,
  margin?: string,
  marginRight?: string,
  marginLeft?: string,
  marginTop?: string,
  marginBottom?: string,
};
export function Button({
  onClick,
  name,
  disabled,
  color,
  margin,
  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
  type,
}: ButtonProps & ButtonStyleProps): React.Node {
  const theme = useTheme();
  const classes = useButtonStyles({
    color,
    disabled,
    margin,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
  });

  return (
    <button
      type="button"
      onClick={onClick}
      className={[type && classes[type], classes.common].join(" ")}
      disabled={disabled}
    >
      {name}
    </button>
  );
}

Button.defaultProps = {
  type: "button",
};

export const useButtonStyles: (ButtonStyleProps) => {
  button: string,
  common: string,
  link: string,
} = createUseStyles((theme) => {
  return {
    button: {
      background: theme.button.primary,
      borderRadius: "0.75rem",
      borderStyle: "none",
      color: ({ color }) => color || theme.button.color,
      opacity: ({ disabled }) => (disabled ? 0.5 : 1),
    },
    common: {
      fontSize: "1rem",
      margin: ({ margin }) => margin,
      marginLeft: ({ marginLeft }) => marginLeft,
      marginRight: ({ marginRight }) => marginRight,
      marginTop: ({ marginTop }) => marginTop,
      marginBottom: ({ marginBottom }) => marginBottom,
    },
    link: {
      border: 0,
      background: "inherit",
      textDecoration: "underline",
      color: ({ color }) => color || theme.button.primary,
      opacity: ({ disabled }) => (disabled ? 0.5 : 1),
      padding: 0,
    },
  };
});
