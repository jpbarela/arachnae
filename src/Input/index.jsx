// @flow
import * as React from "react";
import { createUseStyles, useTheme } from "react-jss";
import { format, parse } from "date-fns";
import type { ThemeType } from "../Theme";
export { SelectInput } from "./SelectInput";

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

type DateInputProps = {
  placeholder?: string,
  value?: Date,
  setValue?: (Date) => void,
};

export function Input({
  placeholder,
  value,
  setValue,
}: InputProps): React.Node {
  const theme = useTheme();
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
  const theme = useTheme();
  const classes = useInputStyles(theme);

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

export function DateInput({
  placeholder,
  value,
  setValue,
}: DateInputProps): React.Node {
  const theme = useTheme();
  const classes = useInputStyles(theme);

  return (
    <input
      type="date"
      placeholder={placeholder}
      value={value ? format(value, "yyyy-MM-dd") : ""}
      onChange={(event) => {
        setValue
          ? setValue(parse(event.target.value, "yyyy-MM-dd", new Date()))
          : null;
      }}
      className={[classes.input, classes.dateInput]}
    />
  );
}

const useInputStyles = createUseStyles((theme: ThemeType) => ({
  input: {
    width: "250px",
    fontFamily: theme.fontFamily,
    color: theme.color,
    background: theme.background,
    borderTopStyle: "none",
    borderLeftStyle: "none",
    borderRightStyle: "none",
    borderBottomStyle: "solid",
    borderBottomWidth: "2px",
    borderBottomColor: theme.color,
  },
  dateInput: {
    "::-webkit-calendar-picker-indicator": {
      filter: "invert(1)",
    },
  },
}));
