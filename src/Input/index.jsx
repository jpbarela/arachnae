// @flow
import * as React from "react";
import { createUseStyles } from "react-jss";

type InputProps = {
  placeholder?: string,
  value?: ?string,
  setValue?: (string) => void,
};

type NumericInputProps = {
  placeholder?: string,
  value?: ?number,
  setValue?: (number) => void,
};

export function Input({
  placeholder,
  value,
  setValue,
}: InputProps): React.Node {
  const classes = useInputStyles();

  return (
    <input
      placeholder={placeholder}
      value={value == null ? "" : value}
      onChange={(event) => (setValue ? setValue(event.target.value) : null)}
      className={classes.input}
    />
  );
}

export function NumericInput({
  placeholder,
  value,
  setValue,
}: NumericInputProps): React.Node {
  const classes = useInputStyles();

  return (
    <input
      type="number"
      placeholder={placeholder}
      value={value == null ? "" : value}
      onChange={(event) =>
        setValue ? setValue(parseFloat(event.target.value)) : null
      }
      className={classes.input}
    />
  );
}

const useInputStyles = createUseStyles({
  input: {
    width: "250px",
  },
});
