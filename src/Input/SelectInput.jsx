// @flow
import * as React from "react";
import { createUseStyles, useTheme } from "react-jss";
import type { ThemeType } from "../Theme";

type OptionType = {
  value: string,
  name: string,
};

type SelectInputProps = {
  label?: string,
  options: OptionType[],
  value?: string,
  setValue?: (string) => void,
};

export function SelectInput({
  label,
  options,
  value,
  setValue,
}: SelectInputProps): React.Node {
  const theme = useTheme();
  const classes = useSelectStyles(theme);

  return (
    <div className={classes.inputContainer}>
      {label ? <label>{label}</label> : null}
      <select
        value={value == null ? "" : value}
        onChange={(event) => (setValue ? setValue(event.target.value) : null)}
        className={classes.select}
      >
        <option value="" disabled />
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
}

const useSelectStyles = createUseStyles((theme: ThemeType) => ({
  inputContainer: {
    display: "flex",
    flexDirection: "column",
  },
  select: {
    backgroundColor: theme.background,
    borderTopStyle: "none",
    borderLeftStyle: "none",
    borderRightStyle: "none",
    borderBottomStyle: "solid",
    borderBottomWidth: "2px",
    borderBottomColor: theme.color,
    color: theme.color,
    fontFamily: theme.fontFamily,
  },
}));
