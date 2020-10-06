// @flow
import * as React from "react";
import { createUseStyles, useTheme } from "react-jss";
import { format, parse } from "date-fns";
import type { ThemeType } from "../Theme";
export { SelectInput } from "./SelectInput";

type BasicInputProps = {
  placeholder?: string,
  testID?: string,
};

type InputProps = BasicInputProps & {
  value?: ?string,
  setValue?: (string) => void,
};

type NumericInputProps = BasicInputProps & {
  value?: ?number,
  setValue?: (number) => void,
};

type DateInputProps = BasicInputProps & {
  value?: Date,
  setValue?: (Date) => void,
};

export function Input({
  testID,
  value,
  setValue,
  ...props
}: InputProps): React.Node {
  const theme = useTheme();
  const classes = useInputStyles();

  return (
    <input
      {...props}
      data-testid={testID}
      value={value == null ? "" : value}
      onChange={(event) => (setValue ? setValue(event.target.value) : null)}
      className={classes.input}
    />
  );
}

export function NumericInput({
  testID,
  value,
  setValue,
  ...props
}: NumericInputProps): React.Node {
  const theme = useTheme();
  const classes = useInputStyles(theme);

  return (
    <input
      {...props}
      data-testid={testID}
      type="number"
      value={value == null ? "" : value}
      onChange={(event) =>
        setValue ? setValue(parseFloat(event.target.value)) : null
      }
      className={classes.input}
    />
  );
}

export function DateInput({
  testID,
  value,
  setValue,
  ...props
}: DateInputProps): React.Node {
  const theme = useTheme();
  const classes = useInputStyles(theme);

  return (
    <input
      {...props}
      data-testid={testID}
      type="date"
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
